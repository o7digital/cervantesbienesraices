import Link from 'next/link';
import { ReactNode } from 'react';
import {
  getMarketingContent,
  getMarketingPath,
  marketingLocales,
  type MarketingLocale,
  type MarketingPageKey,
} from '@/lib/marketingContent';

type Props = {
  locale: MarketingLocale;
  page: MarketingPageKey;
  slug?: string;
  children: ReactNode;
};

export function MarketingShell({ locale, page, slug, children }: Props) {
  const marketing = getMarketingContent(locale);
  const navItems = [
    { page: 'home' as const, label: marketing.nav.home },
    { page: 'about' as const, label: marketing.nav.about },
    { page: 'services' as const, label: marketing.nav.services },
    { page: 'blog' as const, label: marketing.nav.blog },
    { page: 'contact' as const, label: marketing.nav.contact },
  ];

  return (
    <div className="marketing-page min-h-screen">
      <header className="marketing-header">
        <div className="marketing-container flex flex-col gap-4 py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link href={getMarketingPath(locale, 'home')} className="flex items-center gap-3">
              <div className="marketing-brand-mark">CBR</div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-stone-500">{marketing.tagLine}</p>
                <p className="text-lg font-semibold text-stone-900">Cervantes Bienes Raíces</p>
              </div>
            </Link>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <nav className="flex flex-wrap gap-2 text-sm font-medium text-stone-700">
                {navItems.map((item) => (
                  <Link key={item.page} href={getMarketingPath(locale, item.page)} className="marketing-nav-link">
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-wrap gap-2">
                <Link href="/login" className="marketing-button-secondary">
                  {marketing.ctas.crmLogin}
                </Link>
                <Link href="/dashboard" className="marketing-button-primary">
                  {marketing.ctas.dashboard}
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            {marketingLocales.map((item) => (
              <Link
                key={item}
                href={getMarketingPath(item, page, slug)}
                className={`rounded-full px-3 py-2 ${item === locale ? 'bg-stone-900 text-stone-50' : 'bg-white/70 text-stone-600'}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-stone-200/80 bg-white/85">
        <div className="marketing-container grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-amber-700">Cervantes Bienes Raíces</p>
            <h2 className="marketing-display text-3xl text-stone-900">{marketing.footer.title}</h2>
            <p className="max-w-xl text-sm leading-7 text-stone-600">{marketing.footer.description}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">{marketing.footer.navigation}</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-stone-700">
              {navItems.map((item) => (
                <Link key={item.page} href={getMarketingPath(locale, item.page)} className="marketing-footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">{marketing.footer.contact}</p>
            <div className="mt-4 flex flex-col gap-4 text-sm text-stone-700">
              {marketing.contact.channels.map((channel) => (
                <a
                  key={channel.title}
                  href={channel.href}
                  className="marketing-footer-link"
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span className="block font-semibold text-stone-900">{channel.title}</span>
                  <span className="block">{channel.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
