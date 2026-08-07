import type { Metadata } from "next";
import HomeEightEn from "@/components/homes/home-eight-en";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Cervantes Real Estate – Homes for Sale & Apartments for Rent in Mexico",
  description:
    "Find your ideal home in Mexico. Cervantes Real Estate offers homes for sale, apartments for rent, and expert mortgage advisory with 20+ years of experience.",
  keywords:
    "luxury real estate Mexico City, premium real estate agency Mexico City, professional real estate advisory CDMX, premium property advisor Mexico City, premium homes for sale Mexico City, luxury apartments for sale Mexico City, exclusive properties in Mexico City, luxury real estate Polanco, premium apartments in Polanco, homes for sale Polanco CDMX, luxury properties in Condesa CDMX, premium apartments Condesa Mexico City, luxury real estate Roma Norte, premium property valuation Mexico City, premium real estate investment CDMX",
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      "en-US": `${BASE_URL}/en`,
      "es-MX": BASE_URL,
      "fr-FR": `${BASE_URL}/fr`,
      "it-IT": `${BASE_URL}/it`,
      "de-DE": `${BASE_URL}/de`,
    },
  },
  openGraph: {
    title: "Cervantes Real Estate – Properties for Sale and Rent in Mexico",
    description:
      "Buy or rent premium properties with expert guidance. Based in Mexico City.",
    url: `${BASE_URL}/en`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cervantes Real Estate – Properties in Mexico",
    description:
      "Homes, apartments and advisory for buyers and renters in Mexico.",
    images: ["/images/assets/ogg.png"],
  },
};

const index = () => {
  return (
    <Wrapper>
      <HomeEightEn />
    </Wrapper>
  );
};

export default index;
