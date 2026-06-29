import ServicesContent from "@/components/services/ServicesContent";
import { servicesIt } from "@/data/services";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeIt from "@/layouts/footers/FooterThreeIt";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Servizi immobiliari premium | Cervantes Immobiliare",
  description: "Consulenza esperta per acquistare, vendere e investire con fiducia a Città del Messico.",
  alternates: {
    canonical: "https://www.cervantesbienesraices.com/it/services",
    languages: {
      "it-IT": "https://www.cervantesbienesraices.com/it/services",
      "es-MX": "https://www.cervantesbienesraices.com/servicios",
      "en-US": "https://www.cervantesbienesraices.com/en/services",
      "fr-FR": "https://www.cervantesbienesraices.com/fr/services",
    },
  },
};

const ServicesPageIt = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderFive />
        <ServicesContent
          id="services"
          title="Servizi"
          subtitle="Consulenza premium per acquistare, vendere e investire con fiducia a Città del Messico."
          services={servicesIt}
        />
        <FooterThreeIt />
      </div>
    </Wrapper>
  );
};

export default ServicesPageIt;
