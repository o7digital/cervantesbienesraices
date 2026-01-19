import { BlogPost } from "@/types/blog";

const mockBlogPosts: BlogPost[] = [
  {
    id: "mercado-cdmx-2024",
    slug: "mercado-inmobiliario-cdmx-2024",
    title: "Cómo se mueve el mercado inmobiliario en CDMX en 2024",
    excerpt:
      "Rentabilidades, colonias con mayor demanda y qué tan rápido se venden los departamentos en la ciudad.",
    coverImage: "/assets/images/blog/blog_img_05.jpg",
    category: "mercado",
    date: "2024-04-10",
    readTimeMinutes: 4,
    author: "Equipo Cervantes",
    tags: ["CDMX", "tendencias", "plusvalía"],
    content: [
      "Los corredores Reforma, Polanco y Roma-Condesa mantienen la mayor absorción de inventario, con tickets que siguen ajustándose a la baja frente a 2023.",
      "Vemos departamentos de 2 recámaras con rotación más rápida, mientras que las unidades de lujo requieren marketing especializado y planes de pago creativos.",
      "Si tienes dudas sobre tu zona, escríbenos y te compartimos comparables reales del último trimestre."
    ]
  },
  {
    id: "credito-hipotecario-2024",
    slug: "como-elegir-credito-hipotecario-2024",
    title: "Qué crédito hipotecario conviene en 2024",
    excerpt:
      "Tasas, enganche recomendado y cómo negociar con el banco para que tu mensualidad no se dispare.",
    coverImage: "/assets/images/blog/blog_img_02.jpg",
    category: "finanzas",
    date: "2024-03-18",
    readTimeMinutes: 6,
    author: "Equipo Cervantes",
    tags: ["hipoteca", "financiamiento"],
    content: [
      "Las instituciones están priorizando historiales sólidos y relación ingreso-deuda menor a 35%. Lleva estados de cuenta limpios y evita nuevas tarjetas antes de aplicar.",
      "Comparar CAT en vez de solo la tasa es clave. Considera seguros y comisiones; en algunos casos un coacreditado reduce el costo total.",
      "Si prefieres renta con opción a compra, podemos armar un esquema escalonado que alimente tu enganche."
    ]
  },
  {
    id: "checklist-airbnb",
    slug: "checklist-airbnb-cdmx",
    title: "Checklist legal antes de poner tu depa en Airbnb",
    excerpt:
      "Lo indispensable para operar sin multas: reglamento, uso de suelo y seguros que sí cubren alquiler temporal.",
    coverImage: "/assets/images/blog/blog_img_14.jpg",
    category: "inversion",
    date: "2024-02-22",
    readTimeMinutes: 5,
    author: "Equipo Cervantes",
    tags: ["renta", "cdmx", "legal"],
    content: [
      "Revisa el régimen de condominio: muchos estatutos prohíben alquileres menores a 30 días. Necesitas actas y aval del administrador.",
      "Confirma uso de suelo habitacional y declara ingresos ante SAT para evitar bloqueos en plataformas.",
      "Un seguro de responsabilidad civil con cobertura a terceros es tan importante como la póliza contra daños."
    ]
  },
  {
    id: "preventa-2024",
    slug: "guia-compra-preventa-cdmx",
    title: "Guía rápida para comprar en preventa sin sobresaltos",
    excerpt:
      "Qué revisar en el contrato, fechas de entrega realistas y cómo blindar tu inversión en obra.",
    coverImage: "/assets/images/blog/blog_img_12.jpg",
    category: "guia",
    date: "2024-01-30",
    readTimeMinutes: 5,
    author: "Equipo Cervantes",
    tags: ["preventa", "contrato"],
    content: [
      "Pide avance de obra certificado y un cronograma con penalizaciones claras por atraso.",
      "Verifica permisos (manifestación de construcción, uso de suelo) y solicita la fianza de cumplimiento.",
      "Elige esquemas con enganche distribuido; evita promesas sin números de cuenta o con descuentos a cambio de saltarte notaría."
    ]
  },
  {
    id: "home-staging-ventas",
    slug: "home-staging-para-vender-mas-rapido",
    title: "Home staging: vende 30% más rápido con ajustes simples",
    excerpt:
      "Pequeños cambios en iluminación, color y fotografías profesionales que aceleran la venta.",
    coverImage: "/assets/images/blog/blog_img_06.jpg",
    category: "ventas",
    date: "2024-03-05",
    readTimeMinutes: 3,
    author: "Equipo Cervantes",
    tags: ["venta", "marketing"],
    content: [
      "Un repintado neutro y luz cálida logran mejores recorridos virtuales que cualquier descuento.",
      "Fotografías profesionales y un plano esquemático generan más contactos calificados.",
      "Incluimos este servicio en nuestros listados exclusivos; pregunta por el plan que mejor encaja contigo."
    ]
  },
  {
    id: "impuestos-venta",
    slug: "impuestos-al-vender-propiedad",
    title: "Impuestos al vender tu propiedad en México",
    excerpt:
      "ISR, avalúos y documentación que debes preparar antes de firmar en la notaría.",
    coverImage: "/assets/images/blog/blog_img_15.jpg",
    category: "legal",
    date: "2024-02-01",
    readTimeMinutes: 6,
    author: "Equipo Cervantes",
    tags: ["legal", "ISR"],
    content: [
      "La exención de ISR aplica bajo condiciones de residencia y valor; prepara comprobantes y facturas de mejoras.",
      "Un avalúo vigente y el certificado de libertad de gravamen aceleran la operación.",
      "Coordinamos con notaría y contador para que tengas cálculos claros antes de firmar."
    ]
  }
];

export default mockBlogPosts;
