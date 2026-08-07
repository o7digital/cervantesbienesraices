import HomeEight from "@/components/homes/home-eight";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cervantesbienesraices.com'),
  title: "Cervantes Bienes Raíces – Venta y Renta de Casas y Departamentos en México | +20 años de experiencia",
  description: "Cervantes Bienes Raíces – Asesoría inmobiliaria profesional con más de 20 años de experiencia en CDMX, Polanco, Condesa y toda el área metropolitana.",
  keywords: "bienes raíces de lujo CDMX, inmobiliaria premium Ciudad de México, asesoría inmobiliaria profesional CDMX, venta de propiedades premium CDMX, compra de propiedades premium CDMX, departamentos premium en venta CDMX, casas premium en venta CDMX, propiedades exclusivas en CDMX, bienes raíces premium Polanco, inmobiliaria premium Polanco, departamentos premium en Polanco, casas en venta Polanco CDMX, bienes raíces premium Condesa, departamentos premium Condesa CDMX, bienes raíces premium Roma Norte, propiedades en Valle de Bravo, propiedades en Cuernavaca Morelos, terrenos y casas para desarrolladores en Valle de Bravo, mejores casas precio calidad en Valle de Bravo, mejores casas precio calidad en Cuernavaca, casas para desarrolladores en Cuernavaca, casas y terrenos para desarrolladores en CDMX México, valuación de propiedades premium CDMX, inversión inmobiliaria premium CDMX",
  openGraph: {
    title: "Cervantes Bienes Raíces – Tu Hogar Ideal en México",
    description: "Cervantes Bienes Raíces – Asesoría inmobiliaria profesional con más de 20 años de experiencia en CDMX, Polanco, Condesa y toda el área metropolitana.",
    url: "https://www.cervantesbienesraices.com",
    siteName: "Cervantes Bienes Raíces",
    images: [
      {
        url: "/images/assets/ogg.png",
        width: 1200,
        height: 630,
        alt: "Cervantes Bienes Raíces",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cervantes Bienes Raíces – Venta y Renta de Propiedades en México",
    description: "Cervantes Bienes Raíces – Asesoría inmobiliaria profesional con más de 20 años de experiencia en CDMX, Polanco, Condesa y toda el área metropolitana.",
    images: ["/images/assets/ogg.png"],
  },
  alternates: {
    canonical: "https://www.cervantesbienesraices.com",
    languages: {
      'es-MX': 'https://www.cervantesbienesraices.com',
      'en-US': 'https://www.cervantesbienesraices.com/en',
      'fr-FR': 'https://www.cervantesbienesraices.com/fr',
      'it-IT': 'https://www.cervantesbienesraices.com/it',
      'de-DE': 'https://www.cervantesbienesraices.com/de',
    },
  },
};

const index = () => {
  return (
    <Wrapper>
      <HomeEight />
    </Wrapper>
  )
}

export default index;
