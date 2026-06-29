import ListingSixIt from "@/components/inner-listing/listing-06-it";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Proprietà - Cervantes Immobiliare",
  description: "Scopri la nostra selezione di proprietà premium in Messico. Case e appartamenti di lusso a Città del Messico e dintorni.",
  alternates: {
    canonical: "https://www.cervantesbienesraices.com/it/listing_06",
    languages: {
      "it-IT": "https://www.cervantesbienesraices.com/it/listing_06",
      "es-MX": "https://www.cervantesbienesraices.com/listing_06",
      "en-US": "https://www.cervantesbienesraices.com/en/listing_06",
      "fr-FR": "https://www.cervantesbienesraices.com/fr/listing_06",
    },
  },
};

const index = () => {
  return (
    <Wrapper>
      <ListingSixIt />
    </Wrapper>
  );
};

export default index;
