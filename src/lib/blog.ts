import mockBlogPosts from "@/data/blog/posts";
import { BlogPost } from "@/types/blog";

const BLOG_ENABLED = process.env.NEXT_PUBLIC_BLOG_ENABLED !== "off";
const DATO_ENDPOINT =
  process.env.DATOCMS_API_URL ?? "https://graphql.datocms.com/";
const DATO_TOKEN = process.env.DATOCMS_API_TOKEN;
const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

const defaultDatoQuery = `
  query BlogPosts($limit: IntType = 12) {
    allPosts(orderBy: _firstPublishedAt_DESC, first: $limit) {
      id
      title
      slug
      excerpt
      category
      coverImage { url }
      _firstPublishedAt
      publishedAt
      readTimeMinutes
      readingTime
      tags
      author { name }
      content
    }
  }
`;

const datoQuery = process.env.DATOCMS_BLOG_QUERY ?? defaultDatoQuery;

export async function getBlogPosts(limit = 12): Promise<BlogPost[]> {
  if (!BLOG_ENABLED) return [];

  const sources = [fetchFromDato, fetchFromDirectus];

  for (const source of sources) {
    try {
      const posts = await source(limit);
      if (posts.length) return posts.slice(0, limit);
    } catch (error) {
      console.error("[blog] Source failed", error);
    }
  }

  return mockBlogPosts.slice(0, limit);
}

async function fetchFromDato(limit: number): Promise<BlogPost[]> {
  if (!DATO_TOKEN) return [];

  const res = await fetch(DATO_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DATO_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: datoQuery, variables: { limit } }),
    next: { revalidate: 300, tags: ["blog"] }
  });

  if (!res.ok) {
    console.error("[DatoCMS] Request failed", res.status, await res.text());
    return [];
  }

  const { data, errors } = await res.json();
  if (errors) {
    console.error("[DatoCMS] GraphQL errors", errors);
    return [];
  }

  const collection = Array.isArray(data)
    ? data
    : (Object.values(data || {}).find(Array.isArray) as any[] | undefined);

  if (!collection?.length) return [];

  return collection
    .map(normalizeDatoEntry)
    .filter((item): item is BlogPost => Boolean(item));
}

async function fetchFromDirectus(limit: number): Promise<BlogPost[]> {
  if (!DIRECTUS_URL) return [];

  const url = new URL(`${DIRECTUS_URL}/items/blog_posts`);
  url.searchParams.set("limit", limit.toString());
  url.searchParams.append("sort", "-published_at");
  url.searchParams.append("fields", [
    "id",
    "slug",
    "title",
    "excerpt",
    "category",
    "tags",
    "published_at",
    "read_time",
    "author",
    "cover_image",
    "content"
  ].join(","));

  const res = await fetch(url.toString(), {
    next: { revalidate: 300, tags: ["blog"] }
  });
  if (!res.ok) {
    console.error("[Directus] Request failed", res.status, await res.text());
    return [];
  }

  const { data } = await res.json();
  if (!Array.isArray(data)) return [];

  return data
    .map((item: any) => normalizeDirectusEntry(item, DIRECTUS_URL))
    .filter((item): item is BlogPost => Boolean(item));
}

function normalizeDatoEntry(entry: any): BlogPost | null {
  if (!entry) return null;

  const slug =
    entry.slug ??
    entry.permalink ??
    (typeof entry.label === "string"
      ? entry.label.toLowerCase().replace(/\s+/g, "-")
      : undefined) ??
    entry.id?.toString();
  if (!slug) return null;

  const image =
    entry.coverImage?.url ??
    entry.cover_image?.url ??
    entry.cover_image?.url ??
    entry.image?.url ??
    entry.image?.src ??
    entry.image ??
    "/assets/images/blog/blog_img_01.jpg";

  const tags = Array.isArray(entry.tags)
    ? entry.tags.map((tag: any) => (typeof tag === "string" ? tag : tag?.name)).filter(Boolean)
    : undefined;

  return {
    id: entry.id?.toString() ?? slug,
    slug,
    title: entry.title ?? entry.label ?? entry.name ?? "Artículo",
    excerpt: entry.excerpt ?? entry.extracto ?? entry.description ?? "",
    coverImage: image,
    category:
      typeof entry.category === "string"
        ? entry.category
        : entry.category?.name ?? "blog",
    date: normalizeDate(
      entry._firstPublishedAt ?? entry.publishedAt ?? entry.date ?? entry.updatedAt
    ),
    readTimeMinutes: entry.readTimeMinutes ?? entry.readingTime ?? entry.timeToRead,
    author: typeof entry.author === "string" ? entry.author : entry.author?.name,
    sourceUrl: entry.text_url ?? entry.sourceUrl ?? undefined,
    tags,
    content: Array.isArray(entry.content) ? entry.content : undefined
  };
}

function normalizeDirectusEntry(entry: any, baseUrl: string): BlogPost | null {
  if (!entry) return null;

  const slug =
    entry.slug ??
    (typeof entry.label === "string"
      ? entry.label.toLowerCase().replace(/\s+/g, "-")
      : undefined) ??
    entry.id?.toString();
  if (!slug) return null;

  const imageField = entry.cover_image;
  const coverImage =
    typeof imageField === "string"
      ? `${baseUrl}/assets/${imageField}`
      : imageField?.data?.full_url ??
        imageField?.full_url ??
        imageField?.url ??
        "/assets/images/blog/blog_img_03.jpg";

  const tags = Array.isArray(entry.tags)
    ? entry.tags.map((tag: any) => (typeof tag === "string" ? tag : tag?.name)).filter(Boolean)
    : undefined;

  return {
    id: entry.id?.toString() ?? slug,
    slug,
    title: entry.title ?? "Artículo",
    excerpt: entry.excerpt ?? entry.extracto ?? "",
    coverImage,
    category:
      typeof entry.category === "string"
        ? entry.category
        : entry.category?.name ?? "blog",
    date: normalizeDate(entry.published_at ?? entry.date_created ?? entry.date),
    readTimeMinutes: entry.read_time ?? entry.readTime,
    author: entry.author?.name ?? entry.author ?? undefined,
    sourceUrl: entry.text_url ?? entry.source_url ?? entry.sourceUrl,
    tags,
    content: Array.isArray(entry.content) ? entry.content : undefined
  };
}

function normalizeDate(date: string | undefined): string {
  if (!date) return new Date().toISOString();
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}
