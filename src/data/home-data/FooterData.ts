interface FooterLink {
  link: string;
  link_title: string;
}

export interface FooterWidget {
  id: number;
  page: string;
  widget_title: string;
  widget_class?: string;
  widget_class2?: string;
  footer_link: FooterLink[];
}

const footer_data: FooterWidget[] = [
  // Home 1
  {
    id: 1,
    page: "home_1",
    widget_class: "xs-mt-50",
    widget_title: "Enlaces",
    footer_link: [
      { link: "/", link_title: "Inicio" },
      { link: "/quienes-somos", link_title: "Quiénes Somos" },
      { link: "/servicios", link_title: "Servicios" },
      { link: "/consultoria", link_title: "Consultoría" },
      { link: "/contact", link_title: "Contacto" },
    ],
  },
  {
    id: 2,
    page: "home_1",
    widget_class: "xs-mt-30",
    widget_title: "Legal",
    footer_link: [
      { link: "/aviso-privacidad", link_title: "Aviso de Privacidad" },
      { link: "/aviso-privacidad#cookies", link_title: "Política de Cookies" },
      { link: "/faq", link_title: "Términos y Condiciones" },
      { link: "/faq", link_title: "Preguntas Frecuentes" },
    ],
  },
  {
    id: 3,
    page: "home_1",
    widget_class: "xs-mt-30",
    widget_title: "Propiedades",
    footer_link: [
      { link: "/listing_01", link_title: "Departamentos en Venta" },
      { link: "/listing_02", link_title: "Departamentos en Renta" },
      { link: "/listing_03", link_title: "Casas en Venta" },
      { link: "/listing_04", link_title: "Casas en Renta" },
      { link: "/listing_06", link_title: "Oficinas" },
    ],
  },

  // Home 3
  {
    id: 1,
    page: "home_3",
    widget_title: "Links",
    footer_link: [
      { link: "/", link_title: "Home" },
      { link: "/dashboard/membership", link_title: "Membership" },
      { link: "/about_us_01", link_title: "About Company" },
      { link: "/blog_01", link_title: "Blog" },
      { link: "/pricing_02", link_title: "Pricing" },
    ],
  },
  {
    id: 2,
    page: "home_3",
    widget_class: "col-xxl-3 col-xl-4",
    widget_title: "Legal",
    footer_link: [
      { link: "/faq", link_title: "Terms & conditions" },
      { link: "/faq", link_title: "Cookie" },
      { link: "/faq", link_title: "Privacy policy" },
      { link: "/faq", link_title: "Faq’s" },
    ],
  },
  {
    id: 3,
    page: "home_3",
    widget_title: "New Listing",
    footer_link: [
      { link: "/listing_01", link_title: "​Buy Apartments" },
      { link: "/listing_02", link_title: "Buy Condos" },
      { link: "/listing_03", link_title: "Rent Houses" },
      { link: "/listing_04", link_title: "Rent Industrial" },
      { link: "/listing_05", link_title: "Buy Villas" },
    ],
  },

  // Home 4
  {
    id: 1,
    page: "home_4",
    widget_class: "col-lg-2",
    widget_title: "Links",
    footer_link: [
      { link: "/", link_title: "Home" },
      { link: "/dashboard/membership", link_title: "Membership" },
      { link: "/about_us_01", link_title: "About Company" },
      { link: "/blog_01", link_title: "Blog" },
    ],
  },
  {
    id: 2,
    page: "home_4",
    widget_class: "col-xl-2 col-lg-3",
    widget_title: "New Listing",
    footer_link: [
      { link: "/listing_01", link_title: "​Buy Apartments" },
      { link: "/listing_02", link_title: "Buy Condos" },
      { link: "/listing_03", link_title: "Rent Houses" },
      { link: "/listing_04", link_title: "Rent Industrial" },
      { link: "/listing_05", link_title: "Buy Villas" },
    ],
  },
  {
    id: 3,
    page: "home_4",
    widget_class: "col-xl-2 col-lg-3",
    widget_title: "Legal",
    footer_link: [
      { link: "/faq", link_title: "Terms & conditions" },
      { link: "/faq", link_title: "Cookie" },
      { link: "/faq", link_title: "Privacy policy" },
      { link: "/faq", link_title: "Faq’s" },
    ],
  },

  // Home 5
  {
    id: 1,
    page: "home_5",
    widget_class: "col-lg-3 ms-auto",
    widget_class2: "ps-xl-5",
    widget_title: "Links",
    footer_link: [
      { link: "/", link_title: "Home" },
      { link: "/dashboard/membership", link_title: "Membership" },
      { link: "/about_us_01", link_title: "About Company" },
      { link: "/blog_01", link_title: "Blog" },
      { link: "/blog_02", link_title: "Explore Careers" },
      { link: "/pricing_02", link_title: "Pricing" },
      { link: "/dashboard/dashboard-index", link_title: "Dashboard" },
    ],
  },
  {
    id: 2,
    page: "home_5",
    widget_class: "col-lg-3",
    widget_title: "Legal",
    footer_link: [
      { link: "/faq", link_title: "Terms & conditions" },
      { link: "/faq", link_title: "Cookie" },
      { link: "/faq", link_title: "Privacy policy" },
      { link: "/faq", link_title: "Faq’s" },
    ],
  },
  {
    id: 3,
    page: "home_5",
    widget_class: "col-lg-2",
    widget_title: "New Listing",
    footer_link: [
      { link: "/listing_01", link_title: "​Buy Apartments" },
      { link: "/listing_02", link_title: "Buy Condos" },
      { link: "/listing_03", link_title: "Rent Houses" },
      { link: "/listing_04", link_title: "Rent Industrial" },
      { link: "/listing_05", link_title: "Buy Villas" },
    ],
  },
];

export default footer_data;
