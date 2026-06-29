export const marketingLocales = ['es', 'en', 'fr', 'it', 'de'] as const;
export const secondaryMarketingLocales = ['en', 'fr', 'it', 'de'] as const;

export type MarketingLocale = (typeof marketingLocales)[number];
export type MarketingPageKey = 'home' | 'about' | 'services' | 'contact' | 'blog' | 'blogPost';

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

type MarketingContent = {
  localeLabel: string;
  tagLine: string;
  nav: {
    home: string;
    about: string;
    services: string;
    blog: string;
    contact: string;
  };
  ctas: {
    contact: string;
    services: string;
    crmLogin: string;
    dashboard: string;
    readArticle: string;
    allArticles: string;
    writeNow: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    tags: string[];
    aboutCards: string[];
    coverageTitle: string;
    coverageBadge: string;
    quote: string;
    founderRole: string;
  };
  about: {
    title: string;
    intro: string;
    paragraphs: string[];
    missionTitle: string;
    mission: string;
    philosophyTitle: string;
    philosophyIntro: string;
    philosophyItems: Array<{ title: string; description: string }>;
  };
  services: {
    title: string;
    intro: string;
    items: Array<{ title: string; description: string }>;
    differentiatorsTitle: string;
    differentiators: Array<{ title: string; description: string }>;
  };
  contact: {
    title: string;
    intro: string;
    highlights: string[];
    channels: Array<{ title: string; value: string; href: string; description: string }>;
    coverageTitle: string;
    coverageIntro: string;
    form: {
      title: string;
      description: string;
      nameLabel: string;
      emailLabel: string;
      phoneLabel: string;
      objectiveLabel: string;
      messageLabel: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      placeholders: {
        name: string;
        email: string;
        phone: string;
        message: string;
      };
      objectives: string[];
    };
  };
  blog: {
    title: string;
    intro: string;
    posts: MarketingPost[];
  };
  footer: {
    title: string;
    description: string;
    navigation: string;
    contact: string;
  };
  stats: Array<{ value: string; label: string }>;
  areas: string[];
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    homeTitle: string;
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    contactTitle: string;
    contactDescription: string;
    blogTitle: string;
    blogDescription: string;
  };
};

const sharedStats = {
  es: [
    { value: '300', label: 'Terrenos analizados' },
    { value: '0.2%', label: 'Pasaron la evaluación inicial' },
    { value: '15%', label: 'Aprobados por el comité' },
    { value: '5%', label: 'Adquiridos' },
  ],
  en: [
    { value: '300', label: 'Land opportunities reviewed' },
    { value: '0.2%', label: 'Passed the initial review' },
    { value: '15%', label: 'Approved by committee' },
    { value: '5%', label: 'Acquired' },
  ],
  fr: [
    { value: '300', label: 'Terrains analysés' },
    { value: '0.2%', label: 'Ont passé l évaluation initiale' },
    { value: '15%', label: 'Approuvés par le comité' },
    { value: '5%', label: 'Acquis' },
  ],
  it: [
    { value: '300', label: 'Terreni analizzati' },
    { value: '0.2%', label: 'Passati alla prima valutazione' },
    { value: '15%', label: 'Approvati dal comitato' },
    { value: '5%', label: 'Acquisiti' },
  ],
  de: [
    { value: '300', label: 'Grundstücke analysiert' },
    { value: '0.2%', label: 'Haben die Erstbewertung bestanden' },
    { value: '15%', label: 'Vom Komitee freigegeben' },
    { value: '5%', label: 'Erworben' },
  ],
} satisfies Record<MarketingLocale, Array<{ value: string; label: string }>>;

const sharedAreas = {
  es: ['Polanco', 'Lomas de Chapultepec', 'Condesa', 'Roma', 'Santa Fe', 'CDMX y área metropolitana'],
  en: ['Polanco', 'Lomas de Chapultepec', 'Condesa', 'Roma', 'Santa Fe', 'Mexico City metro area'],
  fr: ['Polanco', 'Lomas de Chapultepec', 'Condesa', 'Roma', 'Santa Fe', 'Grand Mexico'],
  it: ['Polanco', 'Lomas de Chapultepec', 'Condesa', 'Roma', 'Santa Fe', 'Area metropolitana di Città del Messico'],
  de: ['Polanco', 'Lomas de Chapultepec', 'Condesa', 'Roma', 'Santa Fe', 'Großraum Mexiko-Stadt'],
} satisfies Record<MarketingLocale, string[]>;

const sharedChannels = {
  es: [
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
  ],
  en: [
    {
      title: 'Direct email',
      value: 'info@cervantesbienesraices.com',
      href: 'mailto:info@cervantesbienesraices.com',
      description: 'Share your objective and we will reply with the right next step.',
    },
    {
      title: 'Instagram',
      value: '@cervantesbienesraices',
      href: 'https://www.instagram.com/cervantesbienesraices',
      description: 'Property updates, target neighborhoods and market news.',
    },
    {
      title: 'Facebook',
      value: 'Cervantes Bienes Raíces',
      href: 'https://www.facebook.com/cervantesbienesraices',
      description: 'Another channel for inquiries and market content.',
    },
  ],
  fr: [
    {
      title: 'Email direct',
      value: 'info@cervantesbienesraices.com',
      href: 'mailto:info@cervantesbienesraices.com',
      description: 'Expliquez votre objectif et nous revenons avec la bonne prochaine étape.',
    },
    {
      title: 'Instagram',
      value: '@cervantesbienesraices',
      href: 'https://www.instagram.com/cervantesbienesraices',
      description: 'Biens, quartiers clés et évolution du marché.',
    },
    {
      title: 'Facebook',
      value: 'Cervantes Bienes Raíces',
      href: 'https://www.facebook.com/cervantesbienesraices',
      description: 'Canal complémentaire pour vos demandes et le contenu immobilier.',
    },
  ],
  it: [
    {
      title: 'Email diretto',
      value: 'info@cervantesbienesraices.com',
      href: 'mailto:info@cervantesbienesraices.com',
      description: 'Raccontaci il tuo obiettivo e ti rispondiamo con il passo successivo giusto.',
    },
    {
      title: 'Instagram',
      value: '@cervantesbienesraices',
      href: 'https://www.instagram.com/cervantesbienesraices',
      description: 'Aggiornamenti su proprietà, quartieri e mercato.',
    },
    {
      title: 'Facebook',
      value: 'Cervantes Bienes Raíces',
      href: 'https://www.facebook.com/cervantesbienesraices',
      description: 'Canale aggiuntivo per richieste e contenuti immobiliari.',
    },
  ],
  de: [
    {
      title: 'Direkte E-Mail',
      value: 'info@cervantesbienesraices.com',
      href: 'mailto:info@cervantesbienesraices.com',
      description: 'Teilen Sie Ihr Ziel mit und wir antworten mit dem passenden nächsten Schritt.',
    },
    {
      title: 'Instagram',
      value: '@cervantesbienesraices',
      href: 'https://www.instagram.com/cervantesbienesraices',
      description: 'Objekte, Zielviertel und Marktupdates.',
    },
    {
      title: 'Facebook',
      value: 'Cervantes Bienes Raíces',
      href: 'https://www.facebook.com/cervantesbienesraices',
      description: 'Weiterer Kanal für Anfragen und Inhalte.',
    },
  ],
} satisfies Record<MarketingLocale, Array<{ title: string; value: string; href: string; description: string }>>;

