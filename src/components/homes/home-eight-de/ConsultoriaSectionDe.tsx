"use client";
import ServicesContent from "@/components/services/ServicesContent";
import { servicesDe } from "@/data/services";

const ServicesSectionDe = () => {
  return (
    <ServicesContent
      id="services"
      title="Leistungen"
      subtitle="Premium-Beratung für Kauf, Verkauf und Investitionen in Mexiko-Stadt und außergewöhnliche Immobilien in ganz Mexiko."
      services={servicesDe}
    />
  );
};

export default ServicesSectionDe;
