import ListingSixFr from "@/components/inner-listing/listing-06-fr";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Propriétés - Cervantes Immobilier",
  description: "Découvrez notre sélection de propriétés premium au Mexique. Maisons et appartements de luxe à Mexico et environs.",
  alternates: {
    canonical: "https://cervantesbienesraices.vercel.app/fr/listing_06",
    languages: {
      "fr-FR": "https://cervantesbienesraices.vercel.app/fr/listing_06",
      "es-MX": "https://cervantesbienesraices.vercel.app/listing_06",
      "en-US": "https://cervantesbienesraices.vercel.app/en/listing_06",
      "it-IT": "https://cervantesbienesraices.vercel.app/it/listing_06",
    },
  },
};

const index = () => {
  return (
    <Wrapper>
      <ListingSixFr />
    </Wrapper>
  );
};

export default index;
