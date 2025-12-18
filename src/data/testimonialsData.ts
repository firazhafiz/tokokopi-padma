export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rina Wijaya",
    role: "Coffee Enthusiast",
    content: "Kopi di Padma selalu konsisten enak! Es Kopi Susu Padma adalah favorit saya. Tempatnya juga nyaman untuk kerja.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: "2",
    name: "Budi Santoso",
    role: "Food Blogger",
    content: "Menu makanannya lengkap dan rasanya authentic. Tiramisu mereka juara! Highly recommended untuk gathering.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: "3",
    name: "Maya Putri",
    role: "Remote Worker",
    content: "Tempat favorit untuk WFC! WiFi kencang, colokan banyak, dan baristanya ramah. Plus kopinya enak banget.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: "4",
    name: "Andi Pratama",
    role: "Architect",
    content: "Interior designnya bikin betah berlama-lama. Matcha Latte-nya juga top tier, pakai oat milk pula.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 4,
  },
  {
    id: "5",
    name: "Siti Nurhaliza",
    role: "Event Organizer",
    content: "Sudah beberapa kali pakai venue Padma untuk event. Pelayanannya profesional dan makanannya selalu dipuji tamu.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 5,
  },
];
