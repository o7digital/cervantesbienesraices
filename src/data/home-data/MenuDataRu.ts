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
    title: "Главная",
    link: "/ru",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "О нас",
    link: "/ru#about-us",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Услуги",
    link: "/ru/services",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Контакты",
    link: "/ru#contact",
    has_dropdown: false,
  },
];

const menu_data: MenuItem[] = BLOG_ENABLED
  ? [
      ...baseMenu.slice(0, 3),
      { id: 99, title: "Новости", link: "/blog", has_dropdown: false },
      ...baseMenu.slice(3),
    ]
  : baseMenu;

export default menu_data;
