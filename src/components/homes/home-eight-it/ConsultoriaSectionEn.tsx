"use client";
import ServicesContent from "@/components/services/ServicesContent";
import { servicesIt } from "@/data/services";

const ServicesSectionEn = () => {
  return (
    <ServicesContent
      id="services"
      title="Servizi"
      subtitle="Consulenza premium per comprare, vendere e investire con sicurezza a Città del Messico."
      services={servicesIt}
    />
  );
};

export default ServicesSectionEn;
