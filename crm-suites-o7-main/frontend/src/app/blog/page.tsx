import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MarketingShell } from '@/components/marketing/MarketingShell';
import { blogPosts, formatMarketingDate } from '@/lib/marketingContent';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Tendencias de mercado, crédito hipotecario y guías inmobiliarias de Cervantes Bienes Raíces.',
};

export default function BlogPage() {
  return (
    <MarketingShell>
      <section className="marketing-section">
        <div className="marketing-container">
          <p className="marketing-kicker">Blog</p>
          <h1 className="marketing-display mt-3 max-w-4xl text-6xl text-stone-900">
            Novedades inmobiliarias para decidir con datos y contexto.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Tendencias de mercado, guías prácticas y puntos legales para comprar, vender o rentar con más
            tranquilidad.
          </p>

          <div className="mt-12 grid gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="marketing-card grid overflow-hidden lg:grid-cols-[320px_1fr]"
              >
                <div className="relative min-h-64">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="320px" />
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                    {formatMarketingDate(post.date)} · {post.author} · {post.readTimeMinutes} min
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-stone-900">{post.title}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="marketing-link mt-6 inline-flex">
                    Leer artículo
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
