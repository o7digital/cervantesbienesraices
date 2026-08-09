export const SITE_URL = "https://www.cervantesbienesraices.com";

type SeoEntry = {
  title: string;
  description: string;
  canonical: string;
  lang: string;
  image?: string;
  alternates?: Record<string, string>;
};

type MetadataLike = {
  title?: string | { default?: string; absolute?: string } | null;
  description?: string | null;
  alternates?: {
    canonical?: string | URL | null;
    languages?: Record<string, string | URL> | null;
  } | null;
  openGraph?: {
    images?: string | URL | Array<string | URL | { url?: string | URL }> | null;
  } | null;
  twitter?: {
    images?: string | URL | Array<string | URL | { url?: string | URL }> | null;
  } | null;
};

const homeAlternates = {
  "es-MX": SITE_URL,
  "en-US": `${SITE_URL}/en`,
  "fr-FR": `${SITE_URL}/fr`,
  "it-IT": `${SITE_URL}/it`,
  "de-DE": `${SITE_URL}/de`,
  "ru-RU": `${SITE_URL}/ru`,
  "x-default": SITE_URL,
};

export const seoByPath: Record<string, SeoEntry> = {
  "/": {
    title:
      "Cervantes Bienes Raíces - Venta y Renta de Casas y Departamentos en México",
    description:
      "Cervantes Bienes Raíces - Asesoría inmobiliaria profesional con más de 20 años de experiencia en CDMX, Polanco, Condesa y toda el área metropolitana.",
    canonical: SITE_URL,
    lang: "es",
    alternates: homeAlternates,
  },
  "/en": {
    title: "Cervantes Real Estate - Homes and Apartments in Mexico",
    description:
      "Find homes for sale, rental apartments and professional real-estate advisory in Mexico City with more than 20 years of experience.",
    canonical: `${SITE_URL}/en`,
    lang: "en",
    alternates: homeAlternates,
  },
  "/fr": {
    title: "Cervantes Bienes Raíces - Vente et Location au Mexique",
    description:
      "Maisons a vendre, appartements a louer et conseil immobilier professionnel a Mexico avec plus de 20 ans d'experience.",
    canonical: `${SITE_URL}/fr`,
    lang: "fr",
    alternates: homeAlternates,
  },
  "/it": {
    title: "Cervantes Real Estate - Case e Appartamenti in Messico",
    description:
      "Case in vendita, appartamenti in affitto e consulenza immobiliare professionale a Citta del Messico con oltre 20 anni di esperienza.",
    canonical: `${SITE_URL}/it`,
    lang: "it",
    alternates: homeAlternates,
  },
  "/de": {
    title: "Cervantes Real Estate - Immobilien in Mexiko",
    description:
      "Hauser zum Kauf, Wohnungen zur Miete und professionelle Immobilienberatung in Mexiko-Stadt mit uber 20 Jahren Erfahrung.",
    canonical: `${SITE_URL}/de`,
    lang: "de",
    alternates: homeAlternates,
  },
  "/ru": {
    title: "Cervantes Bienes Raíces - недвижимость в Мексике",
    description:
      "Недвижимость в Мексике, продажа и аренда домов и квартир, сопровождение сделок в Мехико.",
    canonical: `${SITE_URL}/ru`,
    lang: "ru",
    alternates: homeAlternates,
  },
  "/polanco": {
    title: "Casas y Departamentos en Venta y Renta en Polanco CDMX",
    description:
      "Encuentra casas, departamentos y penthouses en Polanco CDMX con asesoría inmobiliaria profesional y más de 20 años de experiencia.",
    canonical: `${SITE_URL}/polanco`,
    lang: "es",
  },
  "/condesa": {
    title: "Departamentos y Casas en Renta y Venta en Condesa CDMX",
    description:
      "Departamentos, casas y lofts en Condesa CDMX. Asesoría inmobiliaria profesional para comprar, vender o rentar en la zona.",
    canonical: `${SITE_URL}/condesa`,
    lang: "es",
  },
  "/roma-norte": {
    title: "Departamentos y Casas en Renta y Venta en Roma Norte CDMX",
    description:
      "Departamentos, lofts y casas en Roma Norte CDMX con asesoría inmobiliaria profesional para compra, venta y renta.",
    canonical: `${SITE_URL}/roma-norte`,
    lang: "es",
  },
  "/listing_06": {
    title: "Propiedades en Venta y Renta - Casas y Departamentos",
    description:
      "Explora propiedades disponibles: casas en venta, departamentos en renta y oportunidades inmobiliarias en CDMX, Polanco, Condesa y México.",
    canonical: `${SITE_URL}/listing_06`,
    lang: "es",
  },
  "/servicios": {
    title: "Servicios Inmobiliarios Profesionales",
    description:
      "Servicios inmobiliarios para compra, venta, valuación, estrategia patrimonial y acompañamiento legal en CDMX.",
    canonical: `${SITE_URL}/servicios`,
    lang: "es",
  },
  "/consultoria": {
    title: "Consultoría Inmobiliaria Estratégica",
    description:
      "Consultoría inmobiliaria para inversión, valuación, venta y compra de propiedades en CDMX y México.",
    canonical: `${SITE_URL}/consultoria`,
    lang: "es",
  },
  "/quienes-somos": {
    title: "Quiénes Somos",
    description:
      "Conoce a Cervantes Bienes Raíces, equipo con más de 20 años de experiencia en asesoría inmobiliaria en México.",
    canonical: `${SITE_URL}/quienes-somos`,
    lang: "es",
  },
  "/contact": {
    title: "Contacto",
    description:
      "Contacta a Cervantes Bienes Raíces para comprar, vender, rentar o valuar una propiedad en México.",
    canonical: `${SITE_URL}/contact`,
    lang: "es",
  },
  "/anuncios-destacados": {
    title: "Nuestras Propiedades",
    description:
      "Propiedades destacadas en venta y renta seleccionadas por Cervantes Bienes Raíces.",
    canonical: `${SITE_URL}/anuncios-destacados`,
    lang: "es",
  },
  "/blog": {
    title: "Noticias Inmobiliarias",
    description:
      "Guías, noticias y análisis del mercado inmobiliario en México por Cervantes Bienes Raíces.",
    canonical: `${SITE_URL}/blog`,
    lang: "es",
  },
  "/aviso-privacidad": {
    title: "Aviso de Privacidad",
    description:
      "Aviso de privacidad de Cervantes Bienes Raíces sobre tratamiento de datos personales y derechos ARCO.",
    canonical: `${SITE_URL}/aviso-privacidad`,
    lang: "es",
  },
  "/en/listing_06": {
    title: "Properties for Sale and Rent in Mexico",
    description:
      "Browse homes, apartments and selected real-estate opportunities in Mexico City and Mexico.",
    canonical: `${SITE_URL}/en/listing_06`,
    lang: "en",
  },
  "/en/services": {
    title: "Professional Real-Estate Services",
    description:
      "Expert advisory to buy, sell, value and invest in real estate in Mexico City.",
    canonical: `${SITE_URL}/en/services`,
    lang: "en",
  },
  "/en/privacy-policy": {
    title: "Privacy Policy",
    description:
      "Privacy policy for Cervantes Real Estate and personal data processing.",
    canonical: `${SITE_URL}/en/privacy-policy`,
    lang: "en",
  },
  "/fr/listing_06": {
    title: "Proprietes a Vendre et a Louer au Mexique",
    description:
      "Découvrez des maisons, appartements et opportunités immobilieres a Mexico et au Mexique.",
    canonical: `${SITE_URL}/fr/listing_06`,
    lang: "fr",
  },
  "/fr/services": {
    title: "Services Immobiliers Professionnels",
    description:
      "Accompagnement expert pour acheter, vendre, valoriser et investir dans l'immobilier a Mexico.",
    canonical: `${SITE_URL}/fr/services`,
    lang: "fr",
  },
  "/fr/politique-confidentialite": {
    title: "Politique de Confidentialite",
    description:
      "Politique de confidentialite de Cervantes Bienes Raíces et traitement des donnees personnelles.",
    canonical: `${SITE_URL}/fr/politique-confidentialite`,
    lang: "fr",
  },
  "/it/listing_06": {
    title: "Proprieta in Vendita e Affitto in Messico",
    description:
      "Scopri case, appartamenti e opportunita immobiliari a Citta del Messico e in Messico.",
    canonical: `${SITE_URL}/it/listing_06`,
    lang: "it",
  },
  "/it/services": {
    title: "Servizi Immobiliari Professionali",
    description:
      "Consulenza esperta per comprare, vendere, valutare e investire nel mercato immobiliare di Citta del Messico.",
    canonical: `${SITE_URL}/it/services`,
    lang: "it",
  },
  "/it/politica-privacy": {
    title: "Politica Privacy",
    description:
      "Politica privacy di Cervantes Real Estate e trattamento dei dati personali.",
    canonical: `${SITE_URL}/it/politica-privacy`,
    lang: "it",
  },
  "/de/listing_06": {
    title: "Immobilien zum Kauf und zur Miete in Mexiko",
    description:
      "Entdecken Sie Hauser, Wohnungen und Immobilienangebote in Mexiko-Stadt und Mexiko.",
    canonical: `${SITE_URL}/de/listing_06`,
    lang: "de",
  },
  "/de/services": {
    title: "Professionelle Immobilienleistungen",
    description:
      "Professionelle Beratung fur Kauf, Verkauf, Bewertung und Investment in Mexiko-Stadt.",
    canonical: `${SITE_URL}/de/services`,
    lang: "de",
  },
  "/de/datenschutz": {
    title: "Datenschutz",
    description:
      "Datenschutzhinweise von Cervantes Real Estate zur Verarbeitung personenbezogener Daten.",
    canonical: `${SITE_URL}/de/datenschutz`,
    lang: "de",
  },
  "/ru/listing_06": {
    title: "Недвижимость на продажу и в аренду в Мексике",
    description:
      "Дома, квартиры и объекты недвижимости в Мехико и Мексике.",
    canonical: `${SITE_URL}/ru/listing_06`,
    lang: "ru",
  },
  "/ru/services": {
    title: "Профессиональные услуги недвижимости",
    description:
      "Сопровождение покупки, продажи, оценки и инвестиций в недвижимость в Мехико.",
    canonical: `${SITE_URL}/ru/services`,
    lang: "ru",
  },
  "/ru/politika-konfidencialnosti": {
    title: "Политика конфиденциальности",
    description:
      "Информация о защите персональных данных в Cervantes Bienes Raíces.",
    canonical: `${SITE_URL}/ru/politika-konfidencialnosti`,
    lang: "ru",
  },
};

