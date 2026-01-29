import type { Metadata } from "next";
import HomeEightEn from "@/components/homes/home-eight-en";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Cervantes Real Estate – Properties for Sale and Rent in Mexico",
  description:
    "Find premium homes and apartments in Mexico. Cervantes Real Estate offers expert advisory for buying or renting properties in CDMX and key locations.",
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      "en-US": `${BASE_URL}/en`,
      "es-MX": BASE_URL,
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
