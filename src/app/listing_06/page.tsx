import ListingSix from "@/components/inner-listing/listing-06";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Propiedades en Venta y Renta – Casas y Departamentos | Cervantes Bienes Raíces",
  description: "Explora más de 60 propiedades disponibles: casas en venta, departamentos en renta, condominios exclusivos en CDMX, Polanco, Condesa y zonas premium de México.",
  keywords: "propiedades exclusivas en CDMX, venta de propiedades premium CDMX, departamentos premium en venta CDMX, casas premium en venta CDMX, bienes raíces premium Polanco, propiedades de lujo Polanco, departamentos premium Condesa CDMX, bienes raíces premium Roma Norte, propiedades en Valle de Bravo, propiedades en Cuernavaca Morelos, terrenos y casas para desarrolladores en Valle de Bravo, mejores casas precio calidad en Valle de Bravo, mejores casas precio calidad en Cuernavaca, casas para desarrolladores en Cuernavaca, casas y terrenos para desarrolladores en CDMX México",
  openGraph: {
    title: "Catálogo de Propiedades – Cervantes Bienes Raíces",
    description: "Descubre casas, departamentos y propiedades exclusivas en las mejores zonas de México",
    images: ["/images/assets/ogg.png"],
  },
};
const index = () => {
   return (
      <Wrapper>
         <ListingSix />
      </Wrapper>
   )
}

export default index
