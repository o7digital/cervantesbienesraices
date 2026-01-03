import type { Metadata } from "next"

const BASE_URL = "https://cervantesbienesraices.vercel.app"

export const metadata: Metadata = {
  title: "Quiénes Somos | Cervantes Bienes Raíces",
  description:
    "Conoce al equipo de Cervantes Bienes Raíces. Más de 20 años de experiencia en asesoría inmobiliaria en México con enfoque en transparencia y confianza.",
  alternates: {
    canonical: `${BASE_URL}/quienes-somos`,
    languages: {
      "es-MX": `${BASE_URL}/quienes-somos`,
      "en-US": `${BASE_URL}/en`,
    },
  },
  openGraph: {
    title: "Quiénes Somos | Cervantes Bienes Raíces",
    description:
      "Somos especialistas en bienes raíces con más de 20 años de experiencia en México. Transparencia, confianza y resultados.",
    url: `${BASE_URL}/quienes-somos`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "es_MX",
  },
}

export default function QuienesSomos() {
  return (
    <main className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Quiénes Somos</h1>

      <p className="mb-4">
        En <strong>LC Inmobiliaria</strong> ofrecemos un servicio basado en la confianza,
        la experiencia y la transparencia. Nuestra fundadora,
        <strong> Ma. de Lourdes Cázares Arce</strong>, cuenta con más de
        <strong> 20 años de trayectoria en el sector inmobiliario</strong>,
        colaborando con diversas agencias reconocidas y consolidándose como asesora independiente.
      </p>

      <p className="mb-4">
        A lo largo de los años hemos formado <strong>alianzas estratégicas con colegas de confianza</strong>,
        lo que nos ha permitido concretar operaciones seguras y exitosas.
        Nuestro compromiso es brindar un servicio responsable, formal y transparente,
        que garantice la tranquilidad de nuestros clientes en cada operación.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Nuestra pasión</h2>
      <p className="mb-4">
        Ayudar a las personas a alcanzar sus sueños: encontrar el <strong>hogar perfecto</strong>
        o la <strong>propiedad ideal para sus negocios</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Valores que nos definen</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>🤝 Confianza y cercanía en cada trato</li>
        <li>📑 Trámites claros y transparentes</li>
        <li>🏡 Experiencia comprobada de más de 20 años</li>
        <li>✅ Resultados exitosos para nuestros clientes</li>
      </ul>
    </main>
  );
}
