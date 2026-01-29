import LocalityPage from "@/components/localities/LocalityPage"
import Wrapper from "@/layouts/Wrapper"
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cervantesbienesraices.com'),
  title: "Casas y Departamentos en Venta y Renta en Polanco CDMX | Cervantes Bienes Raíces",
  description: "Encuentra tu hogar ideal en Polanco, la colonia más exclusiva de México. Casas de lujo, departamentos premium, penthouse. Precios desde $15M MXN. Asesoría profesional con más de 20 años de experiencia.",
  keywords: "casas venta polanco, departamentos renta polanco, propiedades polanco cdmx, bienes raíces polanco, casas lujo polanco, penthouse polanco, departamentos exclusivos polanco",
  openGraph: {
    title: "Propiedades Exclusivas en Polanco CDMX – Cervantes Bienes Raíces",
    description: "Descubre casas y departamentos de lujo en Polanco. La mejor zona residencial de Ciudad de México.",
    images: ["/assets/images/media/img_26.jpg"],
  },
  alternates: {
    canonical: "https://www.cervantesbienesraices.com/polanco",
  },
}

const PolancoPage = () => {
  const polancoData = {
    name: "Casas y Departamentos en Polanco CDMX",
    neighborhood: "Polanco",
    description: "La colonia más exclusiva y cosmopolita de Ciudad de México",
    longDescription: `Polanco es sin duda la zona residencial más prestigiosa de la Ciudad de México. Ubicada en la alcaldía Miguel Hidalgo, esta exclusiva colonia se ha consolidado como el epicentro del lujo, la cultura y los negocios en la capital.

Con sus amplias avenidas arboladas, arquitectura de primer nivel y una vibrante vida cultural, Polanco ofrece un estilo de vida incomparable. Aquí encontrarás desde elegantes residencias históricas hasta modernos desarrollos de lujo con amenidades de clase mundial.

La zona cuenta con los mejores restaurantes de México, boutiques de diseñadores internacionales, galerías de arte, y el renombrado Museo Soumaya. Sus parques, como el Parque Lincoln y el Parque América, ofrecen espacios verdes perfectos para actividades al aire libre.

Polanco es ideal para familias que buscan seguridad, calidad educativa (con los mejores colegios privados) y un ambiente cosmopolita. También es perfecto para profesionales que trabajan en Santa Fe, Reforma o Lomas, gracias a su excelente conectividad.`,
    priceRange: "$$$-$$$$",
    avgPriceSale: "$15M - $80M MXN",
    avgPriceRent: "$35,000 - $150,000 MXN/mes",
    highlights: [
      "Zona más exclusiva y segura de CDMX",
      "Mejores restaurantes y boutiques de lujo",
      "Arquitectura de primer nivel",
      "Excelente plusvalía año con año",
      "Colegios privados premium",
      "Cultura y entretenimiento de clase mundial",
      "Áreas verdes y parques bien cuidados",
      "Comunidad internacional diversa"
    ],
    attractions: [
      "Museo Soumaya – Arquitectura icónica y colección de arte",
      "Avenida Presidente Masaryk – Shopping de lujo",
      "Parque Lincoln – Área verde emblemática",
      "Antara Fashion Hall – Centro comercial premium",
      "Restaurantes Pujol, Quintonil (World's 50 Best)",
      "Auditorio Nacional – Eventos y conciertos",
      "Bosque de Chapultepec – A minutos",
      "Galerías de arte contemporáneo"
    ],
    transportation: [
      "Metro Polanco (Línea 7)",
      "Metrobús Reforma",
      "Acceso directo a Periférico",
      "15 min a Santa Fe",
      "20 min al Centro Histórico",
      "25 min al Aeropuerto"
    ],
    heroImage: "/assets/images/media/img_26.jpg"
  }

  return (
    <Wrapper>
      <LocalityPage {...polancoData} />
    </Wrapper>
  )
}

export default PolancoPage
