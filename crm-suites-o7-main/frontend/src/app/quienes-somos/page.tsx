import { MarketingAboutPage } from '@/components/marketing/MarketingPages';
import { buildMarketingMetadata } from '@/lib/marketingSeo';

export const metadata = buildMarketingMetadata('es', 'about');

export default function QuienesSomosPage() {
  return <MarketingAboutPage locale="es" />;
}