export function getSeo(path: string): SeoEntry {
  return seoByPath[path] ?? seoByPath["/"];
}

function titleToString(title: MetadataLike["title"], fallback: string): string {
  if (typeof title === "string") return title;
  return title?.absolute ?? title?.default ?? fallback;
}

function imageToString(images: unknown): string | undefined {
  const image = Array.isArray(images) ? images[0] : images;
  if (!image) return undefined;
  if (typeof image === "string") return image;
  if (image instanceof URL) return image.toString();
  if (typeof image !== "object") return undefined;
  if (!("url" in image)) return undefined;
  if (typeof image.url === "string") return image.url;
  if (image.url instanceof URL) return image.url.toString();
  return undefined;
}

export function metadataToSeo(
  metadata: MetadataLike,
  fallback: SeoEntry
): SeoEntry {
  const canonical = metadata.alternates?.canonical?.toString() ?? fallback.canonical;
  const alternates = metadata.alternates?.languages
    ? Object.fromEntries(
        Object.entries(metadata.alternates.languages).map(([lang, href]) => [
          lang,
          href.toString(),
        ])
      )
    : fallback.alternates;

  return {
    ...fallback,
    title: titleToString(metadata.title, fallback.title),
    description: metadata.description ?? fallback.description,
    canonical,
    alternates,
    image:
      imageToString(metadata.openGraph?.images) ??
      imageToString(metadata.twitter?.images) ??
      fallback.image,
  };
}
