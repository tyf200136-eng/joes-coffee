export type MenuCategory = "hot" | "cold" | "pastry";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  image: string;
}

export const categoryLabels: Record<"all" | MenuCategory, string> = {
  all: "All",
  hot: "Hot Drinks",
  cold: "Cold Drinks",
  pastry: "Pastries",
};

export const menuItems: MenuItem[] = [
  {
    id: "espresso",
    name: "Espresso",
    category: "hot",
    image:
      "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "latte",
    name: "Latte",
    category: "hot",
    image:
      "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    category: "cold",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "hot",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "iced-americano",
    name: "Iced Americano",
    category: "cold",
    image:
      "https://images.unsplash.com/photo-1595434091143-b375ced5fdaf?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "mocha",
    name: "Mocha",
    category: "hot",
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "iced-mocha",
    name: "Iced Mocha",
    category: "cold",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "flat-white",
    name: "Flat White",
    category: "hot",
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "iced-flat-white",
    name: "Iced Flat White",
    category: "cold",
    image:
      "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "chai-latte",
    name: "Chai Latte",
    category: "hot",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "croissant",
    name: "Croissant",
    category: "pastry",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "chocolate-chip-cookie",
    name: "Chocolate Chip Cookie",
    category: "pastry",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80&auto=format&fit=crop",
  },
];
