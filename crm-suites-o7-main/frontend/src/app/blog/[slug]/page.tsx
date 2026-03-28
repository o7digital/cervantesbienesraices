import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MarketingShell } from '@/components/marketing/MarketingShell';
import { blogPosts, formatMarketingDate, getPostBySlug } from '@/lib/marketingContent';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Artículo no encontrado' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <MarketingShell>
      <section className="marketing-section">
        <div className="marketing-container">
          <div className="mx-auto max-w-4xl">
            <p className="marketing-kicker">Blog</p>
            <h1 className="marketing-display mt-3 text-6xl text-stone-900">{post.title}</h1>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-stone-500">
              {formatMarketingDate(post.date)} · {post.author} · {post.readTimeMinutes} min
            </p>
            <p className="mt-6 text-lg leading-8 text-stone-600">{post.excerpt}</p>
          </div>

          <div className="relative mx-auto mt-12 h-80 max-w-5xl overflow-hidden rounded-[2rem]">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(min-width: 1280px) 1200px, 100vw" />
          </div>

          <article className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-8 text-stone-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </MarketingShell>
  );
}
