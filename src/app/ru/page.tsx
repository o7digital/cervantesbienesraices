import type { Metadata } from "next";
import HomeEightRu from "@/components/homes/home-eight-ru";
import Wrapper from "@/layouts/Wrapper";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Cervantes Bienes Raíces - недвижимость в Мексике",
  description:
    "Найдите недвижимость в Мексике. Cervantes Bienes Raíces предлагает премиальные объекты, ранчо и ипотечное сопровождение с опытом более 20 лет.",
  keywords:
    "элитная недвижимость Мехико, премиальное агентство недвижимости Мехико, профессиональная консультация по недвижимости CDMX, премиальный консультант по недвижимости Мехико, премиальная недвижимость на продажу CDMX, элитные квартиры в Мехико, эксклюзивная недвижимость в Мехико, элитная недвижимость Поланко, премиальные квартиры Поланко, дома на продажу Поланко CDMX, премиальная недвижимость Кондеса CDMX, элитные квартиры Кондеса, элитная недвижимость Рома Норте, премиальная оценка недвижимости CDMX, премиальные инвестиции в недвижимость Мехико",
  alternates: {
    canonical: `${BASE_URL}/ru`,
    languages: {
      "ru-RU": `${BASE_URL}/ru`,
      "es-MX": BASE_URL,
      "fr-FR": `${BASE_URL}/fr`,
      "it-IT": `${BASE_URL}/it`,
      "de-DE": `${BASE_URL}/de`,
    },
  },
  openGraph: {
    title: "Cervantes Bienes Raíces - недвижимость в Мексике",
    description:
      "Покупка, продажа и аренда премиальной недвижимости с экспертным сопровождением в Мехико.",
    url: `${BASE_URL}/ru`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cervantes Bienes Raíces - недвижимость в Мексике",
    description:
      "Дома, квартиры, ранчо и консультации для покупателей и арендаторов в Мексике.",
    images: ["/images/assets/ogg.png"],
  },
};

const index = () => {
  return (
    <Wrapper>
      <HomeEightRu />
    </Wrapper>
  );
};

export default index;
