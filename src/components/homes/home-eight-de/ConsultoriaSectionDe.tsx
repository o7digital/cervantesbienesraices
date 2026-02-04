"use client";
import ServicesContent from "@/components/services/ServicesContent";
import { servicesDe } from "@/data/services";

const ServicesSectionDe = () => {
  return (
    <ServicesContent
      id="services"
      title="Leistungen"
      subtitle="Premium-Beratung für Kauf, Verkauf und Investition in Mexiko-Stadt."
      services={servicesDe}
    />
  );
};

export default ServicesSectionDe;
