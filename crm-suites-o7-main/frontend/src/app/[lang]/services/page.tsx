import { notFound } from 'next/navigation';
import { MarketingServicesPage } from '@/components/marketing/MarketingPages';
import { buildMarketingMetadata } from '@/lib/marketingSeo';
import { isMarketingLocale, secondaryMarketingLocales } from '@/lib/marketingContent';

type Props = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return secondaryMarketingLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isMarketingLocale(lang) || lang === 'es') return {};
  return buildMarketingMetadata(lang, 'services');
}

export default async function LocalizedServicesPage({ params }: Props) {
  const { lang } = await params;
  if (!isMarketingLocale(lang) || lang === 'es') notFound();
  return <MarketingServicesPage locale={lang} />;
}
