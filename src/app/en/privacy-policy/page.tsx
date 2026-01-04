import type { Metadata } from "next"
import Wrapper from "@/layouts/Wrapper"
import HeaderFive from "@/layouts/headers/HeaderFive"
import FooterThreeEn from "@/layouts/footers/FooterThreeEn"
import AvisoPrivacidadContentEn from "@/components/inner-pages/AvisoPrivacidadContentEn"

const BASE_URL = "https://cervantesbienesraices.vercel.app"

export const metadata: Metadata = {
  title: "Privacy Policy | Cervantes Real Estate",
  description:
    "Learn how we protect your personal data at Cervantes Real Estate. Information on usage, ARCO rights and contact methods.",
  alternates: {
    canonical: `${BASE_URL}/en/privacy-policy`,
    languages: {
      "en-US": `${BASE_URL}/en/privacy-policy`,
      "es-MX": `${BASE_URL}/aviso-privacidad`,
      "fr-FR": `${BASE_URL}/fr/politique-confidentialite`,
      "it-IT": `${BASE_URL}/it/politica-privacy`,
    },
  },
  openGraph: {
    title: "Privacy Policy | Cervantes Real Estate",
    description:
      "Transparency in personal data management and access rights.",
    url: `${BASE_URL}/en/privacy-policy`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "en_US",
  },
}

export default function PrivacyPolicy() {
  return (
    <Wrapper>
      <HeaderFive />
      <AvisoPrivacidadContentEn />
      <FooterThreeEn />
    </Wrapper>
  )
}
