export type MenuCategory = "coffee" | "non-coffee" | "food" | "dessert" | "snack";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: "1",
    name: "Padma Signature Latte",
    description: "Espresso pilihan dengan susu steamed dan sentuhan vanilla bean",
    price: 38000,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: "2",
    name: "Cappuccino Classic",
    description: "Espresso dengan foam susu yang creamy dan taburan cocoa",
    price: 35000,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Americano",
    description: "Double shot espresso dengan air panas, bold dan refreshing",
    price: 28000,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Es Kopi Susu Padma",
    description: "Kopi susu khas Padma dengan gula aren pilihan",
    price: 32000,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: "5",
    name: "Pour Over V60",
    description: "Single origin coffee diseduh dengan metode V60",
    price: 42000,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Affogato",
    description: "Vanilla gelato dengan shot espresso panas",
    price: 45000,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=400&fit=crop",
    isNew: true,
  },
  // Non-Coffee
  {
    id: "7",
    name: "Matcha Latte",
    description: "Premium Japanese matcha dengan susu oat",
    price: 40000,
    category: "non-coffee",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: "8",
    name: "Taro Milk Tea",
    description: "Teh susu dengan rasa taro yang creamy",
    price: 35000,
    category: "non-coffee",
    image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop",
  },
  {
    id: "9",
    name: "Fresh Orange Juice",
    description: "Jus jeruk segar tanpa tambahan gula",
    price: 30000,
    category: "non-coffee",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop",
  },
  {
    id: "10",
    name: "Chocolate Frappe",
    description: "Blended chocolate dengan whipped cream",
    price: 38000,
    category: "non-coffee",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop",
  },
  // Food
  {
    id: "11",
    name: "Nasi Goreng Padma",
    description: "Nasi goreng spesial dengan telur mata sapi dan kerupuk",
    price: 45000,
    category: "food",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: "12",
    name: "Chicken Katsu Rice",
    description: "Ayam katsu crispy dengan nasi dan salad",
    price: 55000,
    category: "food",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=400&fit=crop",
  },
  {
    id: "13",
    name: "Spaghetti Aglio Olio",
    description: "Pasta dengan garlic, olive oil, dan parsley",
    price: 48000,
    category: "food",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=400&fit=crop",
  },
  {
    id: "14",
    name: "Beef Burger",
    description: "Beef patty dengan cheese, lettuce, dan special sauce",
    price: 58000,
    category: "food",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    isNew: true,
  },
  // Dessert
  {
    id: "15",
    name: "Tiramisu",
    description: "Classic Italian dessert dengan mascarpone dan espresso",
    price: 42000,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: "16",
    name: "Cheesecake",
    description: "New York style cheesecake dengan berry compote",
    price: 45000,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop",
  },
  {
    id: "17",
    name: "Croffle",
    description: "Croissant waffle dengan ice cream dan maple syrup",
    price: 38000,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=400&fit=crop",
    isNew: true,
  },
  // Snack
  {
    id: "18",
    name: "French Fries",
    description: "Kentang goreng crispy dengan dipping sauce",
    price: 28000,
    category: "snack",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop",
  },
  {
    id: "19",
    name: "Chicken Wings",
    description: "Sayap ayam goreng dengan pilihan saus",
    price: 38000,
    category: "snack",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=400&fit=crop",
  },
  {
    id: "20",
    name: "Nachos Supreme",
    description: "Tortilla chips dengan cheese sauce dan jalapeño",
    price: 42000,
    category: "snack",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=400&fit=crop",
  },
];

export const categoryLabels: Record<MenuCategory, string> = {
  coffee: "Kopi",
  "non-coffee": "Non-Kopi",
  food: "Makanan",
  dessert: "Dessert",
  snack: "Snack",
};
