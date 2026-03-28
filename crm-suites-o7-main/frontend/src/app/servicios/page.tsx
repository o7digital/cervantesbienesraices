import type { Metadata } from 'next';
import { MarketingShell } from '@/components/marketing/MarketingShell';
import { differentiators, services } from '@/lib/marketingContent';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios inmobiliarios premium para compra, venta, valuación y estrategia patrimonial en CDMX.',
};

export default function ServiciosPage() {
  return (
    <MarketingShell>
      <section className="marketing-section">
        <div className="marketing-container">
          <p className="marketing-kicker">Servicios</p>
          <h1 className="marketing-display mt-3 max-w-4xl text-6xl text-stone-900">
            Comprar, vender e invertir con una estructura de trabajo clara.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Cada operación se construye sobre valuación, posicionamiento, negociación y certeza legal. No
            vendemos visitas; diseñamos estrategia.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
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
          <p className="marketing-kicker">Valor diferencial</p>
          <h2 className="marketing-display mt-3 text-5xl text-stone-900">Procesos diseñados para reducir riesgo y tiempo perdido.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {differentiators.map((item) => (
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
