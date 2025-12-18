import { Layout } from "@/components/layout/Layout";
import { Award, Users, Coffee, Heart, Leaf, Target } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Coffee,
      title: "Kualitas",
      description:
        "Kami hanya menggunakan biji kopi terbaik yang dipilih langsung dari petani lokal.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Setiap cangkir kopi dibuat dengan cinta dan dedikasi tinggi oleh barista kami.",
    },
    {
      icon: Users,
      title: "Komunitas",
      description:
        "Kami membangun komunitas pecinta kopi yang saling berbagi pengalaman.",
    },
    {
      icon: Leaf,
      title: "Keberlanjutan",
      description:
        "Berkomitmen pada praktik bisnis yang ramah lingkungan dan berkelanjutan.",
    },
  ];

  const milestones = [
    { year: "2019", title: "Awal Mula", description: "Cabang pertama dibuka di Jemursari, Surabaya" },
    { year: "2020", title: "Ekspansi", description: "Cabang kedua hadir di Tunjungan Plaza" },
    { year: "2022", title: "Ke Malang", description: "Melebarkan sayap ke Kayutangan Heritage" },
    { year: "2024", title: "10.000+", description: "Pelanggan setia di seluruh cabang" },
  ];

  return (
    <Layout>
      <div className="pt-24">
        {/* Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=800&fit=crop"
              alt="Coffee shop interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/95 via-coffee-dark/85 to-coffee-dark/75" />
          </div>

          <div className="container-padma relative z-10">
            <div className="max-w-3xl animate-fade-in-up">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary font-medium tracking-wide uppercase text-xs mb-6">
                Tentang Kami
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
                Cerita di Balik
                <span className="text-primary"> Setiap Cangkir</span>
              </h1>
              <p className="text-cream/80 text-lg leading-relaxed max-w-2xl">
                Toko Kopi Padma lahir dari mimpi sederhana: menghadirkan
                pengalaman kopi specialty terbaik untuk semua kalangan. Kami
                percaya bahwa kopi bukan sekadar minuman, melainkan jembatan
                yang menghubungkan cerita, budaya, dan manusia.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-background">
          <div className="container-padma">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-fade-in-up">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Perjalanan Kami
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Bermula dari kecintaan terhadap kopi Indonesia, Toko Kopi
                    Padma didirikan pada tahun 2019 di Surabaya. Nama "Padma"
                    diambil dari bunga teratai yang melambangkan kemurnian dan
                    keindahan - nilai yang kami bawa dalam setiap sajian kopi.
                  </p>
                  <p>
                    Kami bekerja langsung dengan petani kopi di berbagai daerah
                    seperti Toraja, Gayo, Bali, dan Flores. Hubungan ini tidak
                    hanya memastikan kualitas biji kopi yang konsisten, tetapi
                    juga mendukung kesejahteraan petani lokal.
                  </p>
                  <p>
                    Setiap barista kami dilatih khusus untuk memahami karakter
                    setiap biji kopi dan teknik penyeduhan terbaik. Kami percaya
                    bahwa pengetahuan dan passion adalah kunci untuk menghadirkan
                    cangkir kopi yang sempurna.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=500&fit=crop"
                  alt="Coffee brewing"
                  className="rounded-2xl object-cover h-64 shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=500&fit=crop"
                  alt="Latte art"
                  className="rounded-2xl object-cover h-64 mt-8 shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=500&fit=crop"
                  alt="Coffee beans"
                  className="rounded-2xl object-cover h-64 -mt-8 shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=500&fit=crop"
                  alt="Coffee shop"
                  className="rounded-2xl object-cover h-64 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-secondary/30">
          <div className="container-padma">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium tracking-wide uppercase text-xs mb-4">
                Nilai Kami
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Yang Kami <span className="text-primary">Junjung Tinggi</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="card-seamless p-6 text-center animate-fade-in-up hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-background">
          <div className="container-padma">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium tracking-wide uppercase text-xs mb-4">
                Milestone
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perjalanan <span className="text-primary">Waktu</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center mb-8 last:mb-0 animate-fade-in-up ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Content */}
                    <div
                      className={`ml-20 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div className="card-seamless p-5">
                        <span className="text-primary font-bold text-lg">
                          {milestone.year}
                        </span>
                        <h3 className="font-serif text-xl font-semibold text-card-foreground mt-1">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md md:left-1/2 md:-translate-x-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-coffee-dark">
          <div className="container-padma">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
                Misi Kami
              </h2>
              <p className="text-cream/80 text-lg leading-relaxed mb-8">
                "Menjadi destinasi kopi pilihan yang menghadirkan pengalaman
                unik dan memorable, sambil berkontribusi positif pada ekosistem
                kopi Indonesia dan komunitas sekitar."
              </p>
              <div className="flex justify-center gap-4">
                <Award className="h-6 w-6 text-primary" />
                <Award className="h-6 w-6 text-primary" />
                <Award className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
