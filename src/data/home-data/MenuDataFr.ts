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

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Accueil",
    link: "/fr",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Qui Sommes-Nous",
    link: "/fr#qui-sommes-nous",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Services",
    link: "/fr/services",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Contact",
    link: "/fr#contact",
    has_dropdown: false,
  },
];

export default menu_data;
