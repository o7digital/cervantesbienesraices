export const marketingNav = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export const marketAreas = [
  'Polanco',
  'Lomas de Chapultepec',
  'Condesa',
  'Roma',
  'Santa Fe',
  'CDMX y área metropolitana',
] as const;

export const homeSearchTags = [
  'Casas en venta',
  'Departamentos en renta',
  'Propiedades premium',
  'Inversión patrimonial',
] as const;

export const aboutParagraphs = [
  'En Cervantes Bienes Raíces somos una agencia inmobiliaria profesional especializada en bienes raíces de lujo en Ciudad de México. Trabajamos con propiedades exclusivas y de alto valor en las zonas más prestigiosas de la ciudad, incluyendo Polanco, Lomas de Chapultepec, Condesa, Roma y Santa Fe.',
  'Nuestro equipo de expertos inmobiliarios ofrece asesoría personalizada para compradores nacionales, expatriados y extranjeros interesados en adquirir propiedades premium en México, ya sea para vivir, invertir o diversificar patrimonio.',
  'Contamos con amplia experiencia en valuación inmobiliaria, análisis de mercado, negociación estratégica y acompañamiento legal, garantizando procesos de compra-venta transparentes, eficientes y seguros. Nuestro enfoque se basa en la discreción, la ética profesional y una filosofía de servicio centrada 100% en el cliente, donde cada recomendación se sustenta en datos reales del mercado inmobiliario premium de CDMX.',
  'En cada operación ofrecemos acompañamiento integral: desde la búsqueda de la propiedad ideal hasta la negociación, revisión de documentos, trámites legales y entrega final. Nuestro compromiso es brindar confianza, tranquilidad y resultados reales en cada transacción.',
] as const;

export const philosophyItems = [
  {
    title: 'Confianza',
    description:
      'Construimos relaciones duraderas basadas en transparencia, ética y confidencialidad.',
  },
  {
    title: 'Precisión',
    description:
      'Cada recomendación está respaldada por análisis reales del mercado premium y datos comparativos actualizados.',
  },
  {
    title: 'Excelencia',
    description:
      'Buscamos siempre la mejor oportunidad para nuestros clientes, ya sea en ubicación, valor, retorno o calidad de vida.',
  },
] as const;

export const services = [
  {
    title: 'Compra de Propiedades Premium',
    description:
      'Identificamos las mejores oportunidades en Polanco, Lomas de Chapultepec, Condesa, Roma y Santa Fe, considerando estilo de vida, presupuesto y objetivos de inversión, ya sea residencial o patrimonial.',
  },
  {
    title: 'Venta y Representación de Propietarios',
    description:
      'Realizamos una valuación profesional, posicionamos la propiedad en el mercado premium y la presentamos únicamente a compradores calificados nacionales y extranjeros, maximizando la velocidad y seguridad de venta.',
  },
  {
    title: 'Asesoría Legal y Documentación',
    description:
      'Acompañamos en todo el proceso jurídico: revisión de documentos, contratos, escrituras, impuestos y procesos notariales. Garantizamos certeza legal y absoluta transparencia en cada transacción.',
  },
  {
    title: 'Valuación y Análisis de Mercado',
    description:
      'Contamos con peritos valuadores registrados y análisis de mercado para determinar el valor real del inmueble, asegurando decisiones informadas que protegen el patrimonio de nuestros clientes.',
  },
  {
    title: 'Estrategia de Inversión y Patrimonio',
    description:
      'Diseñamos planes de inversión inmobiliaria de largo plazo, enfocados en crecimiento de capital, rendimiento proyectado y diversificación inteligente en el mercado inmobiliario premium de CDMX.',
  },
] as const;

export const differentiators = [
  {
    title: 'Operaciones seguras',
    description: 'Protegemos cada transacción con revisión documental, filtros y coordinación notarial.',
  },
  {
    title: 'Compradores calificados',
    description: 'Filtramos prospectos y cuidamos el tiempo de propietarios e inversionistas.',
  },
  {
    title: 'Proceso ágil',
    description: 'Aceleramos decisiones con comparables reales, seguimiento y estrategia comercial clara.',
  },
] as const;

export const founderStats = [
  { value: '300', label: 'Terrenos analizados' },
  { value: '0.2%', label: 'Pasaron la evaluación inicial' },
  { value: '15%', label: 'Aprobados por el comité' },
  { value: '5%', label: 'Adquiridos' },
] as const;

