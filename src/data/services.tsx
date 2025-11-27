import { ReactNode } from "react";
import { FiFileText, FiGlobe, FiHome, FiSearch, FiUsers } from "react-icons/fi";

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
      "Identificamos las mejores oportunidades en Polanco, Lomas de Chapultepec, Condesa, Roma y Santa Fe, considerando estilo de vida, presupuesto y objetivos de inversión, ya sea residencial o patrimonial.",
  },
  {
    icon: <FiUsers />,
    title: "Venta y Representación de Propietarios",
    description:
      "Realizamos una valuación profesional, posicionamos la propiedad en el mercado premium y la presentamos únicamente a compradores calificados nacionales y extranjeros, maximizando la velocidad y seguridad de venta.",
  },
  {
    icon: <FiFileText />,
    title: "Asesoría Legal y Documentación",
    description:
      "Acompañamos en todo el proceso jurídico: revisión de documentos, contratos, escrituras, impuestos y procesos notariales. Garantizamos certeza legal y absoluta transparencia en cada transacción.",
  },
  {
    icon: <FiSearch />,
    title: "Valuación y Análisis de Mercado",
    description:
      "Realizamos estudios comparativos actualizados y análisis de mercado para determinar el valor real del inmueble, asegurando decisiones informadas que protegen el patrimonio de nuestros clientes.",
  },
  {
    icon: <FiGlobe />,
    title: "Servicios para Extranjeros e Inversión Patrimonial",
    description:
      "Guiamos a compradores internacionales en el proceso de adquisición en México, incluyendo aspectos legales, financiamiento, reubicación y acompañamiento cultural-administrativo, y diseñamos planes de inversión inmobiliaria de largo plazo enfocados en crecimiento de capital, rendimiento proyectado y diversificación inteligente en el mercado premium de CDMX.",
  },
];

export const servicesEn: ServiceItem[] = [
  {
    icon: <FiHome />,
    title: "Luxury Property Acquisition",
    description:
      "We identify the finest opportunities in Polanco, Lomas, Condesa, Roma and Santa Fe based on lifestyle, budget and investment strategy, whether for personal residence or asset growth.",
  },
  {
    icon: <FiUsers />,
    title: "Property Sales & Seller Representation",
    description:
      "We provide professional valuation, premium market positioning and access to qualified national and international buyers, maximizing both transaction security and sale performance.",
  },
  {
    icon: <FiFileText />,
    title: "Legal & Documentation Advisory",
    description:
      "We assist throughout the entire legal process: document verification, contracts, deeds, taxes and notarization. Our objective is full legal certainty and full transparency at every stage.",
  },
  {
    icon: <FiSearch />,
    title: "Market Analysis & Valuation",
    description:
      "We deliver updated comparative market studies and property valuation to ensure accurate decision-making and strong protection of our clients' real-estate capital.",
  },
  {
    icon: <FiGlobe />,
    title: "Foreign Buyer & Investment Strategy",
    description:
      "We support international clients acquiring property in Mexico—legal process, financing, relocation and cultural onboarding—while designing long-term strategies focused on capital growth, projected yield and intelligent diversification in Mexico City's premium market.",
  },
];
