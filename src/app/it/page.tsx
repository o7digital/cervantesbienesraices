import type { Metadata } from "next";
import HomeEightIt from "@/components/homes/home-eight-it";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Cervantes Real Estate – Vendita e Affitto di Case e Appartamenti in Messico",
  description:
    "Trova la tua casa ideale in Messico. Cervantes Real Estate offre case in vendita, appartamenti in affitto e consulenza ipotecaria professionale. Oltre 20 anni di esperienza nel mercato immobiliare.",
  keywords:
    "case in vendita messico, appartamenti in affitto cdmx, immobiliare messico, agenzia immobiliare, proprietà in vendita, case polanco, appartamenti condesa, consulenza ipotecaria",
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
