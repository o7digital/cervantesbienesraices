import type { MetadataRoute } from 'next';
import { getMarketingContent, getMarketingPath, marketingLocales } from '@/lib/marketingContent';
import { getMarketingSiteUrl } from '@/lib/marketingSeo';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getMarketingSiteUrl();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of marketingLocales) {
    entries.push({
      url: `${siteUrl}${getMarketingPath(locale, 'home')}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(marketingLocales.map((lang) => [lang, `${siteUrl}${getMarketingPath(lang, 'home')}`])),
      },
    });
    entries.push({
      url: `${siteUrl}${getMarketingPath(locale, 'about')}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(marketingLocales.map((lang) => [lang, `${siteUrl}${getMarketingPath(lang, 'about')}`])),
      },
    });
    entries.push({
      url: `${siteUrl}${getMarketingPath(locale, 'services')}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(marketingLocales.map((lang) => [lang, `${siteUrl}${getMarketingPath(lang, 'services')}`])),
      },
    });
    entries.push({
      url: `${siteUrl}${getMarketingPath(locale, 'contact')}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(marketingLocales.map((lang) => [lang, `${siteUrl}${getMarketingPath(lang, 'contact')}`])),
      },
    });
    entries.push({
      url: `${siteUrl}${getMarketingPath(locale, 'blog')}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(marketingLocales.map((lang) => [lang, `${siteUrl}${getMarketingPath(lang, 'blog')}`])),
      },
    });

    for (const post of getMarketingContent(locale).blog.posts) {
      entries.push({
        url: `${siteUrl}${getMarketingPath(locale, 'blogPost', post.slug)}`,
        lastModified: new Date(post.date),
        alternates: {
          languages: Object.fromEntries(marketingLocales.map((lang) => [lang, `${siteUrl}${getMarketingPath(lang, 'blogPost', post.slug)}`])),
        },
      });
    }
  }

  return entries;
}
