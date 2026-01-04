import ListingSixIt from "@/components/inner-listing/listing-06-it";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Proprietà - Cervantes Immobiliare",
  description: "Scopri la nostra selezione di proprietà premium in Messico. Case e appartamenti di lusso a Città del Messico e dintorni.",
  alternates: {
    canonical: "https://cervantesbienesraices.vercel.app/it/listing_06",
    languages: {
      "it-IT": "https://cervantesbienesraices.vercel.app/it/listing_06",
      "es-MX": "https://cervantesbienesraices.vercel.app/listing_06",
      "en-US": "https://cervantesbienesraices.vercel.app/en/listing_06",
      "fr-FR": "https://cervantesbienesraices.vercel.app/fr/listing_06",
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
