import type { Metadata } from "next";
import Contact from "@/components/inner-pages/contact";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Contacto | Cervantes Bienes Raíces",
  description:
    "Contáctanos para comprar, vender o rentar propiedades en México. Respuesta rápida y asesoría personalizada.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
    languages: {
      "es-MX": `${BASE_URL}/contact`,
      "en-US": `${BASE_URL}/en`,
    },
  },
  openGraph: {
    title: "Contacto | Cervantes Bienes Raíces",
    description:
      "Asesoría inmobiliaria personalizada en México. Escríbenos para agendar una llamada.",
    url: `${BASE_URL}/contact`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "es_MX",
  },
};

const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;
