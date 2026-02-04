import ServicesContent from "@/components/services/ServicesContent";
import { servicesDe } from "@/data/services";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeDe from "@/layouts/footers/FooterThreeDe";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Premium-Immobilienleistungen | Cervantes Real Estate",
};

const ServicesPageDe = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderFive />
        <ServicesContent
          id="services"
          title="Leistungen"
          subtitle="Premium-Begleitung, um in Mexiko-Stadt sicher zu kaufen, zu verkaufen oder zu investieren."
          services={servicesDe}
        />
        <FooterThreeDe />
      </div>
    </Wrapper>
  );
};

export default ServicesPageDe;
