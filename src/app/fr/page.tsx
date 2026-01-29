import type { Metadata } from "next";
import HomeEightFr from "@/components/homes/home-eight-fr";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Cervantes Bienes Raíces – Vente et Location de Maisons et Appartements au Mexique",
  description:
    "Trouvez votre maison idéale au Mexique. Cervantes Bienes Raíces propose des maisons à vendre, des appartements à louer et un conseil hypothécaire professionnel. Plus de 20 ans d’expérience sur le marché immobilier.",
  keywords:
    "maisons à vendre mexique, appartements à louer cdmx, immobilier mexique, agence immobilière, propriétés à vendre, maisons polanco, appartements condesa, conseil hypothécaire",
  alternates: {
    canonical: `${BASE_URL}/fr`,
    languages: {
      "fr-FR": `${BASE_URL}/fr`,
      "es-MX": BASE_URL,
      "en-US": `${BASE_URL}/en`,
      "it-IT": `${BASE_URL}/it`,
    },
  },
  openGraph: {
    title: "Cervantes Bienes Raíces – Votre maison idéale au Mexique",
    description:
      "Vente et location de maisons et appartements. Conseil immobilier professionnel avec plus de 20 ans d’expérience.",
    url: `${BASE_URL}/fr`,
    siteName: "Cervantes Bienes Raíces",
    images: [
      {
        url: "/images/assets/ogg.png",
        width: 1200,
        height: 630,
        alt: "Cervantes Bienes Raíces",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cervantes Bienes Raíces – Vente et location au Mexique",
    description:
      "Maisons, appartements et propriétés exclusives au Mexique avec conseil professionnel.",
    images: ["/images/assets/ogg.png"],
  },
};

const index = () => {
  return (
    <Wrapper>
      <HomeEightFr />
    </Wrapper>
  );
};

export default index;
