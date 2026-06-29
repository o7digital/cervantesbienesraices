import type { Metadata } from 'next';
import {
  getMarketingContent,
  getMarketingPath,
  marketingLocales,
  type MarketingLocale,
  type MarketingPageKey,
} from './marketingContent';

const DEFAULT_SITE_URL = 'https://crm-suites-o7.vercel.app';

export function getMarketingSiteUrl() {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_MARKETING_SITE_URL || DEFAULT_SITE_URL).trim();
  return raw.replace(/\/+$/, '');
}

export function buildMarketingAlternates(locale: MarketingLocale, page: MarketingPageKey, slug?: string) {
  const siteUrl = getMarketingSiteUrl();
  const languages = Object.fromEntries(
    marketingLocales.map((lang) => [lang, `${siteUrl}${getMarketingPath(lang, page, slug)}`]),
  );
  return {
    canonical: `${siteUrl}${getMarketingPath(locale, page, slug)}`,
    languages: {
      ...languages,
      'x-default': `${siteUrl}${getMarketingPath('es', page, slug)}`,
    },
  };
}

export function buildMarketingMetadata(locale: MarketingLocale, page: Exclude<MarketingPageKey, 'blogPost'>): Metadata {
  const marketing = getMarketingContent(locale);
  const titleByPage = {
    home: marketing.seo.homeTitle,
    about: marketing.seo.aboutTitle,
    services: marketing.seo.servicesTitle,
    contact: marketing.seo.contactTitle,
    blog: marketing.seo.blogTitle,
  } as const;
  const descriptionByPage = {
    home: marketing.seo.homeDescription,
    about: marketing.seo.aboutDescription,
    services: marketing.seo.servicesDescription,
    contact: marketing.seo.contactDescription,
    blog: marketing.seo.blogDescription,
  } as const;
  const siteUrl = getMarketingSiteUrl();
  const path = getMarketingPath(locale, page);

  return {
    metadataBase: new URL(siteUrl),
    title: titleByPage[page],
    description: descriptionByPage[page],
    alternates: buildMarketingAlternates(locale, page),
    openGraph: {
      title: titleByPage[page],
      description: descriptionByPage[page],
      url: `${siteUrl}${path}`,
      siteName: marketing.seo.defaultTitle,
      locale,
      type: 'website',
      images: [`${siteUrl}/marketing/javier-cervantes.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleByPage[page],
      description: descriptionByPage[page],
      images: [`${siteUrl}/marketing/javier-cervantes.png`],
    },
  };
}

export function buildMarketingPostMetadata(locale: MarketingLocale, slug: string): Metadata {
  const marketing = getMarketingContent(locale);
  const post = marketing.blog.posts.find((item) => item.slug === slug);
  const siteUrl = getMarketingSiteUrl();

  if (!post) {
    return {
      metadataBase: new URL(siteUrl),
      title: marketing.seo.blogTitle,
      description: marketing.seo.blogDescription,
    };
  }

  return {
    metadataBase: new URL(siteUrl),
    title: post.title,
    description: post.excerpt,
    alternates: buildMarketingAlternates(locale, 'blogPost', slug),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}${getMarketingPath(locale, 'blogPost', slug)}`,
      siteName: marketing.seo.defaultTitle,
      locale,
      type: 'article',
      images: [`${siteUrl}${post.coverImage}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${siteUrl}${post.coverImage}`],
    },
  };
}
