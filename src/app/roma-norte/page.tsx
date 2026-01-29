import LocalityPage from "@/components/localities/LocalityPage"
import Wrapper from "@/layouts/Wrapper"
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cervantesbienesraices.com'),
  title: "Departamentos y Casas en Renta y Venta en Roma Norte CDMX | Cervantes Bienes Raíces",
  description: "Encuentra tu hogar en Roma Norte, el barrio más trendy de CDMX. Departamentos modernos, lofts, casas restauradas. Precios desde $6M MXN. Arte, gastronomía y cultura en cada esquina.",
  keywords: "departamentos roma norte, casas venta roma norte, rentas roma cdmx, lofts roma norte, propiedades roma norte, bienes raíces roma, departamentos modernos roma",
  openGraph: {
    title: "Vive en Roma Norte CDMX – El Barrio Más Trendy | Cervantes",
    description: "Descubre Roma Norte: arte urbano, cafés hipster, galerías y la mejor escena cultural de México.",
    images: ["/assets/images/media/img_28.jpg"],
  },
  alternates: {
    canonical: "https://www.cervantesbienesraices.com/roma-norte",
  },
}

const RomaNortePage = () => {
  const romaData = {
    name: "Departamentos y Casas en Roma Norte CDMX",
    neighborhood: "Roma Norte",
    description: "El epicentro del arte, la cultura y la innovación en Ciudad de México",
    longDescription: `Roma Norte se ha convertido en el barrio más trendy y vibrante de la Ciudad de México. Con su mezcla perfecta de arquitectura histórica restaurada, arte urbano, gastronomía de vanguardia y una escena cultural incomparable, esta colonia atrae a creativos, emprendedores y familias jóvenes de todo el mundo.

Las calles de Roma Norte son un museo al aire libre: fachadas porfirianas restauradas, murales de artistas internacionales, galerías de arte contemporáneo y diseño en cada esquina. La Avenida Álvaro Obregón y la calle de Colima concentran la mayor oferta de restaurantes, cafés de especialidad, bares de coctelería y espacios culturales.

El barrio ha experimentado una transformación notable en los últimos años, con desarrollos inmobiliarios que respetan el patrimonio arquitectónico mientras ofrecen amenidades modernas. Aquí encontrarás desde departamentos tipo loft en edificios industriales restaurados hasta elegantes casas porfirianas convertidas en residencias contemporáneas.

Roma Norte es ideal para nómadas digitales, profesionales creativos, startups y familias que valoran la cultura, la gastronomía y un estilo de vida urbano sostenible. Con excelente conectividad, ciclovías y transporte público, es uno de los barrios más walkable de CDMX.`,
    priceRange: "$$-$$$",
    avgPriceSale: "$6M - $20M MXN",
    avgPriceRent: "$15,000 - $50,000 MXN/mes",
    highlights: [
      "Epicentro de arte y cultura urbana",
      "Mejor escena gastronómica de CDMX",
      "Arquitectura histórica restaurada",
      "Barrio walkable y bike-friendly",
      "Comunidad de creativos y emprendedores",
      "Espacios de coworking premium",
      "Mercados orgánicos y sustentabilidad",
      "Excelente plusvalía en desarrollo"
    ],
    attractions: [
      "Casa Lamm – Centro cultural y galerías",
      "Plaza Río de Janeiro – Jardín emblemático",
      "Avenida Álvaro Obregón – Corredor gastronómico",
      "Mercado Roma – Mercado gourmet",
      "Restaurantes Rosetta, Maximo Bistrot",
      "Galerías de arte contemporáneo",
      "Cafés Quentin, Buna, Cafe Nin",
      "Arte urbano y murales callejeros"
    ],
    transportation: [
      "Metro Insurgentes (Línea 1)",
      "Metrobús Álvaro Obregón",
      "Metrobús Insurgentes",
      "Ciclovías en Orizaba y Álvaro Obregón",
      "15 min a Condesa",
      "20 min a Polanco",
      "10 min a Centro Histórico"
    ],
    heroImage: "/assets/images/media/img_28.jpg"
  }

  return (
    <Wrapper>
      <LocalityPage {...romaData} />
    </Wrapper>
  )
}

export default RomaNortePage
