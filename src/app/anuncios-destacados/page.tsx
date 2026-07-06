import { Metadata } from "next";
import { Suspense } from "react";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterFour from "@/layouts/footers/FooterFour";
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import FeaturedProperties from "@/components/blogs/blog-three/FeaturedProperties";

export const metadata: Metadata = {
  title: "Anuncios Destacados | Cervantes Bienes Raíces",
  description: "Propiedades destacadas en venta y renta seleccionadas por Cervantes Bienes Raíces.",
  alternates: { canonical: "https://www.cervantesbienesraices.com/anuncios-destacados" },
};

const AnunciosDestacadosPage = () => (
  <Wrapper>
    <HeaderOne style={true} />
    <BreadcrumbOne
      title="Anuncios Destacados"
      link="/"
      link_title="Inicio"
      sub_title="Venta y Renta"
      style={true}
      backgroundImage="/oak-motion-7vYMAVS-cKo-unsplash.webp"
    />
    <Suspense fallback={<p className="text-center py-5">Cargando propiedades...</p>}>
      <FeaturedProperties />
    </Suspense>
    <FooterFour />
  </Wrapper>
);

export default AnunciosDestacadosPage;
