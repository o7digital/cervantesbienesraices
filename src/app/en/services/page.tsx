import ServicesContent from "@/components/services/ServicesContent";
import { servicesEn } from "@/data/services";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeEn from "@/layouts/footers/FooterThreeEn";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Premium real-estate services | Cervantes Bienes Raíces",
};

const ServicesPageEn = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderFive />
        <ServicesContent
          id="services"
          title="Services"
          subtitle="Premium guidance to buy, sell, and invest with confidence in Mexico City."
          services={servicesEn}
        />
        <FooterThreeEn />
      </div>
    </Wrapper>
  );
};

export default ServicesPageEn;
