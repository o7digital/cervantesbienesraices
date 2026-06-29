import { MarketingContactPage } from '@/components/marketing/MarketingPages';
import { buildMarketingMetadata } from '@/lib/marketingSeo';

export const metadata = buildMarketingMetadata('es', 'contact');

export default function ContactoPage() {
  return <MarketingContactPage locale="es" />;
}
