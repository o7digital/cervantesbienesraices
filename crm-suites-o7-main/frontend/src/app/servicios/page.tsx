import { MarketingServicesPage } from '@/components/marketing/MarketingPages';
import { buildMarketingMetadata } from '@/lib/marketingSeo';

export const metadata = buildMarketingMetadata('es', 'services');

export default function ServiciosPage() {
  return <MarketingServicesPage locale="es" />;
}
