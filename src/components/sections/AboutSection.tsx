import { Link } from "react-router-dom";
import { ArrowRight, Award, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padma">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=1000&fit=crop"
                alt="Coffee being poured"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl max-w-[200px] animate-float border border-border/50">
              <p className="font-serif text-4xl font-bold text-primary">5+</p>
              <p className="text-muted-foreground text-sm mt-1">
                Tahun Pengalaman
              </p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium tracking-wide uppercase text-xs mb-4">
              Tentang Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Passion dalam Setiap
              <span className="text-primary"> Seduhan</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Toko Kopi Padma lahir dari kecintaan mendalam terhadap kopi
              Indonesia. Kami memilih biji kopi terbaik dari petani lokal di
              berbagai daerah, dari Toraja hingga Gayo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Setiap cabang kami dirancang sebagai ruang yang nyaman untuk
              berbagai aktivitas - dari meeting bisnis hingga quality time
              bersama orang terkasih.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover-lift">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Premium</p>
                  <p className="text-muted-foreground text-xs">Biji Pilihan</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover-lift">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Fresh</p>
                  <p className="text-muted-foreground text-xs">Roast Harian</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover-lift">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Love</p>
                  <p className="text-muted-foreground text-xs">Penuh Cinta</p>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button variant="outline" size="lg" className="group">
                Pelajari Lebih Lanjut
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
