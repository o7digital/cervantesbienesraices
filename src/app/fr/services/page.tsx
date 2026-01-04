import ServicesContent from "@/components/services/ServicesContent";
import { servicesFr } from "@/data/services";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeFr from "@/layouts/footers/FooterThreeFr";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Services immobiliers premium | Cervantes Immobilier",
  description: "Accompagnement expert pour acheter, vendre et investir en toute confiance à Mexico.",
  alternates: {
    canonical: "https://cervantesbienesraices.vercel.app/fr/services",
    languages: {
      "fr-FR": "https://cervantesbienesraices.vercel.app/fr/services",
      "es-MX": "https://cervantesbienesraices.vercel.app/servicios",
      "en-US": "https://cervantesbienesraices.vercel.app/en/services",
      "it-IT": "https://cervantesbienesraices.vercel.app/it/services",
    },
  },
};

const ServicesPageFr = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderFive />
        <ServicesContent
          id="services"
          title="Services"
          subtitle="Accompagnement premium pour acheter, vendre et investir en toute confiance à Mexico."
          services={servicesFr}
        />
        <FooterThreeFr />
      </div>
    </Wrapper>
  );
};

export default ServicesPageFr;
