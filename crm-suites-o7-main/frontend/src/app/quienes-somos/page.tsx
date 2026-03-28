import type { Metadata } from 'next';
import { MarketingShell } from '@/components/marketing/MarketingShell';
import { aboutParagraphs, founderStats, philosophyItems } from '@/lib/marketingContent';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description:
    'Conoce la filosofía y el enfoque de Cervantes Bienes Raíces para operaciones premium en Ciudad de México.',
};

export default function QuienesSomosPage() {
  return (
    <MarketingShell>
      <section className="marketing-section">
        <div className="marketing-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="marketing-kicker">Quiénes somos</p>
            <h1 className="marketing-display mt-3 text-6xl text-stone-900">Asesoría inmobiliaria premium con visión de largo plazo.</h1>
            <div className="mt-8 space-y-5 text-lg leading-8 text-stone-600">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="marketing-panel p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Misión</p>
              <p className="mt-4 text-lg leading-8 text-stone-700">
                Actuar como socios estratégicos de nuestros clientes, guiándolos con rigor profesional en cada
                decisión inmobiliaria.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
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

      <section className="marketing-section border-y border-stone-200/80 bg-white/70">
        <div className="marketing-container">
          <p className="marketing-kicker">Nuestra filosofía</p>
          <h2 className="marketing-display mt-3 text-5xl text-stone-900">
            Cada propiedad es patrimonio, proyecto de vida y decisión estratégica.
          </h2>

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
    </MarketingShell>
  );
}
