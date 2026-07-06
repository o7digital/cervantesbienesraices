import { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterFour from "@/layouts/footers/FooterFour";
import FeaturedPropertiesTemplate from "@/components/featured-properties/FeaturedPropertiesTemplate";

export const metadata: Metadata = {
  title: "Nuestras Propiedades | Cervantes Bienes Raíces",
  description: "Propiedades destacadas en venta y renta seleccionadas por Cervantes Bienes Raíces.",
  alternates: { canonical: "https://www.cervantesbienesraices.com/anuncios-destacados" },
};

const AnunciosDestacadosPage = () => (
  <Wrapper>
    <HeaderOne style={true} />
    <FeaturedPropertiesTemplate />
    <FooterFour />
  </Wrapper>
);

export default AnunciosDestacadosPage;
