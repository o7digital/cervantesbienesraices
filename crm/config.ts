import type { IconType } from "react-icons";
import {
  FiBarChart2,
  FiCalendar,
  FiDollarSign,
  FiGrid,
  FiHome,
  FiLayers,
  FiPieChart,
  FiSettings,
  FiUploadCloud,
  FiUsers,
} from "react-icons/fi";

export type CrmSectionId =
  | "dashboard"
  | "propiedades"
  | "propietarios"
  | "compradores"
  | "inversionistas"
  | "pipeline"
  | "visitas"
  | "importaciones"
  | "reportes"
  | "admin";

export type CrmSection = {
  id: CrmSectionId;
  slug: string;
  label: string;
  href: string;
  tagline: string;
  description: string;
  icon: IconType;
};

export const crmSections: CrmSection[] = [
  {
    id: "dashboard",
    slug: "dashboard",
    label: "Dashboard",
    href: "/crm",
    tagline: "Mesa ejecutiva inmobiliaria",
    description:
      "Vision consolidada de captacion, inventario, demanda calificada y actividad comercial para Cervantes Bienes Raices.",
    icon: FiGrid,
  },
  {
    id: "propiedades",
    slug: "propiedades",
    label: "Propiedades",
    href: "/crm/propiedades",
    tagline: "Inventario premium",
    description:
      "Control de activos en venta y renta con foco en origen, broker responsable y estatus comercial.",
    icon: FiHome,
  },
  {
    id: "propietarios",
    slug: "propietarios",
    label: "Propietarios",
    href: "/crm/propietarios",
    tagline: "Relaciones de captacion",
    description:
      "Seguimiento a propietarios activos, exclusividades, inmuebles vinculados y ultima interaccion.",
    icon: FiUsers,
  },
  {
    id: "compradores",
    slug: "compradores",
    label: "Compradores",
    href: "/crm/compradores",
    tagline: "Demanda calificada",
    description:
      "Compradores listos para operar con presupuesto, interes, asesor asignado y sugerencias de propiedades.",
    icon: FiDollarSign,
  },
  {
    id: "inversionistas",
    slug: "inversionistas",
    label: "Inversionistas",
    href: "/crm/inversionistas",
    tagline: "Capital internacional",
    description:
      "Relacion premium con inversionistas patrimoniales y fondos interesados en CDMX y corredores estrategicos.",
    icon: FiLayers,
  },
  {
    id: "pipeline",
    slug: "pipeline",
    label: "Pipeline",
    href: "/crm/pipeline",
    tagline: "Operacion comercial",
    description:
      "Embudo inmobiliario por etapas con oportunidades activas, valor estimado y siguientes pasos.",
    icon: FiBarChart2,
  },
  {
    id: "visitas",
    slug: "visitas",
    label: "Visitas",
    href: "/crm/visitas",
    tagline: "Agenda de campo",
    description:
      "Visitas programadas con cliente, asesor, comentarios tacticos y control de confirmacion.",
    icon: FiCalendar,
  },
  {
    id: "importaciones",
    slug: "importaciones",
    label: "Importaciones",
    href: "/crm/importaciones",
    tagline: "Fuentes y sincronizacion",
    description:
      "Gestion de conectores, cargas de catalogo y homologacion de fichas desde los canales comerciales clave.",
    icon: FiUploadCloud,
  },
  {
    id: "reportes",
    slug: "reportes",
    label: "Reportes",
    href: "/crm/reportes",
    tagline: "Inteligencia comercial",
    description:
      "KPI de conversion, demanda, absorcion y velocidad operativa para direccion y asesores.",
    icon: FiPieChart,
  },
  {
    id: "admin",
    slug: "admin",
    label: "Admin",
    href: "/crm/admin",
    tagline: "Gobierno operativo",
    description:
      "Controles de usuarios, scoring, branding, permisos e integraciones preparadas para siguiente fase.",
    icon: FiSettings,
  },
];

export function resolveCrmSection(slug?: string[]): CrmSection | null {
  if (!slug || slug.length === 0) {
    return crmSections[0];
  }

  if (slug.length > 1) {
    return null;
  }

  const normalized = slug[0]?.toLowerCase();
  if (!normalized || normalized === "dashboard") {
    return crmSections[0];
  }

  return crmSections.find((section) => section.slug === normalized) ?? null;
}
