import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeDe from "@/layouts/footers/FooterThreeDe";
import AvisoPrivacidadContentDe from "@/components/inner-pages/AvisoPrivacidadContentDe";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Cervantes Real Estate",
  description:
    "Erfahren Sie, wie wir Ihre personenbezogenen Daten schützen. Transparenz zu Nutzung, ARCO-Rechten und Kontaktmöglichkeiten.",
  alternates: {
    canonical: `${BASE_URL}/de/datenschutz`,
    languages: {
      "de-DE": `${BASE_URL}/de/datenschutz`,
      "es-MX": `${BASE_URL}/aviso-privacidad`,
      "en-US": `${BASE_URL}/en/privacy-policy`,
      "fr-FR": `${BASE_URL}/fr/politique-confidentialite`,
      "it-IT": `${BASE_URL}/it/politica-privacy`,
    },
  },
  openGraph: {
    title: "Datenschutzerklärung | Cervantes Real Estate",
    description: "Transparenz beim Umgang mit personenbezogenen Daten und Zugriffsrechten.",
    url: `${BASE_URL}/de/datenschutz`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "de_DE",
  },
};

export default function Datenschutz() {
  return (
    <Wrapper>
      <HeaderFive />
      <AvisoPrivacidadContentDe />
      <FooterThreeDe />
    </Wrapper>
  );
}
