export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "menu" | "reservation" | "payment";
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Apa jam operasional Toko Kopi Padma?",
    answer: "Jam operasional kami bervariasi di setiap cabang. Cabang Jemursari dan Kayutangan buka pukul 07:00-22:00, sedangkan cabang Tunjungan buka pukul 08:00-23:00. Silakan cek halaman cabang untuk informasi lebih detail.",
    category: "general",
  },
  {
    id: "2",
    question: "Apakah tersedia WiFi gratis?",
    answer: "Ya, semua cabang Toko Kopi Padma menyediakan WiFi gratis untuk pelanggan. Anda bisa meminta password WiFi kepada barista kami.",
    category: "general",
  },
  {
    id: "3",
    question: "Apakah ada menu untuk vegetarian?",
    answer: "Tentu! Kami menyediakan beberapa pilihan menu vegetarian termasuk salad, pasta aglio olio, dan berbagai minuman. Silakan tanyakan kepada staf kami untuk rekomendasi menu vegetarian.",
    category: "menu",
  },
  {
    id: "4",
    question: "Bisakah memesan untuk takeaway atau delivery?",
    answer: "Ya, kami melayani takeaway di semua cabang. Untuk delivery, Anda bisa memesan melalui GoFood, GrabFood, atau ShopeeFood.",
    category: "menu",
  },
  {
    id: "5",
    question: "Bagaimana cara melakukan reservasi?",
    answer: "Anda bisa melakukan reservasi melalui website kami di halaman Reservasi. Tersedia dua jenis reservasi: Same Day Reservation untuk kunjungan hari yang sama, dan Event Reservation untuk acara khusus seperti meeting, ulang tahun, atau gathering.",
    category: "reservation",
  },
  {
    id: "6",
    question: "Berapa minimum order untuk event reservation?",
    answer: "Untuk event reservation, minimum order adalah Rp 500.000 untuk grup 5-10 orang, dan Rp 1.000.000 untuk grup lebih dari 10 orang. Paket event juga tersedia dengan harga khusus.",
    category: "reservation",
  },
  {
    id: "7",
    question: "Apakah bisa membatalkan reservasi?",
    answer: "Ya, pembatalan reservasi bisa dilakukan maksimal 24 jam sebelum waktu reservasi untuk same day reservation, dan 3 hari sebelumnya untuk event reservation. Pembatalan setelah batas waktu tersebut akan dikenakan biaya pembatalan.",
    category: "reservation",
  },
  {
    id: "8",
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima pembayaran tunai, kartu debit/kredit (Visa, Mastercard, BCA, Mandiri), serta e-wallet seperti GoPay, OVO, DANA, dan ShopeePay. Untuk reservasi event, kami juga menerima transfer bank.",
    category: "payment",
  },
  {
    id: "9",
    question: "Apakah ada program loyalty atau membership?",
    answer: "Ya! Kami memiliki program Padma Points. Setiap pembelian Rp 10.000 akan mendapatkan 1 poin. Poin bisa ditukar dengan minuman gratis atau diskon. Daftar melalui aplikasi atau langsung di kasir.",
    category: "general",
  },
  {
    id: "10",
    question: "Apakah Padma menyediakan catering?",
    answer: "Ya, kami menyediakan layanan catering untuk berbagai acara seperti meeting, seminar, atau pesta. Silakan hubungi kami melalui halaman Contact atau langsung ke cabang terdekat untuk informasi lebih lanjut.",
    category: "general",
  },
];
