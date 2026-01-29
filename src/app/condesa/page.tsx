import LocalityPage from "@/components/localities/LocalityPage"
import Wrapper from "@/layouts/Wrapper"
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cervantesbienesraices.com'),
  title: "Departamentos y Casas en Renta y Venta en Condesa CDMX | Cervantes Bienes Raíces",
  description: "Vive en la Condesa, el corazón bohemio y cultural de CDMX. Departamentos con balcón, casas estilo Art Deco, lofts modernos. Precios desde $8M MXN. Zona pet-friendly y llena de vida.",
  keywords: "departamentos condesa, casas venta condesa, rentas condesa cdmx, lofts condesa, departamentos con balcon condesa, propiedades condesa, bienes raíces condesa",
  openGraph: {
    title: "Vive en La Condesa CDMX – Departamentos y Casas | Cervantes",
    description: "Descubre el estilo de vida bohemio de la Condesa. Arquitectura Art Deco, cafés, parques y cultura.",
    images: ["/assets/images/media/img_27.jpg"],
  },
  alternates: {
    canonical: "https://www.cervantesbienesraices.com/condesa",
  },
}

const CondesaPage = () => {
  const condesaData = {
    name: "Departamentos y Casas en La Condesa CDMX",
    neighborhood: "Condesa",
    description: "El barrio más bohemio, cultural y pet-friendly de la ciudad",
    longDescription: `La Condesa es el corazón cultural y bohemio de la Ciudad de México. Con su icónica arquitectura Art Deco de los años 30 y 40, esta colonia ha sabido conservar su encanto histórico mientras se reinventa como uno de los barrios más cosmopolitas y vibrantes de la capital.

Caminar por sus calles arboladas es descubrir una mezcla perfecta entre historia y modernidad. Sus edificios de fachadas curvas y ventanas circulares conviven con cafés de especialidad, restaurantes innovadores, galerías de arte independientes y boutiques de diseñadores locales.

La Condesa es famosa por sus dos grandes parques: el Parque México y el Parque España, verdaderos pulmones verdes donde familias, deportistas y amantes de las mascotas disfrutan cada día. Es uno de los barrios más pet-friendly de México, con áreas especiales para perros y veterinarias de alta calidad.

Ideal para jóvenes profesionales, artistas, nómadas digitales y familias que buscan un estilo de vida activo, cultural y conectado. La Condesa ofrece excelente vida nocturna, espacios de coworking, ciclismo urbano y una comunidad internacional muy activa.`,
    priceRange: "$$-$$$",
    avgPriceSale: "$8M - $25M MXN",
    avgPriceRent: "$18,000 - $60,000 MXN/mes",
    highlights: [
      "Arquitectura Art Deco única en México",
      "Barrio pet-friendly #1 de CDMX",
      "Vida cultural y gastronómica excepcional",
      "Parque México y Parque España",
      "Comunidad internacional diversa",
      "Excelente para ciclistas (ciclovías)",
      "Ambiente bohemio y relajado",
      "Alta plusvalía histórica"
    ],
    attractions: [
      "Parque México – Icónico parque Art Deco",
      "Parque España – Área verde con fuente",
      "Avenida Amsterdam – Paseo circular arbolado",
      "Cafés de especialidad (Blend, Cardinal)",
      "Restaurantes gourmet (Contramar, Lardo)",
      "Mercado Michoacán – Mercado tradicional",
      "Foro Lindbergh – Teatro independiente",
      "Ciclovía permanente en Nuevo León"
    ],
    transportation: [
      "Metro Chilpancingo (Línea 9)",
      "Metro Patriotismo (Línea 9)",
      "Metrobús Sonora",
      "Ciclovías conectadas",
      "20 min a Polanco",
      "15 min a Roma Norte",
      "25 min a Santa Fe"
    ],
    heroImage: "/assets/images/media/img_27.jpg"
  }

  return (
    <Wrapper>
      <LocalityPage {...condesaData} />
    </Wrapper>
  )
}

export default CondesaPage
