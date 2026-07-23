import ServicesContent from "@/components/services/ServicesContent";
import { servicesRu } from "@/data/services";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeRu from "@/layouts/footers/FooterThreeRu";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Премиальные услуги недвижимости | Cervantes Bienes Raíces",
};

const ServicesPageRu = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderFive />
        <ServicesContent
          id="services"
          title="Услуги"
          subtitle="Премиальное сопровождение для покупки, продажи и инвестиций в Мехико."
          services={servicesRu}
        />
        <FooterThreeRu />
      </div>
    </Wrapper>
  );
};

export default ServicesPageRu;
