import type { Metadata } from "next";
import HomeEightFr from "@/components/homes/home-eight-fr";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://cervantesbienesraices.vercel.app";

export const metadata: Metadata = {
  title: "Cervantes Immobilier – Vente et Location de Propriétés au Mexique",
  description:
    "Trouvez des maisons et appartements premium au Mexique. Cervantes Immobilier propose des conseils d'experts pour acheter ou louer des propriétés à Mexico et dans des emplacements clés.",
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
    title: "Cervantes Immobilier – Vente et Location au Mexique",
    description:
      "Achetez ou louez des propriétés premium avec des conseils d'experts. Basé à Mexico.",
    url: `${BASE_URL}/fr`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cervantes Immobilier – Propriétés au Mexique",
    description:
      "Maisons, appartements et conseils pour acheteurs et locataires au Mexique.",
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
