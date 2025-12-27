import ListingSix from "@/components/inner-listing/listing-06";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Propiedades en Venta y Renta – Casas y Departamentos | Cervantes Bienes Raíces",
  description: "Explora más de 60 propiedades disponibles: casas en venta, departamentos en renta, condominios exclusivos en CDMX, Polanco, Condesa y zonas premium de México.",
  keywords: "propiedades cdmx, casas venta polanco, departamentos renta condesa, bienes raíces méxico, propiedades exclusivas",
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