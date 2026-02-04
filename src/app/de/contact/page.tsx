import type { Metadata } from "next";
import Contact from "@/components/inner-pages/contact";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Kontakt | Cervantes Real Estate",
  description: "Kontaktieren Sie uns für Kauf, Verkauf oder Vermietung in Mexiko. Schnelle Antwort und persönliche Beratung.",
  alternates: {
    canonical: `${BASE_URL}/de/contact`,
    languages: {
      "de-DE": `${BASE_URL}/de/contact`,
      "es-MX": `${BASE_URL}/contact`,
      "en-US": `${BASE_URL}/en`,
      "fr-FR": `${BASE_URL}/fr`,
      "it-IT": `${BASE_URL}/it`,
    },
  },
  openGraph: {
    title: "Kontakt | Cervantes Real Estate",
    description: "Individuelle Immobilienberatung in Mexiko. Schreiben Sie uns, um einen Termin zu vereinbaren.",
    url: `${BASE_URL}/de/contact`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "de_DE",
  },
};

export default function ContactDe() {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
}
