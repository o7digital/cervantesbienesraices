import ServicesContent from "@/components/services/ServicesContent";
import { servicesEs } from "@/data/services";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThree from "@/layouts/footers/FooterThree";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Servicios inmobiliarios premium | Cervantes Bienes Raíces",
};

export default function Servicios() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderFive />
        <ServicesContent
          id="servicios"
          title="Servicios"
          subtitle="Asesoría inmobiliaria premium para comprar, vender e invertir en las zonas más exclusivas de la CDMX."
          services={servicesEs}
        />
        <FooterThree />
      </div>
    </Wrapper>
  );
}
