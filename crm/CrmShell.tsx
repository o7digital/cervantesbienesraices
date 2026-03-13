import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { crmSections, type CrmSection } from "./config";
import { executiveHighlights } from "./data";
import styles from "./crm.module.css";

type CrmShellProps = {
  section: CrmSection;
  children: ReactNode;
};

export function CrmShell({ section, children }: CrmShellProps) {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <Link href="/crm" className={styles.brand}>
            <div className={styles.brandImageWrap}>
              <Image
                src="/images/logo.png"
                alt="Cervantes Bienes Raices"
                width={160}
                height={46}
                className={styles.brandImage}
              />
            </div>
            <div className={styles.brandCopy}>
              <span className={styles.brandEyebrow}>Cervantes Bienes Raices</span>
              <strong>CRM Inmobiliario Privado</strong>
              <small>Concept branch CRM-inmo para presentacion</small>
            </div>
          </Link>

          <div className={styles.badgeRow}>
            <span className={styles.chip}>Dark luxury UI</span>
            <span className={styles.chip}>Demo operativa</span>
          </div>

          <nav className={styles.nav} aria-label="CRM navigation">
            {crmSections.map((item) => {
              const Icon = item.icon;
              const isActive = section.id === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                >
                  <span className={styles.navIcon}>
                    <Icon />
                  </span>
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.tagline}</small>
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className={styles.sidebarFooter}>
            <p className={styles.sidebarFooterTitle}>Concepto para Javier</p>
            <p className={styles.sidebarFooterCopy}>
              Demo visual y estructural preparada para evolucionar a integraciones reales sin tocar el sitio publico.
            </p>
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerRow}>
            <div>
              <p className={styles.eyebrow}>{section.tagline}</p>
              <h1 className={styles.pageTitle}>{section.label}</h1>
              <p className={styles.pageLead}>{section.description}</p>
            </div>

            <div className={styles.actionRow}>
              <span className={styles.headerBadge}>CRM-inmo branch demo</span>
              <Link href="/crm/reportes" className={styles.primaryButton}>
                Ver reportes
                <FiArrowUpRight />
              </Link>
              <Link href="/" className={styles.secondaryButton}>
                Sitio publico
              </Link>
            </div>
          </div>

          <div className={styles.highlightRow}>
            {executiveHighlights.map((item) => (
              <div key={item.label} className={styles.highlightCard}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <small>{item.note}</small>
              </div>
            ))}
          </div>
        </header>

        <section className={styles.content}>{children}</section>
      </main>
    </div>
  );
}
