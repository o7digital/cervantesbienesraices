import { notFound } from 'next/navigation';
import { MarketingHomePage } from '@/components/marketing/MarketingPages';
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
  return buildMarketingMetadata(lang, 'home');
}

export default async function LocalizedHomePage({ params }: Props) {
  const { lang } = await params;
  if (!isMarketingLocale(lang) || lang === 'es') notFound();
  return <MarketingHomePage locale={lang} />;
}
