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
    title: "Accueil",
    link: "/fr",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Qui sommes-nous",
    link: "/fr#quienes-somos",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Services",
    link: "/fr/servicios",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Contact",
    link: "/fr#contacto",
    has_dropdown: false,
  },
];

const menu_data: MenuItem[] = BLOG_ENABLED
  ? [
      ...baseMenu.slice(0, 3),
      { id: 99, title: "Blog", link: "/fr/blog", has_dropdown: false },
      ...baseMenu.slice(3),
    ]
  : baseMenu;

export default menu_data;