export const testimonials = [
  'Gracias a Cervantes Bienes Raíces pude vender mi casa que llevaba 2 años y no se vendía.',
  'Cuando contacté a Cervantes Bienes Raíces me enseñaron varios departamentos hasta que encontré el que más me gustaba.',
  'Javier Cervantes me acompañó en el proceso de venta de mi casa de principio a fin y coordinó todo con la notaría.',
  'Julio Cervantes me consiguió el depa donde vivo justo con las especificaciones que pedí, sin tantas vueltas ni visitas innecesarias.',
] as const;

export type MarketingPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTimeMinutes: number;
  author: string;
  coverImage: string;
  content: string[];
};

export const blogPosts: MarketingPost[] = [
  {
    slug: 'mercado-inmobiliario-cdmx-2024',
    title: 'Cómo se mueve el mercado inmobiliario en CDMX en 2024',
    excerpt:
      'Rentabilidades, colonias con mayor demanda y qué tan rápido se venden los departamentos en la ciudad.',
    date: '2024-04-10',
    readTimeMinutes: 4,
    author: 'Equipo Cervantes',
    coverImage: '/marketing/blog/blog-mercado.jpg',
    content: [
      'Los corredores Reforma, Polanco y Roma-Condesa mantienen la mayor absorción de inventario, con tickets que siguen ajustándose frente a 2023.',
      'Vemos departamentos de 2 recámaras con rotación más rápida, mientras que las unidades de lujo requieren marketing especializado y planes de pago creativos.',
      'Si tienes dudas sobre tu zona, podemos compartirte comparables reales del último trimestre para tomar decisiones con datos.',
    ],
  },
  {
    slug: 'como-elegir-credito-hipotecario-2024',
    title: 'Qué crédito hipotecario conviene en 2024',
    excerpt:
      'Tasas, enganche recomendado y cómo negociar con el banco para que tu mensualidad no se dispare.',
    date: '2024-03-18',
    readTimeMinutes: 6,
    author: 'Equipo Cervantes',
    coverImage: '/marketing/blog/blog-credito.jpg',
    content: [
      'Las instituciones están priorizando historiales sólidos y una relación ingreso-deuda menor a 35%. Llevar estados de cuenta limpios sigue siendo clave.',
      'Comparar CAT en vez de solo la tasa ayuda a ver el costo real. Seguros y comisiones cambian por completo la mensualidad final.',
      'También existen esquemas híbridos o renta con opción a compra que pueden ayudarte a construir enganche sin perder una buena oportunidad.',
    ],
  },
  {
    slug: 'checklist-airbnb-cdmx',
    title: 'Checklist legal antes de poner tu depa en Airbnb',
    excerpt:
      'Lo indispensable para operar sin multas: reglamento, uso de suelo y seguros que sí cubren alquiler temporal.',
    date: '2024-02-22',
    readTimeMinutes: 5,
    author: 'Equipo Cervantes',
    coverImage: '/marketing/blog/blog-airbnb.jpg',
    content: [
      'Revisa el régimen de condominio: muchos estatutos prohíben alquileres menores a 30 días y necesitan autorización expresa.',
      'Confirma uso de suelo habitacional y declara ingresos ante SAT para evitar bloqueos o contingencias posteriores.',
      'Un seguro de responsabilidad civil con cobertura a terceros es tan importante como la póliza contra daños materiales.',
    ],
  },
];

export const contactChannels = [
  {
    title: 'Correo directo',
    value: 'info@cervantesbienesraices.com',
    href: 'mailto:info@cervantesbienesraices.com',
    description: 'Comparte tu objetivo y te respondemos con el siguiente paso adecuado.',
  },
  {
    title: 'Instagram',
    value: '@cervantesbienesraices',
    href: 'https://www.instagram.com/cervantesbienesraices',
    description: 'Seguimiento de propiedades, zonas clave y novedades del mercado.',
  },
  {
    title: 'Facebook',
    value: 'Cervantes Bienes Raíces',
    href: 'https://www.facebook.com/cervantesbienesraices',
    description: 'Canal adicional para consultas y contenido inmobiliario.',
  },
] as const;

export const contactHighlights = [
  'Respuesta inicial en menos de 24 horas',
  'Atención a compradores, vendedores e inversionistas',
  'Cobertura enfocada en CDMX y corredor premium',
] as const;

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatMarketingDate(date: string) {
  return new Intl.DateTimeFormat('es-MX', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}
