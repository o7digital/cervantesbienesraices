"use client";
import ServicesContent from "@/components/services/ServicesContent";
import { servicesRu } from "@/data/services";

const УслугиSectionRu = () => {
  return (
    <ServicesContent
      id="services"
      title="Услуги"
      subtitle="Премиальное сопровождение для покупки, продажи и инвестиций в Мехико и по всей Мексике."
      services={servicesRu}
    />
  );
};

export default УслугиSectionRu;
