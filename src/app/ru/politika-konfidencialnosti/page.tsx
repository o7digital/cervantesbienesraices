import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThreeRu from "@/layouts/footers/FooterThreeRu";
import AvisoPrivacidadContentRu from "@/components/inner-pages/AvisoPrivacidadContentRu";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Cervantes Недвижимость",
  description:
    "Информация о защите персональных данных, правах ARCO и способах связи с Cervantes Bienes Raíces.",
  alternates: {
    canonical: `${BASE_URL}/ru/politika-konfidencialnosti`,
    languages: {
      "ru-RU": `${BASE_URL}/ru/politika-konfidencialnosti`,
      "es-MX": `${BASE_URL}/aviso-privacidad`,
      "en-US": `${BASE_URL}/en/privacy-policy`,
      "fr-FR": `${BASE_URL}/fr/politique-confidentialite`,
      "it-IT": `${BASE_URL}/it/politica-privacy`,
      "de-DE": `${BASE_URL}/de/datenschutz`,
    },
  },
  openGraph: {
    title: "Политика конфиденциальности | Cervantes Недвижимость",
    description: "Прозрачная обработка персональных данных и порядок реализации ваших прав.",
    url: `${BASE_URL}/ru/politika-konfidencialnosti`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "ru_RU",
  },
};

export default function PrivacyPolicyRu() {
  return (
    <Wrapper>
      <HeaderFive />
      <AvisoPrivacidadContentRu />
      <FooterThreeRu />
    </Wrapper>
  );
}
