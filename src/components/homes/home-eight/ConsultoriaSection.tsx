"use client";
import ServicesContent from "@/components/services/ServicesContent";
import { servicesEs } from "@/data/services";

const ServicesSection = () => {
  return (
    <ServicesContent
      id="servicios"
      title="Servicios"
      subtitle="Soluciones premium para comprar, vender e invertir en CDMX y en propiedades excepcionales en todo México."
      services={servicesEs}
    />
  );
};

export default ServicesSection;
