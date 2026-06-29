import { MarketingBlogPage } from '@/components/marketing/MarketingPages';
import { buildMarketingMetadata } from '@/lib/marketingSeo';

export const metadata = buildMarketingMetadata('es', 'blog');

export default function BlogPage() {
  return <MarketingBlogPage locale="es" />;
}
