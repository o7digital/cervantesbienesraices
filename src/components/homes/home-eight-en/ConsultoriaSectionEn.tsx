"use client";
import ServicesContent from "@/components/services/ServicesContent";
import { servicesEn } from "@/data/services";

const ServicesSectionEn = () => {
  return (
    <ServicesContent
      id="services"
      title="Services"
      subtitle="Premium advisory to buy, sell, and invest with confidence in Mexico City and exceptional properties throughout Mexico."
      services={servicesEn}
    />
  );
};

export default ServicesSectionEn;
