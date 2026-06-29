import { MarketingBlogPostPage } from '@/components/marketing/MarketingPages';
import { buildMarketingPostMetadata } from '@/lib/marketingSeo';
import { getMarketingContent } from '@/lib/marketingContent';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getMarketingContent('es').blog.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return buildMarketingPostMetadata('es', slug);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return <MarketingBlogPostPage locale="es" slug={slug} />;
}
