import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MarketingShell } from '@/components/marketing/MarketingShell';
import {
  aboutParagraphs,
  blogPosts,
  contactHighlights,
  differentiators,
  formatMarketingDate,
  founderStats,
  homeSearchTags,
  marketAreas,
  philosophyItems,
  services,
  testimonials,
} from '@/lib/marketingContent';

export const metadata: Metadata = {
  title: 'Casas en Venta y Departamentos en Renta en México',
  description:
    'Cervantes Bienes Raíces ofrece asesoría inmobiliaria premium para comprar, vender e invertir en CDMX con más de 20 años de experiencia.',
};

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <MarketingShell>
      <section className="border-b border-stone-200/80">
        <div className="marketing-container grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {homeSearchTags.map((tag) => (
                <span key={tag} className="marketing-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-6">
              <p className="marketing-kicker">+20 años de experiencia</p>
              <h1 className="marketing-display max-w-4xl text-6xl leading-none text-stone-900 sm:text-7xl">
                Casas en venta y departamentos en renta con estrategia, criterio y acompañamiento real.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-600">
                Asesoría inmobiliaria profesional en CDMX, Polanco, Condesa y toda el área metropolitana para
                compradores, vendedores e inversionistas que necesitan claridad y ejecución.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contacto" className="marketing-button-primary">
                Solicitar asesoría
              </Link>
              <Link href="/servicios" className="marketing-button-secondary">
                Ver servicios
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {aboutParagraphs.slice(0, 2).map((paragraph) => (
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
                  <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Cobertura</p>
                  <h2 className="mt-2 text-2xl font-semibold text-stone-900">Zonas premium de CDMX</h2>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                  Mercado premium
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {marketAreas.map((area) => (
                  <span key={area} className="marketing-chip">
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[2rem] bg-stone-950 px-6 py-8 text-stone-50">
                <p className="text-sm uppercase tracking-[0.18em] text-stone-400">Enfoque</p>
                <p className="mt-3 text-xl leading-8">
                  “Seguimos un proceso para ofrecer a nuestros inversionistas las mejores oportunidades.”
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-1 ring-white/10">
                    <Image
                      src="/marketing/javier-cervantes.png"
                      alt="Javier Cervantes"
                      fill
                      className="object-cover"
                      sizes="64px"
                      priority
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Javier Cervantes</p>
                    <p className="text-sm text-stone-400">Fundador y CEO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {founderStats.map((item) => (
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
            <p className="marketing-kicker">Quiénes somos</p>
            <h2 className="marketing-display text-5xl text-stone-900">Una asesoría que combina mercado, criterio y ejecución.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">{aboutParagraphs[2]}</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {philosophyItems.map((item) => (
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
              <p className="marketing-kicker">Servicios</p>
              <h2 className="marketing-display text-5xl text-stone-900">
                Soluciones premium para comprar, vender e invertir con seguridad.
              </h2>
            </div>
            <Link href="/servicios" className="marketing-button-secondary w-fit">
              Explorar servicios
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="marketing-card p-6">
                <h3 className="text-2xl font-semibold text-stone-900">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section">
        <div className="marketing-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="marketing-panel p-8">
            <p className="marketing-kicker">¿Por qué elegirnos?</p>
            <h2 className="marketing-display mt-3 text-5xl text-stone-900">Tu aliado en cada operación inmobiliaria.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">{aboutParagraphs[3]}</p>
          </div>

          <div className="grid gap-5">
            {differentiators.map((item) => (
              <article key={item.title} className="marketing-card p-6">
                <h3 className="text-xl font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-stone-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/70">
        <div className="marketing-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="marketing-kicker">Blog</p>
              <h2 className="marketing-display text-5xl text-stone-900">Novedades inmobiliarias y decisiones con contexto.</h2>
            </div>
            <Link href="/blog" className="marketing-button-secondary w-fit">
              Ver todos los artículos
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="marketing-card overflow-hidden">
                <div className="relative h-56">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                    {formatMarketingDate(post.date)} · {post.readTimeMinutes} min
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-stone-900">{post.title}</h3>
                  <p className="mt-4 text-base leading-7 text-stone-600">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="marketing-link mt-6 inline-flex">
                    Leer artículo
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
            <p className="marketing-kicker">Contacto</p>
            <h2 className="marketing-display mt-3 text-5xl text-stone-900">Hablemos de tu siguiente movimiento inmobiliario.</h2>
            <div className="mt-6 grid gap-3">
              {contactHighlights.map((highlight) => (
                <div key={highlight} className="marketing-card p-4">
                  <p className="text-sm font-medium text-stone-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="marketing-card p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Listo para avanzar</p>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Cuéntanos si estás comprando, vendiendo, valuando o estructurando una inversión. Armamos el siguiente paso contigo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto" className="marketing-button-primary">
                Escribir ahora
              </Link>
              <a href="mailto:info@cervantesbienesraices.com" className="marketing-button-secondary">
                info@cervantesbienesraices.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-section pt-0">
        <div className="marketing-container grid gap-5 lg:grid-cols-2">
          {testimonials.map((quote) => (
            <blockquote key={quote} className="marketing-card p-6 text-lg leading-8 text-stone-700">
              “{quote}”
            </blockquote>
          ))}
        </div>
      </section>
    </MarketingShell>
  );
}
