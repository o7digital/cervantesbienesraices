import type { Metadata } from "next"
import Wrapper from "@/layouts/Wrapper"
import HeaderFive from "@/layouts/headers/HeaderFive"
import FooterThree from "@/layouts/footers/FooterThree"
import AvisoPrivacidadContent from "@/components/inner-pages/AvisoPrivacidadContent"

const BASE_URL = "https://www.cervantesbienesraices.com"

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Cervantes Bienes Raíces",
  description:
    "Conoce cómo protegemos tus datos personales en Cervantes Bienes Raíces. Información sobre uso, derechos ARCO y medios de contacto.",
  alternates: {
    canonical: `${BASE_URL}/aviso-privacidad`,
    languages: {
      "es-MX": `${BASE_URL}/aviso-privacidad`,
      "en-US": `${BASE_URL}/en/privacy-policy`,
      "fr-FR": `${BASE_URL}/fr/politique-confidentialite`,
      "it-IT": `${BASE_URL}/it/politica-privacy`,
    },
  },
  openGraph: {
    title: "Aviso de Privacidad | Cervantes Bienes Raíces",
    description:
      "Transparencia en el manejo de datos personales y derechos ARCO.",
    url: `${BASE_URL}/aviso-privacidad`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "es_MX",
  },
}

export default function AvisoPrivacidad() {
  return (
    <Wrapper>
      <HeaderFive />
      <AvisoPrivacidadContent />
      <FooterThree />
    </Wrapper>
  )
}
