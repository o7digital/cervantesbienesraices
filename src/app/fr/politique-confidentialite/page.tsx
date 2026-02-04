import type { Metadata } from "next"
import Wrapper from "@/layouts/Wrapper"
import HeaderFive from "@/layouts/headers/HeaderFive"
import FooterThreeFr from "@/layouts/footers/FooterThreeFr"
import AvisoPrivacidadContentFr from "@/components/inner-pages/AvisoPrivacidadContentFr"

const BASE_URL = "https://cervantesbienesraices.vercel.app"

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Cervantes Immobilier",
  description:
    "Découvrez comment nous protégeons vos données personnelles chez Cervantes Immobilier. Informations sur l'utilisation, les droits et les moyens de contact.",
  alternates: {
    canonical: `${BASE_URL}/fr/politique-confidentialite`,
    languages: {
      "fr-FR": `${BASE_URL}/fr/politique-confidentialite`,
      "es-MX": `${BASE_URL}/aviso-privacidad`,
      "en-US": `${BASE_URL}/en/privacy-policy`,
      "it-IT": `${BASE_URL}/it/politica-privacy`,
      "de-DE": `${BASE_URL}/de/datenschutz`,
    },
  },
  openGraph: {
    title: "Politique de Confidentialité | Cervantes Immobilier",
    description:
      "Transparence dans la gestion des données personnelles et droits d'accès.",
    url: `${BASE_URL}/fr/politique-confidentialite`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "fr_FR",
  },
}

export default function PolitiqueConfidentialite() {
  return (
    <Wrapper>
      <HeaderFive />
      <AvisoPrivacidadContentFr />
      <FooterThreeFr />
    </Wrapper>
  )
}
