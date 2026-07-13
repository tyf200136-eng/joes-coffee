export type MenuCategory = "cinnamon-roll" | "cheesecake" | "specialty-coffee";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  image: string;
}

export const categoryLabels: Record<"all" | MenuCategory, string> = {
  all: "All",
  "cinnamon-roll": "Cinnamon Rolls",
  cheesecake: "Cheesecakes",
  "specialty-coffee": "Specialty Coffee",
};

export const menuItems: MenuItem[] = [
  {
    id: "classic-cinnamon-roll",
    name: "Classic Cinnamon Roll",
    category: "cinnamon-roll",
    image: "/images/menu/classic-cinnamon-roll.jpg",  },
  {
    id: "caramel-pecan-roll",
    name: "Caramel Pecan Roll",
    category: "cinnamon-roll",
    image:"/images/menu/cinnamon-roll.jpg",
  },
  {
    id: "cream-cheese-roll",
    name: "Cream Cheese Roll",
    category: "cinnamon-roll",
    image:"/images/menu/cream-cheese-roll.jpg",
  },
  {
    id: "new-york-cheesecake",
    name: "New York Cheesecake",
    category: "cheesecake",
    image:"/images/menu/new-york-cheesecake.jpg",
  },
  {
    id: "strawberry-cheesecake",
    name: "Strawberry Cheesecake",
    category: "cheesecake",
    image:"/images/menu/strawberry-cheesecake.jpg",
  },
  {
    id: "chocolate-cheesecake",
    name: "Chocolate Cheesecake",
    category: "cheesecake",
    image:
      "/images/menu/chocolate-cheesecake.jpg",
  },
  {
    id: "v60",
    name: "V60",
    category: "specialty-coffee",
    image:"/images/menu/v60.jpg",
  },
  {
    id: "espresso",
    name: "Espresso",
    category: "specialty-coffee",
    image:"/images/menu/espresso.jpg",
  },
  {
    id: "latte",
    name: "Latte",
    category: "specialty-coffee",
    image:
      "/images/menu/latte.jpg",
  },
];