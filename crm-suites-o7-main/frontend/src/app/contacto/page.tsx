import type { Metadata } from 'next';
import { MarketingShell } from '@/components/marketing/MarketingShell';
import { contactChannels, contactHighlights, marketAreas } from '@/lib/marketingContent';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Escríbenos para comprar, vender o invertir en propiedades premium en CDMX con Cervantes Bienes Raíces.',
};

export default function ContactoPage() {
  return (
    <MarketingShell>
      <section className="marketing-section">
        <div className="marketing-container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="marketing-kicker">Contacto</p>
            <h1 className="marketing-display mt-3 text-6xl text-stone-900">Cuéntanos tu objetivo y armamos el siguiente paso.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              Ya sea compra, venta, valuación, análisis de mercado o estrategia patrimonial, te respondemos con
              una ruta concreta y sin rodeos.
            </p>

            <div className="mt-8 grid gap-3">
              {contactHighlights.map((highlight) => (
                <div key={highlight} className="marketing-card p-4">
                  <p className="text-sm font-medium text-stone-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {contactChannels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                className="marketing-card p-6"
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{channel.title}</p>
                <h2 className="mt-3 text-2xl font-semibold text-stone-900">{channel.value}</h2>
                <p className="mt-4 text-base leading-7 text-stone-600">{channel.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/70">
        <div className="marketing-container">
          <p className="marketing-kicker">Cobertura</p>
          <h2 className="marketing-display mt-3 text-5xl text-stone-900">Trabajamos en las zonas más relevantes del corredor premium.</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {marketAreas.map((area) => (
              <span key={area} className="marketing-chip">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
