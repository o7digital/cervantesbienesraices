import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThree from "@/layouts/footers/FooterThree";
import styles from "./PremiumHome.module.scss";
import OrganizationSchema from "@/components/common/OrganizationSchema";

type FeaturedProperty = {
  id: string;
  status: "Venta" | "Renta" | "Inversión";
  title: string;
  location: string;
  priceLabel: string;
  beds?: number;
  baths?: number;
  areaM2?: number;
  imageUrl: string;
};

const featuredProperties: FeaturedProperty[] = [
  {
    id: "polanco-penthouse",
    status: "Venta",
    title: "Penthouse con terrazas privadas",
    location: "Polanco • CDMX",
    priceLabel: "Desde $38.9 M MXN",
    beds: 3,
    baths: 3,
    areaM2: 320,
    imageUrl:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2000&q=60",
  },
  {
    id: "condesa-artdeco",
    status: "Renta",
    title: "Departamento Art Déco renovado",
    location: "Condesa • CDMX",
    priceLabel: "Desde $78,000 MXN / mes",
    beds: 2,
    baths: 2,
    areaM2: 165,
    imageUrl:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2000&q=60",
  },
  {
    id: "roma-norte-invest",
    status: "Inversión",
    title: "Propiedad con potencial patrimonial",
    location: "Roma Norte • CDMX",
    priceLabel: "Estrategia a medida",
    beds: 4,
    baths: 4,
    areaM2: 410,
    imageUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=60",
  },
];

