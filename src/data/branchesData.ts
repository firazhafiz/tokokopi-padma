export interface Branch {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  mapUrl: string;
}

export const branches: Branch[] = [
  {
    id: "jemursari",
    name: "Padma Jemursari",
    city: "Surabaya",
    address: "Jl. Jemursari No. 123, Wonocolo, Surabaya",
    phone: "+62 31 8472 1234",
    hours: "07:00 - 22:00",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
    mapUrl: "https://maps.google.com/?q=Jemursari+Surabaya",
  },
  {
    id: "tunjungan",
    name: "Padma Tunjungan",
    city: "Surabaya",
    address: "Jl. Tunjungan No. 45, Genteng, Surabaya",
    phone: "+62 31 5321 5678",
    hours: "08:00 - 23:00",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop",
    mapUrl: "https://maps.google.com/?q=Tunjungan+Surabaya",
  },
  {
    id: "kayutangan",
    name: "Padma Kayutangan",
    city: "Malang",
    address: "Jl. Kayutangan Heritage No. 78, Klojen, Malang",
    phone: "+62 341 362 9012",
    hours: "07:00 - 22:00",
    image: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=400&fit=crop",
    mapUrl: "https://maps.google.com/?q=Kayutangan+Malang",
  },
];
