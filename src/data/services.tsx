import { ReactNode } from "react";
import { FiFileText, FiGlobe, FiHome, FiSearch, FiTarget, FiUsers } from "react-icons/fi";

export type ServiceItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const servicesEs: ServiceItem[] = [
  {
    icon: <FiHome />,
    title: "Compra de Propiedades Premium",
    description:
      "Identificamos las mejores oportunidades en Polanco, Lomas, Condesa, Roma y Santa Fe, según perfil, presupuesto y propósito.",
  },
  {
    icon: <FiUsers />,
    title: "Venta y Representación de Propietarios",
    description:
      "Valoramos correctamente el inmueble, lo posicionamos estratégicamente y lo ofrecemos a compradores calificados.",
  },
  {
    icon: <FiFileText />,
    title: "Asesoría Legal y Documentación",
    description:
      "Acompañamiento en contratos, escrituras, due-diligence y procesos notariales para garantizar certeza jurídica.",
  },
  {
    icon: <FiSearch />,
    title: "Valuación y Análisis de Mercado",
    description:
      "Estudios comparativos y análisis de mercado actualizados para asegurar decisiones con alta rentabilidad.",
  },
  {
    icon: <FiGlobe />,
    title: "Servicios para Extranjeros",
    description:
      "Guía legal, financiamiento y asistencia de reubicación para compradores internacionales y expatriados.",
  },
  {
    icon: <FiTarget />,
    title: "Estrategia de Inversión y Patrimonio",
    description:
      "Construcción de estrategia patrimonial y planificación de inversión inmobiliaria en el mercado premium.",
  },
];

export const servicesEn: ServiceItem[] = [
  {
    icon: <FiHome />,
    title: "Premium Property Acquisition",
    description:
      "We identify the best opportunities in Polanco, Lomas, Condesa, Roma, and Santa Fe based on profile, budget, and purpose.",
  },
  {
    icon: <FiUsers />,
    title: "Seller Representation",
    description:
      "Accurate pricing, strategic positioning, and targeted outreach to qualified buyers.",
  },
  {
    icon: <FiFileText />,
    title: "Legal Advisory & Documentation",
    description:
      "Contracts, deeds, due diligence, and notarial processes to ensure legal certainty.",
  },
  {
    icon: <FiSearch />,
    title: "Valuation & Market Analysis",
    description:
      "Comparative studies and current market analytics to drive high-return decisions.",
  },
  {
    icon: <FiGlobe />,
    title: "Services for International Clients",
    description:
      "Legal guidance, financing, and relocation support for international buyers and expats.",
  },
  {
    icon: <FiTarget />,
    title: "Investment & Wealth Strategy",
    description:
      "Portfolio strategy and long-term planning focused on the premium real-estate market.",
  },
];