const HomePremium = () => {
  return (
    <div className={styles.wrap}>
      <OrganizationSchema />
      <HeaderFive style="dark" />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.heroOverlay} aria-hidden="true" />

          <div className={`${styles.container} ${styles.heroInner}`}>
            <span className={styles.kicker}>Cervantes Bienes Raíces • CDMX</span>
            <h1 className={styles.heroTitle}>
              Representación inmobiliaria premium, discreta y estratégica
            </h1>
            <p className={styles.heroSub}>
              Acompañamos a compradores, propietarios e inversionistas con
              valuación profesional, asesoría legal y una estrategia comercial de
              alto nivel para propiedades selectas en Ciudad de México.
            </p>

            <div className={styles.heroActions}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="/property">
                Explorar Propiedades
              </a>
              <a className={styles.btn} href="/contact">
                Quiero Vender mi Propiedad
              </a>
              <span className={styles.pill}>
                <strong>Alta selección</strong> • compradores calificados
              </span>
            </div>

            <div className={styles.searchShell}>
              <span className={styles.srOnly}>Búsqueda de propiedades</span>
              <div className={styles.searchRow}>
                <input
                  className={styles.input}
                  placeholder="Buscar por zona, tipo de propiedad o estilo de vida…"
                  aria-label="Buscar propiedades"
                />
                <a className={`${styles.btn} ${styles.btnPrimary}`} href="/property">
                  Buscar
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>Tres audiencias, una firma</span>
            <h2 className={styles.h2}>Una experiencia clara para cada objetivo</h2>
            <p className={styles.lead}>
              No somos un portal de anuncios. Somos una agencia y firma de
              asesoría inmobiliaria con procesos, criterio y acompañamiento
              integral.
            </p>

            <div className={styles.grid2}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Comprar o Invertir</h3>
                <p className={styles.cardText}>
                  Búsqueda curada, análisis comparativo, negociación y soporte
                  legal. Diseñamos una estrategia alineada a tu estilo de vida o
                  portafolio.
                </p>
                <div className={styles.ctaRow}>
                  <a className={`${styles.btn} ${styles.btnPrimary}`} href="/property">
                    Ver propiedades selectas
                  </a>
                  <a className={styles.btn} href="/consultoria">
                    Solicitar asesoría de inversión
                  </a>
                </div>
              </article>

              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Vender una Propiedad</h3>
                <p className={styles.cardText}>
                  Valuación profesional, estrategia comercial premium, filtro de
                  compradores y reportes de seguimiento. Discreción ante todo.
                </p>
                <div className={styles.ctaRow}>
                  <a className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
                    Solicitar valuación
                  </a>
                  <a className={styles.btn} href="/servicios">
                    Ver proceso de venta
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>Servicios</span>
            <h2 className={styles.h2}>Asesoría integral, estándar premium</h2>
            <p className={styles.lead}>
              Un enfoque boutique con rigor: datos, negociación y ejecución
              legal‑documental para operaciones seguras.
            </p>

            <div className={styles.services}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>
                  Compra de Propiedades Premium
                </h3>
                <p className={styles.serviceText}>
                  Curaduría, visitas eficientes, negociación y acompañamiento
                  hasta escrituración.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>
                  Venta y Representación de Propietarios
                </h3>
                <p className={styles.serviceText}>
                  Estrategia comercial, material editorial, difusión selectiva y
                  gestión de interesados.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>
                  Avalúos y Análisis de Mercado
                </h3>
                <p className={styles.serviceText}>
                  Valuación profesional, comparables, rango de precio y plan de
                  salida.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>
                  Asesoría Legal y Documentación
                </h3>
                <p className={styles.serviceText}>
                  Revisión documental, riesgos, contrato, notaría y cierre con
                  tranquilidad.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>
                  Estrategia Patrimonial e Inversión
                </h3>
                <p className={styles.serviceText}>
                  Tesis de inversión, rentabilidad, plusvalía y planeación por
                  horizonte.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Crédito Hipotecario</h3>
                <p className={styles.serviceText}>
                  Opciones comparadas y acompañamiento para obtener condiciones
                  competitivas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>Selección</span>
            <h2 className={styles.h2}>Propiedades destacadas</h2>
            <p className={styles.lead}>
              Fichas con imagen protagonista, etiquetas refinadas y detalle
              esencial. Sin ruido de marketplace.
            </p>

            <div className={styles.propertyGrid}>
              {featuredProperties.map((property) => (
                <article key={property.id} className={styles.propertyCard}>
                  <div
                    className={styles.propertyMedia}
                    style={{ backgroundImage: `url(${property.imageUrl})` }}
                    role="img"
                    aria-label={`${property.title} en ${property.location}`}
                  >
                    <span className={styles.badge}>{property.status}</span>
                  </div>
                  <div className={styles.propertyBody}>
                    <h3 className={styles.propertyTitle}>{property.title}</h3>
                    <div className={styles.propertyMeta}>
                      <span>{property.location}</span>
                      <span>•</span>
                      <span>{property.priceLabel}</span>
                      {typeof property.areaM2 === "number" ? (
                        <>
                          <span>•</span>
                          <span>{property.areaM2} m²</span>
                        </>
                      ) : null}
                      {typeof property.beds === "number" ? (
                        <>
                          <span>•</span>
                          <span>{property.beds} rec.</span>
                        </>
                      ) : null}
                      {typeof property.baths === "number" ? (
                        <>
                          <span>•</span>
                          <span>{property.baths} baños</span>
                        </>
                      ) : null}
                    </div>
                    <div className={styles.ctaRow}>
                      <a className={`${styles.btn} ${styles.btnPrimary}`} href="/property">
                        Ver detalles
                      </a>
                      <a className={styles.btn} href="/contact">
                        Agendar visita
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.seller}`}>
          <div className={styles.container}>
            <span className={styles.kicker}>Para propietarios</span>
            <h2 className={styles.h2}>
              Venda su propiedad con estrategia, discreción y compradores
              calificados
            </h2>
            <p className={styles.lead}>
              Un proceso claro para maximizar valor y minimizar fricción, con
              reportes de seguimiento y acompañamiento legal.
            </p>

            <div className={styles.grid2}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Beneficios clave</h3>
                <ul className={styles.checkList}>
                  <li className={styles.checkItem}>
                    <span className={styles.checkDot} aria-hidden="true" />
                    Valuación profesional y análisis de mercado.
                  </li>
                  <li className={styles.checkItem}>
                    <span className={styles.checkDot} aria-hidden="true" />
                    Estrategia comercial premium y material editorial.
                  </li>
                  <li className={styles.checkItem}>
                    <span className={styles.checkDot} aria-hidden="true" />
                    Filtrado de compradores y visitas con protocolo.
                  </li>
                  <li className={styles.checkItem}>
                    <span className={styles.checkDot} aria-hidden="true" />
                    Acompañamiento legal y documental de principio a fin.
                  </li>
                  <li className={styles.checkItem}>
                    <span className={styles.checkDot} aria-hidden="true" />
                    Reportes de seguimiento y negociación con criterio.
                  </li>
                </ul>
                <div className={styles.ctaRow}>
                  <a className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
                    Solicitar una valuación
                  </a>
                  <a className={styles.btn} href="/contact">
                    Agende una asesoría privada
                  </a>
                </div>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Discreción y control</h3>
                <p className={styles.cardText}>
                  Priorizamos confidencialidad, agenda cuidada y una comunicación
                  clara. Ideal para propiedades de alto valor y clientes
                  selectivos.
                </p>
                <div className={styles.ctaRow}>
                  <a className={styles.btn} href="/aviso-privacidad">
                    Política de privacidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>Autoridad</span>
            <h2 className={styles.h2}>Confianza respaldada por proceso</h2>
            <p className={styles.lead}>
              Indicadores de marca y enfoque: zonas premium, soporte legal y una
              mentalidad de inversión para decisiones informadas.
            </p>

            <div className={styles.trustRow}>
              <div className={styles.stat}>
                <div className={styles.statValue}>+20</div>
                <div className={styles.statLabel}>Años de experiencia</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>CDMX</div>
                <div className={styles.statLabel}>Zonas premium y micro‑mercados</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>Legal</div>
                <div className={styles.statLabel}>Revisión documental y cierre seguro</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>Data</div>
                <div className={styles.statLabel}>
                  Análisis comparativo y estrategia patrimonial
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>Testimonios</span>
            <h2 className={styles.h2}>Clientes exigentes, experiencias cuidadas</h2>
            <p className={styles.lead}>
              Un servicio de alto contacto: claridad, discreción y ejecución.
            </p>

            <div className={styles.testimonials}>
              <figure className={styles.quote}>
                <blockquote className={styles.quoteText}>
                  “Nos guiaron con análisis y estrategia. La negociación fue
                  impecable y el cierre, muy bien acompañado.”
                </blockquote>
                <figcaption className={styles.quoteMeta}>
                  Comprador • Polanco
                </figcaption>
              </figure>
              <figure className={styles.quote}>
                <blockquote className={styles.quoteText}>
                  “La valuación y el filtro de compradores marcaron la
                  diferencia. Vendimos con discreción y control del proceso.”
                </blockquote>
                <figcaption className={styles.quoteMeta}>
                  Propietaria • Condesa
                </figcaption>
              </figure>
              <figure className={styles.quote}>
                <blockquote className={styles.quoteText}>
                  “Enfoque de inversión real: comparables, riesgos y una tesis
                  clara. Tomamos una decisión con certeza.”
                </blockquote>
                <figcaption className={styles.quoteMeta}>
                  Inversionista • Roma Norte
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalPanel}>
              <div>
                <span className={styles.kicker}>Siguiente paso</span>
                <h2 className={styles.h2}>Agende una asesoría privada</h2>
                <p className={styles.lead}>
                  Comparta su objetivo (compra, venta o inversión). Reciba un
                  plan claro: valuación, estrategia y ruta legal‑documental.
                </p>
              </div>
              <div className={styles.ctaRow}>
                <a className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
                  Agende una asesoría privada
                </a>
                <a className={styles.btn} href="/contact">
                  Solicite una valuación
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterThree />
    </div>
  );
};

export default HomePremium;
