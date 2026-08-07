import type { Metadata } from "next";
import HomeEightIt from "@/components/homes/home-eight-it";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Cervantes Real Estate – Vendita e Affitto di Case e Appartamenti in Messico",
  description:
    "Trova la tua casa ideale in Messico. Cervantes Real Estate offre case in vendita, appartamenti in affitto e consulenza ipotecaria professionale. Oltre 20 anni di esperienza nel mercato immobiliare.",
  keywords:
    "immobili di lusso Città del Messico, agenzia immobiliare premium Città del Messico, consulenza immobiliare professionale CDMX, consulente immobiliare premium Città del Messico, proprietà premium in vendita CDMX, appartamenti di lusso Città del Messico, immobili esclusivi a Città del Messico, immobili di lusso Polanco, appartamenti premium Polanco, case in vendita Polanco CDMX, immobili premium Condesa CDMX, appartamenti di lusso Condesa, immobili di lusso Roma Norte, proprietà a Valle de Bravo, proprietà a Cuernavaca Morelos, terreni e case per sviluppatori a Valle de Bravo, migliori case qualità prezzo a Valle de Bravo, migliori case qualità prezzo a Cuernavaca, case per sviluppatori a Cuernavaca, case e terreni per sviluppatori a CDMX Messico, valutazione immobiliare premium CDMX, investimento immobiliare premium Città del Messico",
  alternates: {
    canonical: `${BASE_URL}/it`,
    languages: {
      "it-IT": `${BASE_URL}/it`,
      "es-MX": BASE_URL,
      "en-US": `${BASE_URL}/en`,
      "fr-FR": `${BASE_URL}/fr`,
      "de-DE": `${BASE_URL}/de`,
    },
  },
  openGraph: {
    title: "Cervantes Real Estate – La tua casa ideale in Messico",
    description:
      "Vendita e affitto di case e appartamenti. Consulenza immobiliare professionale con oltre 20 anni di esperienza.",
    url: `${BASE_URL}/it`,
    siteName: "Cervantes Real Estate",
    images: [
      {
        url: "/images/assets/ogg.png",
        width: 1200,
        height: 630,
        alt: "Cervantes Real Estate",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cervantes Real Estate – Vendita e Affitto in Messico",
    description:
      "Case, appartamenti e proprietà esclusive in Messico con consulenza professionale.",
    images: ["/images/assets/ogg.png"],
  },
};

const index = () => {
  return (
    <Wrapper>
      <HomeEightIt />
    </Wrapper>
  );
};

export default index;
