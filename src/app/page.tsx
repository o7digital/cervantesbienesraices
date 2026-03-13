import HomePremium from "@/components/homes/home-premium";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cervantesbienesraices.com'),
  title: "Cervantes Bienes Raíces – Agencia inmobiliaria premium en CDMX | Compra, Venta e Inversión",
  description: "Agencia y asesoría inmobiliaria premium en Ciudad de México. Representación para compradores, propietarios e inversionistas: valuación, estrategia comercial, acompañamiento legal y cierre seguro.",
  keywords: "inmobiliaria premium cdmx, agencia inmobiliaria cdmx, venta de propiedades premium, valuación inmobiliaria, asesoría legal inmobiliaria, inversión inmobiliaria cdmx, Polanco, Condesa, Roma Norte",
  openGraph: {
    title: "Cervantes Bienes Raíces – Agencia premium en CDMX",
    description: "Representación para compra, venta e inversión. Valuación, estrategia y acompañamiento legal con enfoque premium.",
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
    title: "Cervantes Bienes Raíces – Agencia premium en CDMX",
    description: "Compra, venta e inversión con valuación, estrategia y acompañamiento legal.",
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
      <HomePremium />
    </Wrapper>
  )
}

export default index;
