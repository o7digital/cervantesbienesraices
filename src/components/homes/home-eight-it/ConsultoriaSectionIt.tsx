"use client";
import ServicesContent from "@/components/services/ServicesContent";
import { servicesIt } from "@/data/services";

const ServicesSectionIt = () => {
  return (
    <ServicesContent
      id="services"
      title="Servizi"
      subtitle="Consulenza premium per acquistare, vendere e investire a Città del Messico e in proprietà eccezionali in tutto il Messico."
      services={servicesIt}
    />
  );
};

export default ServicesSectionIt;