const content: Record<MarketingLocale, MarketingContent> = {
  es: {
    localeLabel: 'Español',
    tagLine: 'CDMX Premium Realty',
    nav: { home: 'Inicio', about: 'Quiénes Somos', services: 'Servicios', blog: 'Blog', contact: 'Contacto' },
    ctas: {
      contact: 'Solicitar asesoría',
      services: 'Ver servicios',
      crmLogin: 'Entrar al CRM',
      dashboard: 'Ir al dashboard',
      readArticle: 'Leer artículo',
      allArticles: 'Ver todos los artículos',
      writeNow: 'Escribir ahora',
    },
    hero: {
      eyebrow: '+20 años de experiencia',
      title: 'Casas en venta y departamentos en renta con estrategia, criterio y acompañamiento real.',
      description:
        'Asesoría inmobiliaria profesional en CDMX, Polanco, Condesa y toda el área metropolitana para compradores, vendedores e inversionistas que necesitan claridad y ejecución.',
      tags: ['Casas en venta', 'Departamentos en renta', 'Propiedades premium', 'Inversión patrimonial'],
      aboutCards: [
        'En Cervantes Bienes Raíces somos una agencia inmobiliaria profesional especializada en bienes raíces de lujo en Ciudad de México.',
        'Nuestro equipo ofrece asesoría personalizada para compradores nacionales, expatriados y extranjeros interesados en adquirir propiedades premium en México.',
      ],
      coverageTitle: 'Zonas premium de CDMX',
      coverageBadge: 'Mercado premium',
      quote: 'Seguimos un proceso para ofrecer a nuestros inversionistas las mejores oportunidades.',
      founderRole: 'Fundador y CEO',
    },
    about: {
      title: 'Asesoría inmobiliaria premium con visión de largo plazo.',
      intro: 'Una asesoría que combina mercado, criterio y ejecución.',
      paragraphs: [
        'En Cervantes Bienes Raíces somos una agencia inmobiliaria profesional especializada en bienes raíces de lujo en Ciudad de México. Trabajamos con propiedades exclusivas y de alto valor en las zonas más prestigiosas de la ciudad, incluyendo Polanco, Lomas de Chapultepec, Condesa, Roma y Santa Fe.',
        'Nuestro equipo de expertos inmobiliarios ofrece asesoría personalizada para compradores nacionales, expatriados y extranjeros interesados en adquirir propiedades premium en México, ya sea para vivir, invertir o diversificar patrimonio.',
        'Contamos con amplia experiencia en valuación inmobiliaria, análisis de mercado, negociación estratégica y acompañamiento legal, garantizando procesos de compra-venta transparentes, eficientes y seguros.',
        'En cada operación ofrecemos acompañamiento integral: desde la búsqueda de la propiedad ideal hasta la negociación, revisión de documentos, trámites legales y entrega final.',
      ],
      missionTitle: 'Misión',
      mission:
        'Actuar como socios estratégicos de nuestros clientes, guiándolos con rigor profesional en cada decisión inmobiliaria.',
      philosophyTitle: 'Nuestra filosofía',
      philosophyIntro: 'Cada propiedad es patrimonio, proyecto de vida y decisión estratégica.',
      philosophyItems: [
        { title: 'Confianza', description: 'Relaciones duraderas basadas en transparencia, ética y confidencialidad.' },
        { title: 'Precisión', description: 'Recomendaciones respaldadas por análisis reales del mercado premium.' },
        { title: 'Excelencia', description: 'Búsqueda constante de la mejor oportunidad en ubicación, valor y retorno.' },
      ],
    },
    services: {
      title: 'Comprar, vender e invertir con una estructura de trabajo clara.',
      intro:
        'Cada operación se construye sobre valuación, posicionamiento, negociación y certeza legal. No vendemos visitas; diseñamos estrategia.',
      items: [
        {
          title: 'Compra de Propiedades Premium',
          description:
            'Identificamos oportunidades en Polanco, Lomas de Chapultepec, Condesa, Roma y Santa Fe según estilo de vida, presupuesto y objetivos de inversión.',
        },
        {
          title: 'Venta y Representación de Propietarios',
          description:
            'Realizamos valuación profesional, posicionamiento comercial y presentación a compradores calificados nacionales y extranjeros.',
        },
        {
          title: 'Asesoría Legal y Documentación',
          description:
            'Acompañamos en contratos, escrituras, impuestos, revisión documental y coordinación notarial.',
        },
        {
          title: 'Valuación y Análisis de Mercado',
          description:
            'Trabajamos con peritos valuadores y análisis comparativos para defender decisiones informadas.',
        },
        {
          title: 'Estrategia de Inversión y Patrimonio',
          description:
            'Diseñamos planes de inversión inmobiliaria enfocados en crecimiento de capital, rendimiento y diversificación.',
        },
      ],
      differentiatorsTitle: 'Procesos diseñados para reducir riesgo y tiempo perdido.',
      differentiators: [
        { title: 'Operaciones seguras', description: 'Revisión documental, filtros y coordinación notarial.' },
        { title: 'Compradores calificados', description: 'Filtramos prospectos y protegemos el tiempo del propietario.' },
        { title: 'Proceso ágil', description: 'Comparables reales, seguimiento y estrategia comercial clara.' },
      ],
    },
    contact: {
      title: 'Cuéntanos tu objetivo y armamos el siguiente paso.',
      intro:
        'Ya sea compra, venta, valuación, análisis de mercado o estrategia patrimonial, te respondemos con una ruta concreta y sin rodeos.',
      highlights: [
        'Respuesta inicial en menos de 24 horas',
        'Atención a compradores, vendedores e inversionistas',
        'Cobertura enfocada en CDMX y corredor premium',
      ],
      channels: sharedChannels.es,
      coverageTitle: 'Trabajamos en las zonas más relevantes del corredor premium.',
      coverageIntro: 'Comparte tu caso y te orientamos según zona, ticket y urgencia.',
      form: {
        title: 'Formulario de contacto',
        description: 'Tu mensaje se envía al backend y queda registrado como lead de contacto.',
        nameLabel: 'Nombre',
        emailLabel: 'Email',
        phoneLabel: 'Teléfono',
        objectiveLabel: 'Objetivo',
        messageLabel: 'Mensaje',
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        success: 'Gracias. Tu solicitud quedó registrada y te contactaremos pronto.',
        error: 'No se pudo enviar el formulario. Intenta de nuevo.',
        placeholders: {
          name: 'Tu nombre',
          email: 'tu@email.com',
          phone: '+52...',
          message: 'Cuéntanos si estás comprando, vendiendo o invirtiendo.',
        },
        objectives: ['Comprar propiedad', 'Vender propiedad', 'Rentar propiedad', 'Invertir', 'Valuación', 'Otro'],
      },
    },
    blog: {
      title: 'Novedades inmobiliarias para decidir con datos y contexto.',
      intro: 'Tendencias de mercado, guías prácticas y puntos legales para comprar, vender o rentar con más tranquilidad.',
      posts: [
        {
          slug: 'mercado-inmobiliario-cdmx-2024',
          title: 'Cómo se mueve el mercado inmobiliario en CDMX en 2024',
          excerpt: 'Rentabilidades, colonias con mayor demanda y qué tan rápido se venden los departamentos en la ciudad.',
          date: '2024-04-10',
          readTimeMinutes: 4,
          author: 'Equipo Cervantes',
          coverImage: '/marketing/blog/blog-mercado.jpg',
          content: [
            'Los corredores Reforma, Polanco y Roma-Condesa mantienen una alta absorción de inventario, con compradores más analíticos y menos tolerancia a precios fuera de mercado.',
            'Los departamentos bien presentados y correctamente valuados se mueven con mayor velocidad; las propiedades premium necesitan narrativa comercial y negociación más fina.',
            'La lectura correcta del micro-mercado sigue siendo la diferencia entre publicar mucho tiempo o cerrar una operación.',
          ],
        },
        {
          slug: 'como-elegir-credito-hipotecario-2024',
          title: 'Qué crédito hipotecario conviene en 2024',
          excerpt: 'Tasas, enganche recomendado y cómo negociar con el banco para que tu mensualidad no se dispare.',
          date: '2024-03-18',
          readTimeMinutes: 6,
          author: 'Equipo Cervantes',
          coverImage: '/marketing/blog/blog-credito.jpg',
          content: [
            'Comparar CAT y costo total sigue siendo más útil que mirar solo la tasa anunciada por el banco.',
            'Un perfil financiero ordenado y una relación ingreso-deuda sana mejoran mucho la negociación.',
            'Antes de apartar una propiedad conviene saber con claridad cuál es el rango de mensualidad sostenible.',
          ],
        },
        {
          slug: 'checklist-airbnb-cdmx',
          title: 'Checklist legal antes de poner tu depa en Airbnb',
          excerpt: 'Lo indispensable para operar sin multas: reglamento, uso de suelo y seguros que sí cubren alquiler temporal.',
          date: '2024-02-22',
          readTimeMinutes: 5,
          author: 'Equipo Cervantes',
          coverImage: '/marketing/blog/blog-airbnb.jpg',
          content: [
            'El reglamento de condominio y las restricciones internas son el primer filtro antes de montar un esquema de renta corta.',
            'También es clave revisar obligaciones fiscales, pólizas vigentes y cobertura de responsabilidad civil.',
            'Una operación rentable en papel puede volverse inviable si no se valida el marco legal desde el inicio.',
          ],
        },
      ],
    },
    footer: {
      title: 'Asesoría inmobiliaria premium para comprar, vender e invertir con criterio.',
      description:
        'Más de 20 años acompañando operaciones en CDMX con análisis de mercado, estrategia comercial y acompañamiento legal de principio a fin.',
      navigation: 'Navegación',
      contact: 'Contacto',
    },
    stats: sharedStats.es,
    areas: sharedAreas.es,
    seo: {
      defaultTitle: 'Cervantes Bienes Raíces',
      defaultDescription: 'Asesoría inmobiliaria premium y CRM operativo para Cervantes Bienes Raíces.',
      homeTitle: 'Casas en venta y departamentos en renta en México',
      homeDescription:
        'Cervantes Bienes Raíces ofrece asesoría inmobiliaria premium para comprar, vender e invertir en CDMX con más de 20 años de experiencia.',
      aboutTitle: 'Quiénes Somos',
      aboutDescription: 'Conoce la filosofía y el enfoque de Cervantes Bienes Raíces para operaciones premium en CDMX.',
      servicesTitle: 'Servicios',
      servicesDescription: 'Servicios inmobiliarios premium para compra, venta, valuación y estrategia patrimonial en CDMX.',
      contactTitle: 'Contacto',
      contactDescription: 'Escríbenos para comprar, vender o invertir en propiedades premium en CDMX.',
      blogTitle: 'Blog',
      blogDescription: 'Tendencias de mercado, crédito hipotecario y guías inmobiliarias de Cervantes Bienes Raíces.',
    },
  },
  en: {
    localeLabel: 'English',
    tagLine: 'CDMX Premium Realty',
    nav: { home: 'Home', about: 'About', services: 'Services', blog: 'Blog', contact: 'Contact' },
    ctas: {
      contact: 'Request advisory',
      services: 'View services',
      crmLogin: 'Log in to CRM',
      dashboard: 'Open dashboard',
      readArticle: 'Read article',
      allArticles: 'View all articles',
      writeNow: 'Write now',
    },
    hero: {
      eyebrow: '20+ years of experience',
      title: 'Homes for sale and rentals with strategy, judgment and real execution.',
      description:
        'Professional real-estate advisory across Mexico City, Polanco, Condesa and the metro area for buyers, sellers and investors who need clarity and delivery.',
      tags: ['Homes for sale', 'Rental apartments', 'Premium properties', 'Wealth strategy'],
      aboutCards: [
        'Cervantes Bienes Raíces is a professional agency focused on premium real estate in Mexico City.',
        'We advise local and international buyers looking for homes, investment assets and long-term positioning.',
      ],
      coverageTitle: 'Premium neighborhoods in Mexico City',
      coverageBadge: 'Prime market',
      quote: 'We follow a process to bring our investors the best opportunities.',
      founderRole: 'Founder and CEO',
    },
    about: {
      title: 'Premium real-estate advisory with a long-term view.',
      intro: 'Market knowledge, judgment and execution in one advisory process.',
      paragraphs: [
        'Cervantes Bienes Raíces is a professional agency specialized in premium real estate in Mexico City, with active focus on Polanco, Lomas de Chapultepec, Condesa, Roma and Santa Fe.',
        'We advise local buyers, expatriates and international clients looking to live, invest or diversify their wealth in Mexico.',
        'Our work combines valuation, market analysis, negotiation and legal coordination so that each transaction moves with clarity and control.',
        'From search to closing, we stay involved in the practical details that protect time, money and certainty.',
      ],
      missionTitle: 'Mission',
      mission: 'Act as a strategic partner in every real-estate decision with rigor, transparency and follow-through.',
      philosophyTitle: 'Our philosophy',
      philosophyIntro: 'Every property is both a life decision and a strategic asset.',
      philosophyItems: [
        { title: 'Trust', description: 'Long-term relationships built on transparency, ethics and confidentiality.' },
        { title: 'Precision', description: 'Advice grounded in real premium-market data and comparables.' },
        { title: 'Excellence', description: 'Constant focus on the best outcome in location, value and return.' },
      ],
    },
    services: {
      title: 'Buy, sell and invest with a structured process.',
      intro: 'Every transaction is built on valuation, positioning, negotiation and legal certainty.',
      items: [
        {
          title: 'Premium Property Acquisition',
          description:
            'We identify the right opportunities in Polanco, Lomas, Condesa, Roma and Santa Fe based on lifestyle, budget and investment objectives.',
        },
        {
          title: 'Seller Representation',
          description:
            'We handle valuation, market positioning and presentation to qualified national and international buyers.',
        },
        {
          title: 'Legal and Documentation Advisory',
          description:
            'Contracts, deeds, taxes, document review and notary coordination from start to finish.',
        },
        {
          title: 'Valuation and Market Analysis',
          description:
            'Comparables and valuation input that support informed decisions and better negotiation.',
        },
        {
          title: 'Investment and Wealth Strategy',
          description:
            'Long-term real-estate plans focused on capital growth, yield and smart diversification.',
        },
      ],
      differentiatorsTitle: 'Processes designed to reduce risk and wasted time.',
      differentiators: [
        { title: 'Safer transactions', description: 'Document review, filtering and notary coordination.' },
        { title: 'Qualified buyers', description: 'We filter prospects and protect the seller s time.' },
        { title: 'Faster execution', description: 'Real comparables, follow-up and a clear commercial strategy.' },
      ],
    },
    contact: {
      title: 'Tell us your goal and we will define the next step.',
      intro: 'Buying, selling, valuation, market analysis or investment strategy: we reply with a concrete path forward.',
      highlights: [
        'Initial response in under 24 hours',
        'Support for buyers, sellers and investors',
        'Coverage focused on prime Mexico City corridors',
      ],
      channels: sharedChannels.en,
      coverageTitle: 'We work in the most relevant premium corridors.',
      coverageIntro: 'Share your case and we will orient you based on area, ticket size and timing.',
      form: {
        title: 'Contact form',
        description: 'Your message is sent to the backend and stored as a contact lead.',
        nameLabel: 'Name',
        emailLabel: 'Email',
        phoneLabel: 'Phone',
        objectiveLabel: 'Objective',
        messageLabel: 'Message',
        submit: 'Send message',
        sending: 'Sending...',
        success: 'Thank you. Your request has been recorded and we will contact you soon.',
        error: 'The form could not be sent. Please try again.',
        placeholders: {
          name: 'Your name',
          email: 'you@email.com',
          phone: '+52...',
          message: 'Tell us whether you are buying, selling or investing.',
        },
        objectives: ['Buy property', 'Sell property', 'Rent property', 'Invest', 'Valuation', 'Other'],
      },
    },
    blog: {
      title: 'Real-estate updates for decisions grounded in context.',
      intro: 'Market trends, practical guides and legal checkpoints for buying, selling or renting with more certainty.',
      posts: [
        {
          slug: 'mercado-inmobiliario-cdmx-2024',
          title: 'How the Mexico City real-estate market is moving in 2024',
          excerpt: 'Yield, high-demand neighborhoods and how quickly apartments are closing in the city.',
          date: '2024-04-10',
          readTimeMinutes: 4,
          author: 'Cervantes Team',
          coverImage: '/marketing/blog/blog-mercado.jpg',
          content: [
            'Reforma, Polanco and Roma-Condesa still show strong inventory absorption, but buyers are far more disciplined on pricing.',
            'Well-presented apartments priced correctly move faster; luxury product needs stronger positioning and sharper negotiation.',
            'Reading the right micro-market remains the difference between listing for months and closing with control.',
          ],
        },
        {
          slug: 'como-elegir-credito-hipotecario-2024',
          title: 'Which mortgage structure makes sense in 2024',
          excerpt: 'Rates, down payment discipline and how to negotiate with the bank before the monthly payment gets out of range.',
          date: '2024-03-18',
          readTimeMinutes: 6,
          author: 'Cervantes Team',
          coverImage: '/marketing/blog/blog-credito.jpg',
          content: [
            'Looking at total cost and CAT remains more useful than focusing only on the headline rate.',
            'A cleaner financial profile and better debt-to-income ratio improve the financing conversation materially.',
            'Before reserving a property, it is worth defining the payment range that is actually sustainable.',
          ],
        },
        {
          slug: 'checklist-airbnb-cdmx',
          title: 'Legal checklist before listing your apartment on Airbnb',
          excerpt: 'Condominium rules, zoning and insurance details that matter before short-term rental operations.',
          date: '2024-02-22',
          readTimeMinutes: 5,
          author: 'Cervantes Team',
          coverImage: '/marketing/blog/blog-airbnb.jpg',
          content: [
            'Condominium bylaws and internal restrictions are the first filter before setting up a short-stay model.',
            'Tax obligations, active coverage and liability insurance also need to be reviewed from the start.',
            'A deal that looks profitable on paper can become fragile if the legal framework is not cleared early.',
          ],
        },
      ],
    },
    footer: {
      title: 'Premium real-estate advisory for buying, selling and investing with judgment.',
      description: 'More than 20 years supporting Mexico City transactions with market analysis, commercial strategy and legal coordination.',
      navigation: 'Navigation',
      contact: 'Contact',
    },
    stats: sharedStats.en,
    areas: sharedAreas.en,
    seo: {
      defaultTitle: 'Cervantes Real Estate',
      defaultDescription: 'Premium real-estate advisory and CRM operations for Cervantes Bienes Raíces.',
      homeTitle: 'Homes for sale and rentals in Mexico City',
      homeDescription: 'Premium real-estate advisory to buy, sell and invest in Mexico City.',
      aboutTitle: 'About',
      aboutDescription: 'Get to know the advisory approach behind Cervantes Real Estate.',
      servicesTitle: 'Services',
      servicesDescription: 'Premium real-estate services for acquisitions, sales, valuation and wealth strategy.',
      contactTitle: 'Contact',
      contactDescription: 'Get in touch to buy, sell or invest in premium property in Mexico City.',
      blogTitle: 'Blog',
      blogDescription: 'Market trends, mortgage context and real-estate guides from the Cervantes team.',
    },
  },
  fr: {
    localeLabel: 'Français',
    tagLine: 'Immobilier premium CDMX',
    nav: { home: 'Accueil', about: 'À propos', services: 'Services', blog: 'Blog', contact: 'Contact' },
    ctas: {
      contact: 'Demander un conseil',
      services: 'Voir les services',
      crmLogin: 'Entrer dans le CRM',
      dashboard: 'Ouvrir le dashboard',
      readArticle: 'Lire l article',
      allArticles: 'Voir tous les articles',
      writeNow: 'Écrire maintenant',
    },
    hero: {
      eyebrow: '20+ ans d expérience',
      title: 'Maisons à vendre et locations avec méthode, jugement et exécution réelle.',
      description:
        'Conseil immobilier premium à Mexico pour acheteurs, vendeurs et investisseurs qui ont besoin de clarté et de suivi.',
      tags: ['Maisons à vendre', 'Appartements à louer', 'Biens premium', 'Stratégie patrimoniale'],
      aboutCards: [
        'Cervantes Bienes Raíces est une agence spécialisée dans l immobilier premium à Mexico.',
        'Nous accompagnons clients locaux et internationaux pour résidence, investissement et diversification patrimoniale.',
      ],
      coverageTitle: 'Quartiers premium de Mexico',
      coverageBadge: 'Marché premium',
      quote: 'Nous suivons un processus pour offrir les meilleures opportunités à nos investisseurs.',
      founderRole: 'Fondateur et CEO',
    },
    about: {
      title: 'Conseil immobilier premium avec vision de long terme.',
      intro: 'Marché, jugement et exécution dans un seul processus de conseil.',
      paragraphs: [
        'Nous travaillons sur les zones premium de Mexico comme Polanco, Lomas de Chapultepec, Condesa, Roma et Santa Fe.',
        'Nous accompagnons acheteurs locaux, expatriés et investisseurs internationaux.',
        'Notre travail combine valorisation, analyse de marché, négociation et coordination juridique.',
        'De la recherche à la signature, nous restons présents sur les détails qui protègent temps, budget et sécurité.',
      ],
      missionTitle: 'Mission',
      mission: 'Agir comme partenaire stratégique dans chaque décision immobilière avec rigueur, transparence et suivi.',
      philosophyTitle: 'Notre philosophie',
      philosophyIntro: 'Chaque bien est à la fois projet de vie et actif stratégique.',
      philosophyItems: [
        { title: 'Confiance', description: 'Relations durables fondées sur transparence, éthique et confidentialité.' },
        { title: 'Précision', description: 'Conseils appuyés sur données de marché et comparables réels.' },
        { title: 'Excellence', description: 'Recherche de la meilleure issue en emplacement, valeur et rendement.' },
      ],
    },
    services: {
      title: 'Acheter, vendre et investir avec un processus structuré.',
      intro: 'Chaque opération repose sur valorisation, positionnement, négociation et sécurité juridique.',
      items: [
        { title: 'Acquisition de biens premium', description: 'Identification des meilleures opportunités selon style de vie, budget et objectif patrimonial.' },
        { title: 'Représentation vendeur', description: 'Évaluation, mise en marché et présentation à des acheteurs qualifiés.' },
        { title: 'Conseil juridique et documentation', description: 'Contrats, actes, fiscalité, revue documentaire et coordination notariale.' },
        { title: 'Valorisation et analyse de marché', description: 'Comparables et lecture de marché pour soutenir les bonnes décisions.' },
        { title: 'Stratégie d investissement', description: 'Plans immobiliers de long terme orientés croissance de capital et diversification.' },
      ],
      differentiatorsTitle: 'Des processus pensés pour réduire le risque et le temps perdu.',
      differentiators: [
        { title: 'Opérations plus sûres', description: 'Revue documentaire, filtrage et coordination notariale.' },
        { title: 'Acheteurs qualifiés', description: 'Nous filtrons les prospects et protégeons le temps du propriétaire.' },
        { title: 'Exécution plus rapide', description: 'Comparables réels, suivi et stratégie commerciale claire.' },
      ],
    },
    contact: {
      title: 'Expliquez votre objectif et nous cadrons la prochaine étape.',
      intro: 'Achat, vente, valorisation, analyse de marché ou investissement: nous répondons avec une route concrète.',
      highlights: ['Réponse initiale en moins de 24 heures', 'Accompagnement acheteurs, vendeurs et investisseurs', 'Couverture ciblée sur les corridors premium de Mexico'],
      channels: sharedChannels.fr,
      coverageTitle: 'Nous intervenons sur les zones les plus pertinentes du corridor premium.',
      coverageIntro: 'Partagez votre besoin et nous vous orientons selon zone, budget et horizon.',
      form: {
        title: 'Formulaire de contact',
        description: 'Votre message est envoyé au backend et enregistré comme lead de contact.',
        nameLabel: 'Nom',
        emailLabel: 'Email',
        phoneLabel: 'Téléphone',
        objectiveLabel: 'Objectif',
        messageLabel: 'Message',
        submit: 'Envoyer le message',
        sending: 'Envoi...',
        success: 'Merci. Votre demande est enregistrée et nous revenons rapidement.',
        error: 'Impossible d envoyer le formulaire. Réessayez.',
        placeholders: { name: 'Votre nom', email: 'vous@email.com', phone: '+52...', message: 'Expliquez si vous achetez, vendez ou investissez.' },
        objectives: ['Acheter', 'Vendre', 'Louer', 'Investir', 'Valorisation', 'Autre'],
      },
    },
    blog: {
      title: 'Actualités immobilières pour décider avec plus de contexte.',
      intro: 'Tendances de marché, guides pratiques et points juridiques pour acheter, vendre ou louer avec plus de sérénité.',
      posts: [
        {
          slug: 'mercado-inmobiliario-cdmx-2024',
          title: 'Comment évolue le marché immobilier de Mexico en 2024',
          excerpt: 'Rendement, quartiers les plus demandés et vitesse de vente des appartements.',
          date: '2024-04-10',
          readTimeMinutes: 4,
          author: 'Équipe Cervantes',
          coverImage: '/marketing/blog/blog-mercado.jpg',
          content: [
            'Les zones Reforma, Polanco et Roma-Condesa gardent une bonne absorption, mais les acheteurs sont plus exigeants sur le prix.',
            'Les appartements bien présentés et bien valorisés se déplacent plus vite; le haut de gamme demande davantage de stratégie.',
            'La lecture fine du micro-marché reste décisive pour bien sortir une opération.',
          ],
        },
        {
          slug: 'como-elegir-credito-hipotecario-2024',
          title: 'Quel crédit hypothécaire choisir en 2024',
          excerpt: 'Taux, apport et négociation bancaire avant que la mensualité ne dérape.',
          date: '2024-03-18',
          readTimeMinutes: 6,
          author: 'Équipe Cervantes',
          coverImage: '/marketing/blog/blog-credito.jpg',
          content: [
            'Comparer le coût total et les frais reste plus utile que regarder uniquement le taux facial.',
            'Un profil financier propre améliore beaucoup la négociation avec la banque.',
            'Avant de réserver un bien, il faut définir la mensualité réellement soutenable.',
          ],
        },
        {
          slug: 'checklist-airbnb-cdmx',
          title: 'Checklist juridique avant de mettre un appartement sur Airbnb',
          excerpt: 'Règlement de copropriété, urbanisme et assurance avant la location courte durée.',
          date: '2024-02-22',
          readTimeMinutes: 5,
          author: 'Équipe Cervantes',
          coverImage: '/marketing/blog/blog-airbnb.jpg',
          content: [
            'Le règlement de copropriété est le premier filtre avant toute stratégie de location courte durée.',
            'Fiscalité, couverture en vigueur et responsabilité civile doivent aussi être validées.',
            'Une rentabilité théorique ne vaut rien si le cadre juridique n est pas sécurisé dès le départ.',
          ],
        },
      ],
    },
    footer: {
      title: 'Conseil immobilier premium pour acheter, vendre et investir avec jugement.',
      description: 'Plus de 20 ans d accompagnement à Mexico avec analyse de marché, stratégie commerciale et coordination juridique.',
      navigation: 'Navigation',
      contact: 'Contact',
    },
    stats: sharedStats.fr,
    areas: sharedAreas.fr,
    seo: {
      defaultTitle: 'Cervantes Immobilier',
      defaultDescription: 'Conseil immobilier premium et opérations CRM pour Cervantes Bienes Raíces.',
      homeTitle: 'Biens à vendre et à louer à Mexico',
      homeDescription: 'Conseil immobilier premium pour acheter, vendre et investir à Mexico.',
      aboutTitle: 'À propos',
      aboutDescription: 'Découvrez l approche de conseil de Cervantes Immobilier.',
      servicesTitle: 'Services',
      servicesDescription: 'Services immobiliers premium pour acquisition, vente et stratégie patrimoniale.',
      contactTitle: 'Contact',
      contactDescription: 'Écrivez-nous pour acheter, vendre ou investir à Mexico.',
      blogTitle: 'Blog',
      blogDescription: 'Tendances de marché et guides immobiliers de l équipe Cervantes.',
    },
  },
  it: {
    localeLabel: 'Italiano',
    tagLine: 'Immobiliare premium CDMX',
    nav: { home: 'Home', about: 'Chi siamo', services: 'Servizi', blog: 'Blog', contact: 'Contatto' },
    ctas: {
      contact: 'Richiedi consulenza',
      services: 'Vedi servizi',
      crmLogin: 'Entra nel CRM',
      dashboard: 'Apri dashboard',
      readArticle: 'Leggi articolo',
      allArticles: 'Vedi tutti gli articoli',
      writeNow: 'Scrivi ora',
    },
    hero: {
      eyebrow: 'Oltre 20 anni di esperienza',
      title: 'Case in vendita e affitti con metodo, giudizio ed esecuzione reale.',
      description: 'Consulenza immobiliare premium a Città del Messico per acquirenti, venditori e investitori.',
      tags: ['Case in vendita', 'Appartamenti in affitto', 'Immobili premium', 'Strategia patrimoniale'],
      aboutCards: [
        'Cervantes Bienes Raíces è una realtà specializzata nell immobiliare premium di Città del Messico.',
        'Affianchiamo clienti locali e internazionali per casa, investimento e diversificazione.',
      ],
      coverageTitle: 'Zone premium di Città del Messico',
      coverageBadge: 'Mercato premium',
      quote: 'Seguiamo un processo per offrire ai nostri investitori le migliori opportunità.',
      founderRole: 'Fondatore e CEO',
    },
    about: {
      title: 'Consulenza immobiliare premium con visione di lungo periodo.',
      intro: 'Mercato, giudizio ed esecuzione in un solo processo di consulenza.',
      paragraphs: [
        'Operiamo nelle zone premium come Polanco, Lomas de Chapultepec, Condesa, Roma e Santa Fe.',
        'Seguiamo acquirenti locali, expat e investitori internazionali.',
        'Il nostro lavoro unisce valutazione, lettura del mercato, negoziazione e coordinamento legale.',
        'Dalla ricerca al closing restiamo presenti sui dettagli che proteggono tempo, capitale e certezza.',
      ],
      missionTitle: 'Missione',
      mission: 'Essere partner strategici in ogni decisione immobiliare con rigore, trasparenza e continuità.',
      philosophyTitle: 'La nostra filosofia',
      philosophyIntro: 'Ogni immobile è insieme scelta di vita e asset strategico.',
      philosophyItems: [
        { title: 'Fiducia', description: 'Relazioni durature basate su trasparenza, etica e riservatezza.' },
        { title: 'Precisione', description: 'Consigli fondati su dati reali e comparabili aggiornati.' },
        { title: 'Eccellenza', description: 'Ricerca costante del miglior risultato in posizione, valore e rendimento.' },
      ],
    },
    services: {
      title: 'Comprare, vendere e investire con un processo strutturato.',
      intro: 'Ogni operazione si basa su valutazione, posizionamento, negoziazione e certezza legale.',
      items: [
        { title: 'Acquisto di proprietà premium', description: 'Selezioniamo le migliori opportunità in base a stile di vita, budget e obiettivi.' },
        { title: 'Rappresentanza per proprietari', description: 'Valutazione, posizionamento commerciale e presentazione a compratori qualificati.' },
        { title: 'Consulenza legale e documentale', description: 'Contratti, atti, fiscalità, revisione documentale e coordinamento notarile.' },
        { title: 'Valutazione e analisi di mercato', description: 'Comparabili e lettura del mercato per supportare decisioni e negoziazione.' },
        { title: 'Strategia di investimento', description: 'Piani immobiliari orientati a crescita del capitale, rendimento e diversificazione.' },
      ],
      differentiatorsTitle: 'Processi pensati per ridurre rischio e perdite di tempo.',
      differentiators: [
        { title: 'Operazioni più sicure', description: 'Revisione documentale, filtri e coordinamento notarile.' },
        { title: 'Acquirenti qualificati', description: 'Filtriamo i prospect e proteggiamo il tempo del proprietario.' },
        { title: 'Esecuzione più rapida', description: 'Comparabili reali, follow-up e strategia commerciale chiara.' },
      ],
    },
    contact: {
      title: 'Raccontaci il tuo obiettivo e definiamo il passo successivo.',
      intro: 'Acquisto, vendita, valutazione, analisi di mercato o investimento: rispondiamo con una direzione concreta.',
      highlights: ['Prima risposta in meno di 24 ore', 'Supporto per acquirenti, venditori e investitori', 'Copertura focalizzata sui corridoi premium di CDMX'],
      channels: sharedChannels.it,
      coverageTitle: 'Lavoriamo nelle aree più rilevanti del corridoio premium.',
      coverageIntro: 'Condividi il tuo caso e ti orientiamo per zona, budget e tempi.',
      form: {
        title: 'Modulo di contatto',
        description: 'Il tuo messaggio viene inviato al backend e registrato come lead.',
        nameLabel: 'Nome',
        emailLabel: 'Email',
        phoneLabel: 'Telefono',
        objectiveLabel: 'Obiettivo',
        messageLabel: 'Messaggio',
        submit: 'Invia messaggio',
        sending: 'Invio...',
        success: 'Grazie. La tua richiesta è registrata e ti contatteremo presto.',
        error: 'Impossibile inviare il modulo. Riprova.',
        placeholders: { name: 'Il tuo nome', email: 'tu@email.com', phone: '+52...', message: 'Spiega se stai acquistando, vendendo o investendo.' },
        objectives: ['Comprare', 'Vendere', 'Affittare', 'Investire', 'Valutazione', 'Altro'],
      },
    },
    blog: {
      title: 'Aggiornamenti immobiliari per decidere con più contesto.',
      intro: 'Trend di mercato, guide pratiche e aspetti legali per comprare, vendere o affittare con maggiore serenità.',
      posts: [
        {
          slug: 'mercado-inmobiliario-cdmx-2024',
          title: 'Come si muove il mercato immobiliare di CDMX nel 2024',
          excerpt: 'Rendimento, quartieri più richiesti e velocità di assorbimento.',
          date: '2024-04-10',
          readTimeMinutes: 4,
          author: 'Team Cervantes',
          coverImage: '/marketing/blog/blog-mercado.jpg',
          content: [
            'Reforma, Polanco e Roma-Condesa continuano ad assorbire inventario, ma con acquirenti più severi sul prezzo.',
            'Gli appartamenti ben presentati e correttamente valutati si muovono più in fretta; il lusso richiede strategia più fine.',
            'La lettura del micro-mercato resta decisiva per chiudere con controllo.',
          ],
        },
        {
          slug: 'como-elegir-credito-hipotecario-2024',
          title: 'Quale mutuo conviene nel 2024',
          excerpt: 'Tassi, anticipo e negoziazione bancaria prima che la rata diventi pesante.',
          date: '2024-03-18',
          readTimeMinutes: 6,
          author: 'Team Cervantes',
          coverImage: '/marketing/blog/blog-credito.jpg',
          content: [
            'Guardare costo totale e CAT resta più utile che fermarsi al tasso nominale.',
            'Un profilo finanziario ordinato migliora molto la trattativa con la banca.',
            'Prima di bloccare un immobile conviene definire una rata davvero sostenibile.',
          ],
        },
        {
          slug: 'checklist-airbnb-cdmx',
          title: 'Checklist legale prima di mettere un appartamento su Airbnb',
          excerpt: 'Regolamento condominiale, destinazione d uso e assicurazione prima degli affitti brevi.',
          date: '2024-02-22',
          readTimeMinutes: 5,
          author: 'Team Cervantes',
          coverImage: '/marketing/blog/blog-airbnb.jpg',
          content: [
            'Il regolamento di condominio è il primo filtro prima di impostare una strategia di affitto breve.',
            'Anche fiscalità, coperture attive e responsabilità civile vanno verificate subito.',
            'Una redditività teorica non basta se il quadro legale non è chiaro dall inizio.',
          ],
        },
      ],
    },
    footer: {
      title: 'Consulenza immobiliare premium per comprare, vendere e investire con giudizio.',
      description: 'Oltre 20 anni di operazioni a Città del Messico con analisi di mercato, strategia commerciale e coordinamento legale.',
      navigation: 'Navigazione',
      contact: 'Contatto',
    },
    stats: sharedStats.it,
    areas: sharedAreas.it,
    seo: {
      defaultTitle: 'Cervantes Immobiliare',
      defaultDescription: 'Consulenza immobiliare premium e operatività CRM per Cervantes Bienes Raíces.',
      homeTitle: 'Case in vendita e in affitto a Città del Messico',
      homeDescription: 'Consulenza immobiliare premium per comprare, vendere e investire a CDMX.',
      aboutTitle: 'Chi siamo',
      aboutDescription: 'Scopri l approccio di consulenza di Cervantes Immobiliare.',
      servicesTitle: 'Servizi',
      servicesDescription: 'Servizi immobiliari premium per acquisto, vendita, valutazione e strategia patrimoniale.',
      contactTitle: 'Contatto',
      contactDescription: 'Scrivici per comprare, vendere o investire a Città del Messico.',
      blogTitle: 'Blog',
      blogDescription: 'Trend di mercato e guide immobiliari del team Cervantes.',
    },
  },
  de: {
    localeLabel: 'Deutsch',
    tagLine: 'Premium-Immobilien CDMX',
    nav: { home: 'Start', about: 'Über uns', services: 'Leistungen', blog: 'Blog', contact: 'Kontakt' },
    ctas: {
      contact: 'Beratung anfragen',
      services: 'Leistungen ansehen',
      crmLogin: 'Ins CRM',
      dashboard: 'Dashboard öffnen',
      readArticle: 'Artikel lesen',
      allArticles: 'Alle Artikel',
      writeNow: 'Jetzt schreiben',
    },
    hero: {
      eyebrow: 'Mehr als 20 Jahre Erfahrung',
      title: 'Häuser und Vermietungen mit Methode, Urteilskraft und echter Umsetzung.',
      description: 'Premium-Immobilienberatung in Mexiko-Stadt für Käufer, Verkäufer und Investoren.',
      tags: ['Häuser kaufen', 'Wohnungen mieten', 'Premium-Immobilien', 'Vermögensstrategie'],
      aboutCards: [
        'Cervantes Bienes Raíces ist auf Premium-Immobilien in Mexiko-Stadt spezialisiert.',
        'Wir begleiten lokale und internationale Kunden bei Wohnen, Investment und Vermögensdiversifikation.',
      ],
      coverageTitle: 'Premium-Lagen in Mexiko-Stadt',
      coverageBadge: 'Prime-Markt',
      quote: 'Wir folgen einem klaren Prozess, um Investoren die besten Chancen zu liefern.',
      founderRole: 'Gründer und CEO',
    },
    about: {
      title: 'Premium-Immobilienberatung mit langfristiger Perspektive.',
      intro: 'Marktkenntnis, Urteilskraft und Umsetzung in einem Beratungsprozess.',
      paragraphs: [
        'Wir arbeiten in den Premium-Lagen Polanco, Lomas de Chapultepec, Condesa, Roma und Santa Fe.',
        'Wir begleiten lokale Käufer, Expats und internationale Investoren.',
        'Unsere Arbeit verbindet Bewertung, Marktanalyse, Verhandlung und rechtliche Koordination.',
        'Von der Suche bis zum Closing bleiben wir in den Details präsent, die Zeit, Kapital und Sicherheit schützen.',
      ],
      missionTitle: 'Mission',
      mission: 'Als strategischer Partner in jeder Immobilienentscheidung mit Sorgfalt, Transparenz und Konsequenz handeln.',
      philosophyTitle: 'Unsere Philosophie',
      philosophyIntro: 'Jede Immobilie ist Lebensentscheidung und strategischer Vermögenswert zugleich.',
      philosophyItems: [
        { title: 'Vertrauen', description: 'Langfristige Beziehungen auf Basis von Transparenz, Ethik und Vertraulichkeit.' },
        { title: 'Präzision', description: 'Beratung auf Grundlage realer Daten und aktueller Vergleichswerte.' },
        { title: 'Exzellenz', description: 'Fokus auf das beste Ergebnis bei Lage, Wert und Rendite.' },
      ],
    },
    services: {
      title: 'Kaufen, verkaufen und investieren mit einem strukturierten Prozess.',
      intro: 'Jede Transaktion basiert auf Bewertung, Positionierung, Verhandlung und Rechtssicherheit.',
      items: [
        { title: 'Erwerb von Premium-Immobilien', description: 'Wir identifizieren passende Chancen nach Lebensstil, Budget und Investmentziel.' },
        { title: 'Verkäufervertretung', description: 'Bewertung, Marktpositionierung und Präsentation an qualifizierte Käufer.' },
        { title: 'Recht und Dokumentation', description: 'Verträge, Urkunden, Steuern, Dokumentenprüfung und Notarkoordination.' },
        { title: 'Bewertung und Marktanalyse', description: 'Vergleichsdaten und Marktlese zur Unterstützung fundierter Entscheidungen.' },
        { title: 'Investmentstrategie', description: 'Langfristige Immobilienpläne mit Fokus auf Kapitalwachstum und Diversifikation.' },
      ],
      differentiatorsTitle: 'Prozesse, die Risiko und Zeitverlust spürbar reduzieren.',
      differentiators: [
        { title: 'Sichere Abläufe', description: 'Dokumentenprüfung, Filterung und Notarkoordination.' },
        { title: 'Qualifizierte Käufer', description: 'Wir filtern Interessenten und schützen die Zeit des Eigentümers.' },
        { title: 'Schnellere Umsetzung', description: 'Echte Vergleichsdaten, Follow-up und klare Vermarktungsstrategie.' },
      ],
    },
    contact: {
      title: 'Beschreiben Sie Ihr Ziel und wir definieren den nächsten Schritt.',
      intro: 'Kauf, Verkauf, Bewertung, Marktanalyse oder Investmentstrategie: wir antworten mit einer klaren Richtung.',
      highlights: ['Erste Antwort in unter 24 Stunden', 'Begleitung für Käufer, Verkäufer und Investoren', 'Fokus auf Premium-Korridore in Mexiko-Stadt'],
      channels: sharedChannels.de,
      coverageTitle: 'Wir arbeiten in den relevantesten Premium-Korridoren.',
      coverageIntro: 'Schildern Sie Ihren Fall und wir ordnen ihn nach Lage, Ticket und Timing ein.',
      form: {
        title: 'Kontaktformular',
        description: 'Ihre Nachricht wird an das Backend gesendet und als Kontakt-Lead gespeichert.',
        nameLabel: 'Name',
        emailLabel: 'E-Mail',
        phoneLabel: 'Telefon',
        objectiveLabel: 'Ziel',
        messageLabel: 'Nachricht',
        submit: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Danke. Ihre Anfrage wurde gespeichert und wir melden uns zeitnah.',
        error: 'Das Formular konnte nicht gesendet werden. Bitte erneut versuchen.',
        placeholders: { name: 'Ihr Name', email: 'sie@email.com', phone: '+52...', message: 'Beschreiben Sie, ob Sie kaufen, verkaufen oder investieren.' },
        objectives: ['Kaufen', 'Verkaufen', 'Mieten', 'Investieren', 'Bewertung', 'Anderes'],
      },
    },
    blog: {
      title: 'Immobilien-Updates für Entscheidungen mit mehr Kontext.',
      intro: 'Markttrends, praktische Leitfäden und rechtliche Punkte für mehr Sicherheit beim Kaufen, Verkaufen oder Vermieten.',
      posts: [
        {
          slug: 'mercado-inmobiliario-cdmx-2024',
          title: 'Wie sich der Immobilienmarkt in CDMX 2024 bewegt',
          excerpt: 'Renditen, gefragte Viertel und wie schnell Wohnungen absorbiert werden.',
          date: '2024-04-10',
          readTimeMinutes: 4,
          author: 'Cervantes Team',
          coverImage: '/marketing/blog/blog-mercado.jpg',
          content: [
            'Reforma, Polanco und Roma-Condesa absorbieren weiter Angebot, aber Käufer reagieren viel sensibler auf falsche Preisniveaus.',
            'Gut präsentierte und richtig bewertete Wohnungen bewegen sich schneller; Luxusobjekte brauchen mehr Strategie.',
            'Die genaue Lesart des Mikromarkts bleibt entscheidend für einen kontrollierten Abschluss.',
          ],
        },
        {
          slug: 'como-elegir-credito-hipotecario-2024',
          title: 'Welche Hypothekenstruktur 2024 sinnvoll ist',
          excerpt: 'Zinsen, Eigenkapital und Bankverhandlung bevor die Monatsrate aus dem Rahmen läuft.',
          date: '2024-03-18',
          readTimeMinutes: 6,
          author: 'Cervantes Team',
          coverImage: '/marketing/blog/blog-credito.jpg',
          content: [
            'Gesamtkosten und Nebenkosten sind oft wichtiger als nur der beworbene Zinssatz.',
            'Ein sauberes Finanzprofil verbessert die Verhandlung mit der Bank spürbar.',
            'Vor einer Reservierung sollte die wirklich tragbare Monatsrate klar definiert sein.',
          ],
        },
        {
          slug: 'checklist-airbnb-cdmx',
          title: 'Rechtliche Checkliste vor Airbnb-Vermietung einer Wohnung',
          excerpt: 'Hausordnung, Nutzung und Versicherung vor Kurzzeitvermietung.',
          date: '2024-02-22',
          readTimeMinutes: 5,
          author: 'Cervantes Team',
          coverImage: '/marketing/blog/blog-airbnb.jpg',
          content: [
            'Die Hausordnung ist der erste Filter, bevor ein Kurzzeitmodell umgesetzt wird.',
            'Auch Steuerpflichten, Deckungen und Haftpflicht gehören früh auf den Tisch.',
            'Eine theoretische Rendite hilft nicht, wenn der rechtliche Rahmen von Anfang an unsauber ist.',
          ],
        },
      ],
    },
    footer: {
      title: 'Premium-Immobilienberatung für Kauf, Verkauf und Investment mit Urteilskraft.',
      description: 'Mehr als 20 Jahre Transaktionserfahrung in Mexiko-Stadt mit Marktanalyse, Vermarktungsstrategie und rechtlicher Koordination.',
      navigation: 'Navigation',
      contact: 'Kontakt',
    },
    stats: sharedStats.de,
    areas: sharedAreas.de,
    seo: {
      defaultTitle: 'Cervantes Immobilien',
      defaultDescription: 'Premium-Immobilienberatung und CRM-Betrieb für Cervantes Bienes Raíces.',
      homeTitle: 'Häuser und Wohnungen in Mexiko-Stadt',
      homeDescription: 'Premium-Immobilienberatung für Kauf, Verkauf und Investment in CDMX.',
      aboutTitle: 'Über uns',
      aboutDescription: 'Lernen Sie den Beratungsansatz von Cervantes Immobilien kennen.',
      servicesTitle: 'Leistungen',
      servicesDescription: 'Premium-Leistungen für Erwerb, Verkauf, Bewertung und Vermögensstrategie.',
      contactTitle: 'Kontakt',
      contactDescription: 'Schreiben Sie uns für Kauf, Verkauf oder Investment in Mexiko-Stadt.',
      blogTitle: 'Blog',
      blogDescription: 'Markttrends und Immobilienleitfäden vom Cervantes Team.',
    },
  },
};

