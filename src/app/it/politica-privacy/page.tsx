import type { Metadata } from "next"
import Wrapper from "@/layouts/Wrapper"
import HeaderFive from "@/layouts/headers/HeaderFive"
import FooterThreeIt from "@/layouts/footers/FooterThreeIt"
import AvisoPrivacidadContentIt from "@/components/inner-pages/AvisoPrivacidadContentIt"

const BASE_URL = "https://cervantesbienesraices.vercel.app"

export const metadata: Metadata = {
  title: "Informativa sulla Privacy | Cervantes Immobiliare",
  description:
    "Scopri come proteggiamo i tuoi dati personali presso Cervantes Immobiliare. Informazioni sull'uso, i diritti e i mezzi di contatto.",
  alternates: {
    canonical: `${BASE_URL}/it/politica-privacy`,
    languages: {
      "it-IT": `${BASE_URL}/it/politica-privacy`,
      "es-MX": `${BASE_URL}/aviso-privacidad`,
      "en-US": `${BASE_URL}/en/privacy-policy`,
      "fr-FR": `${BASE_URL}/fr/politique-confidentialite`,
    },
  },
  openGraph: {
    title: "Informativa sulla Privacy | Cervantes Immobiliare",
    description:
      "Trasparenza nella gestione dei dati personali e diritti di accesso.",
    url: `${BASE_URL}/it/politica-privacy`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "it_IT",
  },
}

export default function PoliticaPrivacy() {
  return (
    <Wrapper>
      <HeaderFive />
      <AvisoPrivacidadContentIt />
      <FooterThreeIt />
    </Wrapper>
  )
}
