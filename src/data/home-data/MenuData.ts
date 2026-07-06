interface MenuItem {
  id: number;
  title: string;
  class_name?: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
  menu_column?: {
    id: number;
    mega_title: string;
    mega_menus: {
      link: string;
      title: string;
    }[];
  }[];
}

const BLOG_ENABLED = process.env.NEXT_PUBLIC_BLOG_ENABLED !== "off";

const baseMenu: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Quiénes Somos",
    link: "/#quienes-somos",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Servicios",
    link: "/servicios",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Contacto",
    link: "/#contacto",
    has_dropdown: false,
  },
];

const menu_data: MenuItem[] = BLOG_ENABLED
  ? [
      ...baseMenu.slice(0, 3),
      {
        id: 99,
        title: "Propiedades destacadas",
        link: "/blog#propiedades-destacadas",
        has_dropdown: true,
        sub_menus: [
          { title: "Rentas", link: "/blog?operacion=rent#propiedades-destacadas" },
          { title: "Ventas", link: "/blog?operacion=sale#propiedades-destacadas" },
          { title: "Últimas Noticias", link: "/blog#ultimas-noticias" },
        ],
      },
      ...baseMenu.slice(3),
    ]
  : baseMenu;

export default menu_data;
