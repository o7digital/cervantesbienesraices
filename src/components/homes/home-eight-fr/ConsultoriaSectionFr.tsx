"use client";
import ServicesContent from "@/components/services/ServicesContent";
import { servicesFr } from "@/data/services";

const ServicesSectionFr = () => {
  return (
    <ServicesContent
      id="services"
      title="Services"
      subtitle="Conseil premium pour acheter, vendre et investir en toute confiance à Mexico."
      services={servicesFr}
    />
  );
};

export default ServicesSectionFr;
