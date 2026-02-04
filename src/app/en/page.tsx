import type { Metadata } from "next";
import HomeEightEn from "@/components/homes/home-eight-en";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Cervantes Real Estate – Homes for Sale & Apartments for Rent in Mexico",
  description:
    "Find your ideal home in Mexico. Cervantes Real Estate offers homes for sale, apartments for rent, and expert mortgage advisory with 20+ years of experience.",
  keywords:
    "homes for sale mexico, apartments for rent cdmx, real estate mexico, real estate agency, properties for sale, houses polanco, apartments condesa, mortgage advisory",
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
