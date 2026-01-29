import HeaderFive from "@/layouts/headers/HeaderFive";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ConsultoriaSection from "./ConsultoriaSection";
import BLockFeatureOne from "./BLockFeatureOne";
import PropertyListingOne from "./PropertyListingOne";
import FancyBannerOne from "./FancyBannerOne";
import BLockFeatureTwo from "./BLockFeatureTwo"; // ← Servicios original del template
import MortgageCredit from "./MortgageCredit";
import BLockFeatureFour from "../home-one/BLockFeatureFour";
import FancyBannerTwo from "../home-two/FancyBannerTwo";
import BlogSection from "./BlogSection";
import FooterThree from "@/layouts/footers/FooterThree";
import Feedback from "./Feedback";
import OrganizationSchema from "@/components/common/OrganizationSchema";

const HomeEight = () => {
  return (
    <div className="main-page-wrapper">
      {/* SEO: Schema.org Organization */}
      <OrganizationSchema />
      
      <HeaderFive />
      <Hero />

      {/* 🔥 Bloques añadidos */}
      <AboutSection />
      <ConsultoriaSection />

      <BLockFeatureOne />
      <PropertyListingOne />
      <FancyBannerOne />
      <BLockFeatureTwo />   {/* 👈 Mantiene el bloque de Servicios original */}
      <MortgageCredit />
      <BLockFeatureFour />
      <BlogSection />
      <Feedback />
      <FancyBannerTwo />
      <FooterThree />
    </div>
  );
};

export default HomeEight;
