import type { Metadata } from "next";
import HomeEightDe from "@/components/homes/home-eight-de";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Cervantes Real Estate – Kauf & Miete von Häusern und Apartments in Mexiko",
  description:
    "Finden Sie Ihr ideales Zuhause in Mexiko. Cervantes Real Estate bietet Häuser zum Verkauf, Apartments zur Miete und professionelle Hypothekenberatung mit über 20 Jahren Erfahrung.",
  keywords:
    "Luxusimmobilien Mexiko-Stadt, Premium Immobilienagentur Mexiko-Stadt, professionelle Immobilienberatung CDMX, Premium Immobilienberater Mexiko-Stadt, Premium Immobilien kaufen CDMX, Luxuswohnungen kaufen Mexiko-Stadt, exklusive Immobilien in Mexiko-Stadt, Luxusimmobilien Polanco, Premium Wohnungen Polanco, Häuser kaufen Polanco CDMX, Premium Immobilien Condesa CDMX, Luxuswohnungen Condesa, Luxusimmobilien Roma Norte, Immobilien in Valle de Bravo, Immobilien in Cuernavaca Morelos, Grundstücke und Häuser für Bauträger in Valle de Bravo, beste Häuser Preis-Leistung in Valle de Bravo, beste Häuser Preis-Leistung in Cuernavaca, Häuser für Bauträger in Cuernavaca, Häuser und Grundstücke für Bauträger in CDMX Mexiko, Premium Immobilienbewertung CDMX, Premium Immobilieninvestment Mexiko-Stadt",
  alternates: {
    canonical: `${BASE_URL}/de`,
    languages: {
      "de-DE": `${BASE_URL}/de`,
      "es-MX": BASE_URL,
      "en-US": `${BASE_URL}/en`,
      "fr-FR": `${BASE_URL}/fr`,
      "it-IT": `${BASE_URL}/it`,
    },
  },
  openGraph: {
    title: "Cervantes Real Estate – Immobilien in Mexiko",
    description:
      "Kauf oder Miete von Premium-Immobilien mit Expertenbegleitung. Basis in Mexiko-Stadt.",
    url: `${BASE_URL}/de`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cervantes Real Estate – Immobilien in Mexiko",
    description:
      "Häuser, Apartments und Beratung für Käufer und Mieter in Mexiko.",
    images: ["/images/assets/ogg.png"],
  },
};

const index = () => {
  return (
    <Wrapper>
      <HomeEightDe />
    </Wrapper>
  );
};

export default index;
