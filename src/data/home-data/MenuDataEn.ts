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
    title: "Home",
    link: "/en",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "About Us",
    link: "/en#about-us",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Services",
    link: "/en/services",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Contact",
    link: "/en#contact",
    has_dropdown: false,
  },
];

export default menu_data;
