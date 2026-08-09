import { SITE_URL, seoByPath } from "@/data/seo";

const EASY_BROKER_URL = "https://api.easybroker.com/v1/properties";

type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function fetchPublishedPropertyUrls(): Promise<SitemapUrl[]> {
  const apiKey = process.env.EB_API_KEY;
  if (!apiKey) return [];

  const urls: SitemapUrl[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(
      `${EASY_BROKER_URL}?page=${page}&limit=50&search[statuses][]=published`,
      {
        headers: {
          accept: "application/json",
          "X-Authorization": apiKey,
        },
      }
    );

    if (!response.ok) break;

    const data = await response.json();
    const properties = Array.isArray(data.content) ? data.content : [];
    for (const property of properties) {
      const id = property.public_id;
      if (!id) continue;

      const lastmod = property.updated_at
        ? new Date(property.updated_at).toISOString()
        : undefined;

      for (const prefix of ["", "/en", "/fr", "/it", "/de", "/ru"]) {
        urls.push({
          loc: `${SITE_URL}${prefix}/property/${id}`,
          lastmod,
          changefreq: "weekly",
          priority: "0.8",
        });
      }
    }

    hasMore = Boolean(data.pagination?.next_page);
    page += 1;
  }

  return urls;
}

export async function GET() {
  const now = new Date().toISOString();
  const staticUrls: SitemapUrl[] = Object.values(seoByPath).map((entry) => ({
    loc: entry.canonical,
    lastmod: now,
    changefreq: entry.canonical === SITE_URL ? "daily" : "weekly",
    priority: entry.canonical === SITE_URL ? "1.0" : "0.8",
  }));

  const propertyUrls = await fetchPublishedPropertyUrls();
  const urls = [...staticUrls, ...propertyUrls];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    ${url.lastmod ? `<lastmod>${escapeXml(url.lastmod)}</lastmod>` : ""}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
