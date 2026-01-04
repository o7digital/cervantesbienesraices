import ServicesContent from "@/components/services/ServicesContent";
import { servicesIt } from "@/data/services";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeIt from "@/layouts/footers/FooterThreeIt";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Servizi immobiliari premium | Cervantes Immobiliare",
  description: "Consulenza esperta per acquistare, vendere e investire con fiducia a Città del Messico.",
  alternates: {
    canonical: "https://cervantesbienesraices.vercel.app/it/services",
    languages: {
      "it-IT": "https://cervantesbienesraices.vercel.app/it/services",
      "es-MX": "https://cervantesbienesraices.vercel.app/servicios",
      "en-US": "https://cervantesbienesraices.vercel.app/en/services",
      "fr-FR": "https://cervantesbienesraices.vercel.app/fr/services",
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
