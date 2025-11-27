"use client";
import ServicesContent from "@/components/services/ServicesContent";
import { servicesEs } from "@/data/services";

const ServicesSection = () => {
  return (
    <ServicesContent
      id="servicios"
      title="Servicios"
      subtitle="Soluciones premium para comprar, vender e invertir en las zonas más exclusivas de CDMX."
      services={servicesEs}
    />
  );
};

export default ServicesSection;
