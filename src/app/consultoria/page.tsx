import type { Metadata } from "next"

const BASE_URL = "https://cervantesbienesraices.vercel.app"

export const metadata: Metadata = {
  title: "Consultoría Inmobiliaria Estratégica | Cervantes Bienes Raíces",
  description:
    "Consultoría para inversionistas y desarrolladores: análisis de mercado, evaluación de terrenos y estructuración de proyectos inmobiliarios en México.",
  alternates: {
    canonical: `${BASE_URL}/consultoria`,
    languages: {
      "es-MX": `${BASE_URL}/consultoria`,
      "en-US": `${BASE_URL}/en`,
    },
  },
  openGraph: {
    title: "Consultoría Inmobiliaria Estratégica",
    description:
      "Estrategias inmobiliarias a la medida: estudios de viabilidad, evaluación de proyectos y optimización de portafolios.",
    url: `${BASE_URL}/consultoria`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "es_MX",
  },
}

export default function Consultoria() {
  return (
    <main className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Consultoría</h1>

      <p className="mb-6">
        Además de nuestros servicios inmobiliarios, en <strong>LC Inmobiliaria</strong>
        ofrecemos <strong>consultoría estratégica</strong> para inversionistas y desarrolladores.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Áreas de consultoría</h2>
      <ul className="list-disc list-inside space-y-3">
        <li>
          📌 <strong>Análisis de mercado inmobiliario</strong> – 
          Estudios de viabilidad, tendencias y proyecciones de inversión.
        </li>
        <li>
          🏗 <strong>Evaluación de terrenos y proyectos</strong> – 
          Identificación de riesgos y oportunidades para desarrollos inmobiliarios.
        </li>
        <li>
          📑 <strong>Estructuración de proyectos</strong> – 
          Estrategias de compra, venta y desarrollo con enfoque de rentabilidad.
        </li>
        <li>
          📊 <strong>Optimización de portafolios de inversión</strong> – 
          Asesoría en diversificación y maximización del valor de activos inmobiliarios.
        </li>
      </ul>

      <p className="mt-6">
        Nuestro compromiso es ofrecer a los inversionistas
        <strong> información precisa y estrategias claras</strong>
        que permitan tomar decisiones seguras y rentables en el mercado inmobiliario.
      </p>
    </main>
  );
}
