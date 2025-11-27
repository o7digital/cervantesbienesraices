import { ServiceItem } from "@/data/services";
import ServiceCard from "./ServiceCard";

type ServicesContentProps = {
  id?: string;
  title: string;
  subtitle: string;
  services: ServiceItem[];
  backgroundClass?: string;
};

const ServicesContent = ({
  id,
  title,
  subtitle,
  services,
  backgroundClass = "bg-light",
}: ServicesContentProps) => {
  return (
    <section id={id} className={`pt-120 pb-120 ${backgroundClass}`}>
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="title-one mb-50">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.title}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;
