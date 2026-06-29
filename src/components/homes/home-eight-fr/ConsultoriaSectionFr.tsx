"use client";
import ServicesContent from "@/components/services/ServicesContent";
import { servicesFr } from "@/data/services";

const ServicesSectionFr = () => {
  return (
    <ServicesContent
      id="services"
      title="Services"
      subtitle="Conseil premium pour acheter, vendre et investir à Mexico et dans des propriétés d’exception partout au Mexique."
      services={servicesFr}
    />
  );
};

export default ServicesSectionFr;
