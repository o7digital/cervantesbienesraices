import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const iconStyle = { fontSize: 36, color: "#b29055", marginBottom: 10 };

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card h-100 p-4 bg-white shadow-sm rounded-3">
      <div className="icon" style={iconStyle}>
        {icon}
      </div>
      <h5 className="mb-2" style={{ fontSize: 18, fontWeight: 600 }}>
        {title}
      </h5>
      <p className="mb-0" style={{ fontSize: 14, color: "#666", textAlign: "justify" }}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
