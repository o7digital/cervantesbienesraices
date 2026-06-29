import ListingSixFr from "@/components/inner-listing/listing-06-fr";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Propriétés - Cervantes Immobilier",
  description: "Découvrez notre sélection de propriétés premium au Mexique. Maisons et appartements de luxe à Mexico et environs.",
  alternates: {
    canonical: "https://www.cervantesbienesraices.com/fr/listing_06",
    languages: {
      "fr-FR": "https://www.cervantesbienesraices.com/fr/listing_06",
      "es-MX": "https://www.cervantesbienesraices.com/listing_06",
      "en-US": "https://www.cervantesbienesraices.com/en/listing_06",
      "it-IT": "https://www.cervantesbienesraices.com/it/listing_06",
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