export function getMarketingContent(locale: MarketingLocale) {
  return content[locale];
}

export function isMarketingLocale(value: string): value is MarketingLocale {
  return marketingLocales.includes(value as MarketingLocale);
}

export function getMarketingPath(locale: MarketingLocale, page: MarketingPageKey, slug?: string) {
  if (locale === 'es') {
    if (page === 'home') return '/';
    if (page === 'about') return '/quienes-somos';
    if (page === 'services') return '/servicios';
    if (page === 'contact') return '/contacto';
    if (page === 'blog') return '/blog';
    return `/blog/${slug || ''}`.replace(/\/+$/, '');
  }

  const base = `/${locale}`;
  if (page === 'home') return base;
  if (page === 'about') return `${base}/about`;
  if (page === 'services') return `${base}/services`;
  if (page === 'contact') return `${base}/contact`;
  if (page === 'blog') return `${base}/blog`;
  return `${base}/blog/${slug || ''}`.replace(/\/+$/, '');
}

export function getPostBySlug(locale: MarketingLocale, slug: string) {
  return content[locale].blog.posts.find((post) => post.slug === slug);
}

export function formatMarketingDate(locale: MarketingLocale, date: string) {
  const formatLocale =
    locale === 'es' ? 'es-MX' : locale === 'en' ? 'en-US' : locale === 'fr' ? 'fr-FR' : locale === 'it' ? 'it-IT' : 'de-DE';
  return new Intl.DateTimeFormat(formatLocale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}
