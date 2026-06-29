import { notFound } from 'next/navigation';
import { MarketingBlogPostPage } from '@/components/marketing/MarketingPages';
import { buildMarketingPostMetadata } from '@/lib/marketingSeo';
import { getMarketingContent, isMarketingLocale, secondaryMarketingLocales } from '@/lib/marketingContent';

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return secondaryMarketingLocales.flatMap((lang) =>
    getMarketingContent(lang).blog.posts.map((post) => ({ lang, slug: post.slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  if (!isMarketingLocale(lang) || lang === 'es') return {};
  return buildMarketingPostMetadata(lang, slug);
}

export default async function LocalizedBlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isMarketingLocale(lang) || lang === 'es') notFound();
  return <MarketingBlogPostPage locale={lang} slug={slug} />;
}
