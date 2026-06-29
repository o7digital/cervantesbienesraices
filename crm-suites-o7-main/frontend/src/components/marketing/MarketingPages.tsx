import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  formatMarketingDate,
  getMarketingContent,
  getMarketingPath,
  getPostBySlug,
  type MarketingLocale,
} from '@/lib/marketingContent';
import { MarketingContactForm } from './MarketingContactForm';
import { MarketingShell } from './MarketingShell';

export function MarketingHomePage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);

  return (
    <MarketingShell locale={locale} page="home">
      <section className="border-b border-stone-200/80">
        <div className="marketing-container grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {marketing.hero.tags.map((tag) => (
                <span key={tag} className="marketing-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-6">
              <p className="marketing-kicker">{marketing.hero.eyebrow}</p>
              <h1 className="marketing-display max-w-4xl text-6xl leading-none text-stone-900 sm:text-7xl">
                {marketing.hero.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-600">{marketing.hero.description}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href={getMarketingPath(locale, 'contact')} className="marketing-button-primary">
                {marketing.ctas.contact}
              </Link>
              <Link href={getMarketingPath(locale, 'services')} className="marketing-button-secondary">
                {marketing.ctas.services}
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {marketing.hero.aboutCards.map((paragraph) => (
                <div key={paragraph} className="marketing-card p-5">
                  <p className="text-sm leading-7 text-stone-600">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="marketing-panel overflow-hidden p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{marketing.nav.home}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-stone-900">{marketing.hero.coverageTitle}</h2>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                  {marketing.hero.coverageBadge}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {marketing.areas.map((area) => (
                  <span key={area} className="marketing-chip">
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[2rem] bg-stone-950 px-6 py-8 text-stone-50">
                <p className="text-xl leading-8">“{marketing.hero.quote}”</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-1 ring-white/10">
                    <Image src="/marketing/javier-cervantes.png" alt="Javier Cervantes" fill className="object-cover" sizes="64px" priority />
                  </div>
                  <div>
                    <p className="font-semibold">Javier Cervantes</p>
                    <p className="text-sm text-stone-400">{marketing.hero.founderRole}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {marketing.stats.map((item) => (
                <div key={item.label} className="marketing-card p-5">
                  <p className="text-3xl font-semibold text-stone-900">{item.value}</p>
                  <p className="mt-2 text-sm text-stone-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-section">
        <div className="marketing-container">
          <div className="max-w-3xl">
            <p className="marketing-kicker">{marketing.nav.about}</p>
            <h2 className="marketing-display text-5xl text-stone-900">{marketing.about.intro}</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">{marketing.about.paragraphs[2]}</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {marketing.about.philosophyItems.map((item) => (
              <article key={item.title} className="marketing-card p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-amber-700">{item.title}</p>
                <p className="mt-4 text-base leading-7 text-stone-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/60">
        <div className="marketing-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="marketing-kicker">{marketing.nav.services}</p>
              <h2 className="marketing-display text-5xl text-stone-900">{marketing.services.title}</h2>
            </div>
            <Link href={getMarketingPath(locale, 'services')} className="marketing-button-secondary w-fit">
              {marketing.ctas.services}
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {marketing.services.items.map((service) => (
              <article key={service.title} className="marketing-card p-6">
                <h3 className="text-2xl font-semibold text-stone-900">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/70">
        <div className="marketing-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="marketing-kicker">{marketing.nav.blog}</p>
              <h2 className="marketing-display text-5xl text-stone-900">{marketing.blog.title}</h2>
            </div>
            <Link href={getMarketingPath(locale, 'blog')} className="marketing-button-secondary w-fit">
              {marketing.ctas.allArticles}
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {marketing.blog.posts.map((post) => (
              <article key={post.slug} className="marketing-card overflow-hidden">
                <div className="relative h-56">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                    {formatMarketingDate(locale, post.date)} · {post.readTimeMinutes} min
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-stone-900">{post.title}</h3>
                  <p className="mt-4 text-base leading-7 text-stone-600">{post.excerpt}</p>
                  <Link href={getMarketingPath(locale, 'blogPost', post.slug)} className="marketing-link mt-6 inline-flex">
                    {marketing.ctas.readArticle}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section">
        <div className="marketing-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="marketing-panel p-8">
            <p className="marketing-kicker">{marketing.nav.contact}</p>
            <h2 className="marketing-display mt-3 text-5xl text-stone-900">{marketing.contact.title}</h2>
            <div className="mt-6 grid gap-3">
              {marketing.contact.highlights.map((highlight) => (
                <div key={highlight} className="marketing-card p-4">
                  <p className="text-sm font-medium text-stone-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <MarketingContactForm
            locale={locale}
            pagePath={getMarketingPath(locale, 'home')}
            form={marketing.contact.form}
          />
        </div>
      </section>
    </MarketingShell>
  );
}

export function MarketingAboutPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);

  return (
    <MarketingShell locale={locale} page="about">
      <section className="marketing-section">
        <div className="marketing-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="marketing-kicker">{marketing.nav.about}</p>
            <h1 className="marketing-display mt-3 text-6xl text-stone-900">{marketing.about.title}</h1>
            <div className="mt-8 space-y-5 text-lg leading-8 text-stone-600">
              {marketing.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="marketing-panel p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{marketing.about.missionTitle}</p>
              <p className="mt-4 text-lg leading-8 text-stone-700">{marketing.about.mission}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {marketing.stats.map((item) => (
                <div key={item.label} className="marketing-card p-5">
                  <p className="text-3xl font-semibold text-stone-900">{item.value}</p>
                  <p className="mt-2 text-sm text-stone-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/70">
        <div className="marketing-container">
          <p className="marketing-kicker">{marketing.about.philosophyTitle}</p>
          <h2 className="marketing-display mt-3 text-5xl text-stone-900">{marketing.about.philosophyIntro}</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {marketing.about.philosophyItems.map((item) => (
              <article key={item.title} className="marketing-card p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-amber-700">{item.title}</p>
                <p className="mt-4 text-base leading-7 text-stone-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

export function MarketingServicesPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);

  return (
    <MarketingShell locale={locale} page="services">
      <section className="marketing-section">
        <div className="marketing-container">
          <p className="marketing-kicker">{marketing.nav.services}</p>
          <h1 className="marketing-display mt-3 max-w-4xl text-6xl text-stone-900">{marketing.services.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">{marketing.services.intro}</p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {marketing.services.items.map((service) => (
              <article key={service.title} className="marketing-card p-7">
                <h2 className="text-2xl font-semibold text-stone-900">{service.title}</h2>
                <p className="mt-4 text-base leading-7 text-stone-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/70">
        <div className="marketing-container">
          <p className="marketing-kicker">{marketing.nav.services}</p>
          <h2 className="marketing-display mt-3 text-5xl text-stone-900">{marketing.services.differentiatorsTitle}</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {marketing.services.differentiators.map((item) => (
              <article key={item.title} className="marketing-card p-6">
                <h3 className="text-xl font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-stone-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

export function MarketingContactPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);

  return (
    <MarketingShell locale={locale} page="contact">
      <section className="marketing-section">
        <div className="marketing-container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="marketing-kicker">{marketing.nav.contact}</p>
            <h1 className="marketing-display mt-3 text-6xl text-stone-900">{marketing.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">{marketing.contact.intro}</p>

            <div className="mt-8 grid gap-3">
              {marketing.contact.highlights.map((highlight) => (
                <div key={highlight} className="marketing-card p-4">
                  <p className="text-sm font-medium text-stone-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <MarketingContactForm
            locale={locale}
            pagePath={getMarketingPath(locale, 'contact')}
            form={marketing.contact.form}
          />
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/70">
        <div className="marketing-container grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="marketing-kicker">{marketing.footer.contact}</p>
            <h2 className="marketing-display mt-3 text-5xl text-stone-900">{marketing.contact.coverageTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">{marketing.contact.coverageIntro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {marketing.areas.map((area) => (
                <span key={area} className="marketing-chip">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {marketing.contact.channels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                className="marketing-card p-6"
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{channel.title}</p>
                <h3 className="mt-3 text-2xl font-semibold text-stone-900">{channel.value}</h3>
                <p className="mt-4 text-base leading-7 text-stone-600">{channel.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

export function MarketingBlogPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);

  return (
    <MarketingShell locale={locale} page="blog">
      <section className="marketing-section">
        <div className="marketing-container">
          <p className="marketing-kicker">{marketing.nav.blog}</p>
          <h1 className="marketing-display mt-3 max-w-4xl text-6xl text-stone-900">{marketing.blog.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">{marketing.blog.intro}</p>

          <div className="mt-12 grid gap-6">
            {marketing.blog.posts.map((post) => (
              <article key={post.slug} className="marketing-card grid overflow-hidden lg:grid-cols-[320px_1fr]">
                <div className="relative min-h-64">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="320px" />
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                    {formatMarketingDate(locale, post.date)} · {post.author} · {post.readTimeMinutes} min
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-stone-900">{post.title}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">{post.excerpt}</p>
                  <Link href={getMarketingPath(locale, 'blogPost', post.slug)} className="marketing-link mt-6 inline-flex">
                    {marketing.ctas.readArticle}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

export function MarketingBlogPostPage({ locale, slug }: { locale: MarketingLocale; slug: string }) {
  const marketing = getMarketingContent(locale);
  const post = getPostBySlug(locale, slug);

  if (!post) notFound();

  return (
    <MarketingShell locale={locale} page="blogPost" slug={slug}>
      <section className="marketing-section">
        <div className="marketing-container">
          <div className="mx-auto max-w-4xl">
            <p className="marketing-kicker">{marketing.nav.blog}</p>
            <h1 className="marketing-display mt-3 text-6xl text-stone-900">{post.title}</h1>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-stone-500">
              {formatMarketingDate(locale, post.date)} · {post.author} · {post.readTimeMinutes} min
            </p>
            <p className="mt-6 text-lg leading-8 text-stone-600">{post.excerpt}</p>
          </div>

          <div className="relative mx-auto mt-12 h-80 max-w-5xl overflow-hidden rounded-[2rem]">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(min-width: 1280px) 1200px, 100vw" />
          </div>

          <article className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-8 text-stone-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </MarketingShell>
  );
}
