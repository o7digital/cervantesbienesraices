import { MarketingHomePage } from '@/components/marketing/MarketingPages';
import { buildMarketingMetadata } from '@/lib/marketingSeo';

export const metadata = buildMarketingMetadata('es', 'home');

export default function HomePage() {
  return <MarketingHomePage locale="es" />;
}
