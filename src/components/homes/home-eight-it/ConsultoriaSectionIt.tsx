"use client";
import ServicesContent from "@/components/services/ServicesContent";
import { servicesIt } from "@/data/services";

const ServicesSectionIt = () => {
  return (
    <ServicesContent
      id="services"
      title="Servizi"
      subtitle="Consulenza premium per acquistare, vendere e investire con fiducia a Città del Messico."
      services={servicesIt}
    />
  );
};

export default ServicesSectionIt;
