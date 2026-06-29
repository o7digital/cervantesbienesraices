import ServicesContent from "@/components/services/ServicesContent";
import { servicesFr } from "@/data/services";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeFr from "@/layouts/footers/FooterThreeFr";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Services immobiliers premium | Cervantes Immobilier",
  description: "Accompagnement expert pour acheter, vendre et investir en toute confiance à Mexico.",
  alternates: {
    canonical: "https://www.cervantesbienesraices.com/fr/services",
    languages: {
      "fr-FR": "https://www.cervantesbienesraices.com/fr/services",
      "es-MX": "https://www.cervantesbienesraices.com/servicios",
      "en-US": "https://www.cervantesbienesraices.com/en/services",
      "it-IT": "https://www.cervantesbienesraices.com/it/services",
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
