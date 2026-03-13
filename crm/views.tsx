import type { ReactNode } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";
import type { CrmSectionId } from "./config";
import {
  adminModules,
  advisorPerformance,
  buyers,
  dashboardMetrics,
  hotOpportunities,
  importSources,
  investors,
  owners,
  pipelineStages,
  properties,
  recentLeads,
  reportCards,
  reportFlows,
  roadmapItems,
  sourcePerformance,
  upcomingVisits,
  visits,
  zoneDemand,
  zoneInventory,
} from "./data";
import { initials } from "./utils";
import styles from "./crm.module.css";

type PanelProps = {
  title: string;
  subtitle: string;
  action?: string;
  children: ReactNode;
  className?: string;
};

function joinClasses(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function Panel({ title, subtitle, action, children, className }: PanelProps) {
  return (
    <section className={joinClasses(styles.panel, className)}>
      <div className={styles.panelHeader}>
        <div>
          <p className={styles.panelEyebrow}>{subtitle}</p>
          <h2 className={styles.panelTitle}>{title}</h2>
        </div>
        {action ? <span className={styles.panelAction}>{action}</span> : null}
      </div>
      {children}
    </section>
  );
}

function ToneBadge({ label, tone }: { label: string; tone: string }) {
  return (
    <span className={styles.statusBadge} data-tone={tone}>
      {label}
    </span>
  );
}

function DashboardView() {
  return (
    <>
      <div className={styles.metricsGrid}>
        {dashboardMetrics.map((metric, index) => (
          <article
            key={metric.label}
            className={styles.metricCard}
            data-tone={metric.tone}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.note}</small>
          </article>
        ))}
      </div>

      <div className={styles.twoColumnGrid}>
        <Panel
          title="Propiedades recientes"
          subtitle="Captacion e inventario"
          action="8 activos monitoreados"
        >
          <div className={styles.cardStack}>
            {properties.slice(0, 4).map((property) => (
              <article key={property.code} className={styles.mediaCard}>
                <div
                  className={styles.mediaVisual}
                  style={{ backgroundImage: `url(${property.image})` }}
                >
                  <ToneBadge label={property.operation} tone={property.tone} />
                </div>
                <div className={styles.mediaBody}>
                  <div className={styles.mediaTop}>
                    <div>
                      <p className={styles.mediaTitle}>{property.property}</p>
                      <p className={styles.mediaMeta}>{property.code}</p>
                    </div>
                    <strong className={styles.mediaPrice}>{property.price}</strong>
                  </div>
                  <p className={styles.mediaMeta}>{property.specs}</p>
                  <div className={styles.inlineMeta}>
                    <span>
                      <FiMapPin />
                      {property.zone}
                    </span>
                    <span>
                      <FiUser />
                      {property.broker}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel
          title="Leads recientes"
          subtitle="Demanda calificada"
          action="4 entradas de alta prioridad"
        >
          <div className={styles.listStack}>
            {recentLeads.map((lead) => (
              <article key={lead.name} className={styles.listCard}>
                <div className={styles.listHeader}>
                  <div>
                    <p className={styles.listTitle}>{lead.name}</p>
                    <p className={styles.listMeta}>{lead.intent}</p>
                  </div>
                  <ToneBadge label={lead.score} tone={lead.tone} />
                </div>
                <div className={styles.detailGrid}>
                  <div>
                    <span>Presupuesto</span>
                    <strong>{lead.budget}</strong>
                  </div>
                  <div>
                    <span>Origen</span>
                    <strong>{lead.source}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </div>

      <div className={styles.twoColumnGrid}>
        <Panel title="Proximas visitas" subtitle="Agenda de campo" action="26 visitas programadas">
          <div className={styles.timelineList}>
            {upcomingVisits.map((visit) => (
              <article key={`${visit.property}-${visit.client}`} className={styles.timelineCard}>
                <div className={styles.timelineRail} data-tone={visit.tone} />
                <div className={styles.timelineBody}>
                  <div className={styles.listHeader}>
                    <div>
                      <p className={styles.listTitle}>{visit.property}</p>
                      <p className={styles.listMeta}>{visit.client}</p>
                    </div>
                    <ToneBadge label={visit.status} tone={visit.tone} />
                  </div>
                  <div className={styles.inlineMeta}>
                    <span>
                      <FiCalendar />
                      {visit.date}
                    </span>
                    <span>
                      <FiUser />
                      {visit.advisor}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel
          title="Oportunidades calientes"
          subtitle="Probabilidad de cierre"
          action="Top 3 con mayor urgencia"
        >
          <div className={styles.listStack}>
            {hotOpportunities.map((item) => (
              <article key={item.title} className={styles.opportunityCard}>
                <div className={styles.listHeader}>
                  <div>
                    <p className={styles.listTitle}>{item.title}</p>
                    <p className={styles.listMeta}>{item.nextStep}</p>
                  </div>
                  <ToneBadge label={`${item.probability}%`} tone={item.tone} />
                </div>
                <div className={styles.progressWrap}>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressBar}
                      data-tone={item.tone}
                      style={{ width: `${item.probability}%` }}
                    />
                  </div>
                  <strong className={styles.mediaPrice}>{item.value}</strong>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </div>

      <div className={styles.twoColumnGrid}>
        <Panel title="Inventario por zona" subtitle="Concentracion geografica" action="CDMX prime focus">
          <div className={styles.listStack}>
            {zoneInventory.map((zone) => (
              <article key={zone.zone} className={styles.zoneRow}>
                <div className={styles.listHeader}>
                  <div>
                    <p className={styles.listTitle}>{zone.zone}</p>
                    <p className={styles.listMeta}>{zone.split}</p>
                  </div>
                  <strong className={styles.metricInline}>{zone.active} activos</strong>
                </div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressBar} data-tone="gold" style={{ width: `${zone.share}%` }} />
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel title="Rendimiento por asesor" subtitle="Productividad comercial" action="Ultimos 45 dias">
          <div className={styles.cardsGrid}>
            {advisorPerformance.map((advisor) => (
              <article key={advisor.advisor} className={styles.insightCard}>
                <div className={styles.listHeader}>
                  <div>
                    <p className={styles.listTitle}>{advisor.advisor}</p>
                    <p className={styles.listMeta}>Pipeline {advisor.pipeline}</p>
                  </div>
                  <ToneBadge label={`${advisor.closings} cierres`} tone={advisor.tone} />
                </div>
                <div className={styles.inlineMeta}>
                  <span>
                    <FiTrendingUp />
                    Visitas gestionadas {advisor.visits}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}

function PropertiesView() {
  return (
    <>
      <div className={styles.cardsGridThree}>
        {properties.slice(0, 3).map((property) => (
          <article key={property.code} className={styles.heroPropertyCard}>
            <div
              className={styles.heroPropertyVisual}
              style={{ backgroundImage: `url(${property.image})` }}
            />
            <div className={styles.heroPropertyBody}>
              <div className={styles.listHeader}>
                <div>
                  <p className={styles.listTitle}>{property.property}</p>
                  <p className={styles.listMeta}>{property.code}</p>
                </div>
                <ToneBadge label={property.status} tone={property.tone} />
              </div>
              <p className={styles.mediaMeta}>{property.specs}</p>
              <div className={styles.inlineMeta}>
                <span>{property.operation}</span>
                <span>{property.zone}</span>
                <span>{property.price}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Panel
        title="Portafolio de propiedades"
        subtitle="Venta, renta y captacion"
        action="Vista ejecutiva para Javier"
      >
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Propiedad</th>
                <th>Operacion</th>
                <th>Precio</th>
                <th>Zona</th>
                <th>Origen</th>
                <th>Broker</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property.code}>
                  <td>{property.code}</td>
                  <td>
                    <div className={styles.tablePrimary}>
                      <strong>{property.property}</strong>
                      <span>{property.specs}</span>
                    </div>
                  </td>
                  <td>{property.operation}</td>
                  <td>{property.price}</td>
                  <td>{property.zone}</td>
                  <td>{property.origin}</td>
                  <td>{property.broker}</td>
                  <td>
                    <ToneBadge label={property.status} tone={property.tone} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
}

function OwnersView() {
  return (
    <div className={styles.cardsGridThree}>
      {owners.map((owner) => (
        <article key={owner.name} className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.avatar}>{initials(owner.name)}</div>
            <div>
              <p className={styles.listTitle}>{owner.name}</p>
              <p className={styles.listMeta}>{owner.contact}</p>
            </div>
          </div>
          <div className={styles.profileGrid}>
            <div>
              <span>Propiedades vinculadas</span>
              <strong>{owner.linkedProperties}</strong>
            </div>
            <div>
              <span>Exclusividad</span>
              <strong>{owner.exclusivity}</strong>
            </div>
            <div>
              <span>Estatus</span>
              <ToneBadge label={owner.status} tone={owner.tone} />
            </div>
            <div>
              <span>Ultima interaccion</span>
              <strong>{owner.lastInteraction}</strong>
            </div>
          </div>
          <div className={styles.inlineMeta}>
            <span>
              <FiMapPin />
              {owner.zoneFocus}
            </span>
            <span>
              <FiUser />
              {owner.advisor}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

function BuyersView() {
  return (
    <div className={styles.cardsGridThree}>
      {buyers.map((buyer) => (
        <article key={buyer.name} className={styles.profileCard}>
          <div className={styles.listHeader}>
            <div>
              <p className={styles.listTitle}>{buyer.name}</p>
              <p className={styles.listMeta}>{buyer.note}</p>
            </div>
            <ToneBadge label={buyer.qualification} tone={buyer.tone} />
          </div>
          <div className={styles.profileGrid}>
            <div>
              <span>Presupuesto</span>
              <strong>{buyer.budget}</strong>
            </div>
            <div>
              <span>Zonas de interes</span>
              <strong>{buyer.zones.join(" · ")}</strong>
            </div>
            <div>
              <span>Tipo de inmueble</span>
              <strong>{buyer.propertyType}</strong>
            </div>
            <div>
              <span>Asesor asignado</span>
              <strong>{buyer.advisor}</strong>
            </div>
          </div>
          <div className={styles.codeRow}>
            <span>Propiedades sugeridas</span>
            <div className={styles.tagRow}>
              {buyer.suggested.map((code) => (
                <span key={code} className={styles.tag}>
                  {code}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function InvestorsView() {
  return (
    <div className={styles.cardsGridThree}>
      {investors.map((investor) => (
        <article key={investor.name} className={styles.profileCard}>
          <div className={styles.listHeader}>
            <div>
              <p className={styles.listTitle}>{investor.name}</p>
              <p className={styles.listMeta}>{investor.country}</p>
            </div>
            <ToneBadge label={investor.status} tone={investor.tone} />
          </div>
          <div className={styles.profileGrid}>
            <div>
              <span>Pais</span>
              <strong>{investor.country}</strong>
            </div>
            <div>
              <span>Ticket de inversion</span>
              <strong>{investor.ticket}</strong>
            </div>
            <div>
              <span>Tipo de activo</span>
              <strong>{investor.assetType}</strong>
            </div>
            <div>
              <span>Zonas de interes</span>
              <strong>{investor.zones.join(" · ")}</strong>
            </div>
            <div>
              <span>Perfil</span>
              <strong>{investor.profile}</strong>
            </div>
            <div>
              <span>Sponsor</span>
              <strong>{investor.sponsor}</strong>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function PipelineView() {
  return (
    <div className={styles.pipelineGrid}>
      {pipelineStages.map((stage, index) => (
        <section
          key={stage.stage}
          className={styles.stageColumn}
          data-tone={stage.tone}
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <div className={styles.stageHeader}>
            <div>
              <p className={styles.panelEyebrow}>Pipeline</p>
              <h2 className={styles.stageTitle}>{stage.stage}</h2>
            </div>
            <ToneBadge label={`${stage.count}`} tone={stage.tone} />
          </div>
          <p className={styles.stageValue}>{stage.value}</p>
          <div className={styles.stageDeals}>
            {stage.deals.map((deal) => (
              <article key={deal.title} className={styles.dealCard}>
                <p className={styles.listTitle}>{deal.title}</p>
                <p className={styles.listMeta}>{deal.client}</p>
                <div className={styles.inlineMeta}>
                  <span>
                    <FiStar />
                    {deal.value}
                  </span>
                </div>
                <p className={styles.dealNote}>{deal.note}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function VisitsView() {
  return (
    <div className={styles.twoColumnGrid}>
      <Panel title="Visitas programadas" subtitle="Agenda comercial" action="Seguimiento operativo">
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Asesor</th>
                <th>Estatus</th>
                <th>Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {visits.map((visit) => (
                <tr key={`${visit.property}-${visit.client}`}>
                  <td>{visit.property}</td>
                  <td>{visit.client}</td>
                  <td>{visit.date}</td>
                  <td>{visit.advisor}</td>
                  <td>
                    <ToneBadge label={visit.status} tone={visit.tone} />
                  </td>
                  <td>{visit.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <Panel title="Checklist de visita" subtitle="Cierre de campo" action="Playbook demo">
        <div className={styles.listStack}>
          <article className={styles.insightCard}>
            <div className={styles.inlineMeta}>
              <span>
                <FiCheckCircle />
                Brief del cliente validado antes de la visita
              </span>
            </div>
            <p className={styles.listMeta}>Necesidades, presupuesto, decisores y forma de pago.</p>
          </article>
          <article className={styles.insightCard}>
            <div className={styles.inlineMeta}>
              <span>
                <FiShield />
                Ruta y acceso coordinados con propietario
              </span>
            </div>
            <p className={styles.listMeta}>Control de seguridad, estacionamiento y horarios bloqueados.</p>
          </article>
          <article className={styles.insightCard}>
            <div className={styles.inlineMeta}>
              <span>
                <FiClock />
                Feedback cargado en menos de 30 minutos
              </span>
            </div>
            <p className={styles.listMeta}>Precio, objeciones, interes real y siguiente accion comprometida.</p>
          </article>
          <article className={styles.insightCard}>
            <div className={styles.inlineMeta}>
              <span>
                <FiArrowRight />
                Siguiente paso asignado a broker responsable
              </span>
            </div>
            <p className={styles.listMeta}>Propuesta, data room, carta intencion o agenda de segunda visita.</p>
          </article>
        </div>
      </Panel>
    </div>
  );
}

function ImportsView() {
  return (
    <>
      <div className={styles.cardsGridThree}>
        {importSources.map((source) => (
          <article key={source.source} className={styles.profileCard}>
            <div className={styles.listHeader}>
              <div>
                <p className={styles.listTitle}>{source.source}</p>
                <p className={styles.listMeta}>{source.records}</p>
              </div>
              <ToneBadge label={source.status} tone={source.tone} />
            </div>
            <div className={styles.profileGrid}>
              <div>
                <span>Cadencia</span>
                <strong>{source.cadence}</strong>
              </div>
              <div>
                <span>Owner</span>
                <strong>{source.owner}</strong>
              </div>
              <div className={styles.profileSpanFull}>
                <span>Cobertura</span>
                <strong>{source.coverage}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.twoColumnGrid}>
        <Panel title="Arquitectura sugerida" subtitle="Preparacion para integracion" action="No conectada a produccion">
          <div className={styles.listStack}>
            <article className={styles.insightCard}>
              <div className={styles.inlineMeta}>
                <span>
                  <FiBarChart2 />
                  Capa de ingest unificada
                </span>
              </div>
              <p className={styles.listMeta}>Normalizar propiedades, contactos, brokers y mandatos antes del CRM core.</p>
            </article>
            <article className={styles.insightCard}>
              <div className={styles.inlineMeta}>
                <span>
                  <FiCheckCircle />
                  Reglas de deduplicacion
                </span>
              </div>
              <p className={styles.listMeta}>Match por telefono, correo, codigo interno y combinacion de direccion + broker.</p>
            </article>
            <article className={styles.insightCard}>
              <div className={styles.inlineMeta}>
                <span>
                  <FiTrendingUp />
                  Prioridad de sincronizacion
                </span>
              </div>
              <p className={styles.listMeta}>EasyBroker y captacion directa como fuentes maestras del demo futuro.</p>
            </article>
          </div>
        </Panel>

        <Panel title="Campos criticos" subtitle="Homologacion de data" action="Lista minima viable">
          <div className={styles.tagMatrix}>
            {[
              "Codigo interno",
              "Operacion",
              "Precio y moneda",
              "Zona / colonia",
              "Broker",
              "Origen",
              "Propietario",
              "Exclusividad",
              "Estatus",
              "Visitas",
              "Lead source",
              "Notas comerciales",
            ].map((field) => (
              <span key={field} className={styles.tag}>
                {field}
              </span>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}

function ReportsView() {
  return (
    <>
      <div className={styles.metricsGrid}>
        {reportCards.map((metric, index) => (
          <article
            key={metric.label}
            className={styles.metricCard}
            data-tone={metric.tone}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.note}</small>
          </article>
        ))}
      </div>

      <div className={styles.twoColumnGrid}>
        <Panel title="Embudo por operacion" subtitle="Flujo comercial" action="Snapshot de direccion">
          <div className={styles.listStack}>
            {reportFlows.map((flow) => (
              <article key={flow.label} className={styles.zoneRow}>
                <div className={styles.listHeader}>
                  <div>
                    <p className={styles.listTitle}>{flow.label}</p>
                    <p className={styles.listMeta}>{flow.note}</p>
                  </div>
                  <strong className={styles.metricInline}>{flow.share}%</strong>
                </div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressBar} data-tone="teal" style={{ width: `${flow.share}%` }} />
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel title="Zonas con mayor demanda" subtitle="Mapa de interes" action="Compradores activos">
          <div className={styles.listStack}>
            {zoneDemand.map((zone) => (
              <article key={zone.zone} className={styles.insightCard}>
                <div className={styles.listHeader}>
                  <div>
                    <p className={styles.listTitle}>{zone.zone}</p>
                    <p className={styles.listMeta}>{zone.note}</p>
                  </div>
                  <ToneBadge label={zone.demand} tone="gold" />
                </div>
                <div className={styles.inlineMeta}>
                  <span>
                    <FiUser />
                    {zone.buyers} compradores activos
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </div>

      <div className={styles.twoColumnGrid}>
        <Panel title="Rendimiento por origen" subtitle="Source performance" action="Conversion a oportunidad">
          <div className={styles.listStack}>
            {sourcePerformance.map((source) => (
              <article key={source.source} className={styles.insightCard}>
                <div className={styles.listHeader}>
                  <div>
                    <p className={styles.listTitle}>{source.source}</p>
                    <p className={styles.listMeta}>{source.note}</p>
                  </div>
                  <ToneBadge label={source.conversion} tone="copper" />
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel title="Semaforo operativo" subtitle="Riesgos y foco" action="Direccion comercial">
          <div className={styles.listStack}>
            <article className={styles.insightCard}>
              <div className={styles.inlineMeta}>
                <span>
                  <FiCheckCircle />
                  Inventario premium estable
                </span>
              </div>
              <p className={styles.listMeta}>Polanco y Bosques sostienen el ticket alto con captacion directa.</p>
            </article>
            <article className={styles.insightCard}>
              <div className={styles.inlineMeta}>
                <span>
                  <FiClock />
                  Revisar velocidad de respuesta en leads abiertos
                </span>
              </div>
              <p className={styles.listMeta}>Canales agregados requieren SLA de primer contacto menor a 10 minutos.</p>
            </article>
            <article className={styles.insightCard}>
              <div className={styles.inlineMeta}>
                <span>
                  <FiStar />
                  Mayor oportunidad en inversionistas internacionales
                </span>
              </div>
              <p className={styles.listMeta}>Dubai y Canada muestran mejor interes en portafolios de renta.</p>
            </article>
          </div>
        </Panel>
      </div>
    </>
  );
}

function AdminView() {
  return (
    <>
      <div className={styles.cardsGridThree}>
        {adminModules.map((module) => (
          <article key={module.title} className={styles.profileCard}>
            <div className={styles.listHeader}>
              <div>
                <p className={styles.listTitle}>{module.title}</p>
                <p className={styles.listMeta}>{module.detail}</p>
              </div>
              <ToneBadge label={module.status} tone={module.tone} />
            </div>
          </article>
        ))}
      </div>

      <div className={styles.twoColumnGrid}>
        <Panel title="Roadmap sugerido" subtitle="Fases siguientes" action="Arquitectura preparada">
          <div className={styles.listStack}>
            {roadmapItems.map((item, index) => (
              <article key={item} className={styles.timelineCard}>
                <div className={styles.timelineRail} data-tone={index % 2 === 0 ? "gold" : "teal"} />
                <div className={styles.timelineBody}>
                  <p className={styles.listTitle}>{item}</p>
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel title="Guardrails del demo" subtitle="Presentacion y operacion" action="Concepto premium">
          <div className={styles.listStack}>
            <article className={styles.insightCard}>
              <div className={styles.inlineMeta}>
                <span>
                  <FiShield />
                  Sin impacto al frontend publico
                </span>
              </div>
              <p className={styles.listMeta}>El CRM vive en su propio modulo y ruta dedicada dentro del repo.</p>
            </article>
            <article className={styles.insightCard}>
              <div className={styles.inlineMeta}>
                <span>
                  <FiStar />
                  Mock data realista de Cervantes
                </span>
              </div>
              <p className={styles.listMeta}>Portafolio, leads, visitas e inversionistas modelados para storytelling ejecutivo.</p>
            </article>
            <article className={styles.insightCard}>
              <div className={styles.inlineMeta}>
                <span>
                  <FiTrendingUp />
                  Lista para APIs futuras
                </span>
              </div>
              <p className={styles.listMeta}>Importaciones, ownership y reportes ya estan estructurados para integracion progresiva.</p>
            </article>
          </div>
        </Panel>
      </div>
    </>
  );
}

export function renderCrmSection(sectionId: CrmSectionId) {
  switch (sectionId) {
    case "dashboard":
      return <DashboardView />;
    case "propiedades":
      return <PropertiesView />;
    case "propietarios":
      return <OwnersView />;
    case "compradores":
      return <BuyersView />;
    case "inversionistas":
      return <InvestorsView />;
    case "pipeline":
      return <PipelineView />;
    case "visitas":
      return <VisitsView />;
    case "importaciones":
      return <ImportsView />;
    case "reportes":
      return <ReportsView />;
    case "admin":
      return <AdminView />;
    default:
      return null;
  }
}
