import type { Metadata } from "next";
import HomeEightIt from "@/components/homes/home-eight-it";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://cervantesbienesraices.vercel.app";

export const metadata: Metadata = {
  title: "Cervantes Immobiliare – Vendita e Affitto di Proprietà in Messico",
  description:
    "Trova case e appartamenti premium in Messico. Cervantes Immobiliare offre consulenza esperta per l'acquisto o l'affitto di proprietà a Città del Messico e in località chiave.",
  alternates: {
    canonical: `${BASE_URL}/it`,
    languages: {
      "it-IT": `${BASE_URL}/it`,
      "es-MX": BASE_URL,
      "en-US": `${BASE_URL}/en`,
      "fr-FR": `${BASE_URL}/fr`,
    },
  },
  openGraph: {
    title: "Cervantes Immobiliare – Vendita e Affitto in Messico",
    description:
      "Acquista o affitta proprietà premium con consulenza esperta. Con sede a Città del Messico.",
    url: `${BASE_URL}/it`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cervantes Immobiliare – Proprietà in Messico",
    description:
      "Case, appartamenti e consulenza per acquirenti e affittuari in Messico.",
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
