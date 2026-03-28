import Link from 'next/link';
import { ReactNode } from 'react';
import { contactChannels, marketingNav } from '@/lib/marketingContent';

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="marketing-page min-h-screen">
      <header className="marketing-header">
        <div className="marketing-container flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="marketing-brand-mark">CBR</div>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-stone-500">CDMX Premium Realty</p>
              <p className="text-lg font-semibold text-stone-900">Cervantes Bienes Raíces</p>
            </div>
          </Link>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <nav className="flex flex-wrap gap-2 text-sm font-medium text-stone-700">
              {marketingNav.map((item) => (
                <Link key={item.href} href={item.href} className="marketing-nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-wrap gap-2">
              <Link href="/login" className="marketing-button-secondary">
                Entrar al CRM
              </Link>
              <Link href="/dashboard" className="marketing-button-primary">
                Ir al dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-stone-200/80 bg-white/85">
        <div className="marketing-container grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-amber-700">Cervantes Bienes Raíces</p>
            <h2 className="marketing-display text-3xl text-stone-900">
              Asesoría inmobiliaria premium para comprar, vender e invertir con criterio.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-stone-600">
              Más de 20 años acompañando operaciones en CDMX con análisis de mercado, estrategia comercial y
              acompañamiento legal de principio a fin.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">Navegación</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-stone-700">
              {marketingNav.map((item) => (
                <Link key={item.href} href={item.href} className="marketing-footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">Contacto</p>
            <div className="mt-4 flex flex-col gap-4 text-sm text-stone-700">
              {contactChannels.map((channel) => (
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
