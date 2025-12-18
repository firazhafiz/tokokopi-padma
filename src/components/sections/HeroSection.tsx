import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen rounded-b-[40px] flex items-center overflow-hidden">
      {/* Background Image with better overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop&q=80"
          alt="Premium coffee being prepared"
          className="w-full h-full object-cover scale-105"
        />
        {/* Multi-layer gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/95 via-coffee-dark/85 to-coffee-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-transparent to-coffee-dark/40" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-terracotta-light/10 rounded-full blur-2xl animate-pulse-soft animation-delay-300" />

      {/* Content */}
      <div className="container-padma  relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm mb-8 animate-fade-in-down">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium tracking-wide uppercase text-xs">
                Specialty Coffee Experience
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up">
              <span className="text-cream">Nikmati</span>
              <span className="block text-cream">Kopi Terbaik</span>
              <span className="block text-primary">Setiap Hari</span>
            </h1>

            {/* Description */}
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-200">
              Setiap cangkir adalah perjalanan rasa. Toko Kopi Padma menghadirkan
              pengalaman kopi specialty dengan biji pilihan dari seluruh Nusantara.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Link to="/menu">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                  Jelajahi Menu
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/reservation">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Reservasi Sekarang
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-cream/20 animate-fade-in-up animation-delay-400">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-coffee-dark bg-cream/90 flex items-center justify-center"
                  >
                    <Coffee className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-cream font-semibold">10.000+ Pelanggan</p>
                <p className="text-cream/60 text-sm">Mempercayai rasa kami</p>
              </div>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main Stats Card */}
              <div className="bg-card/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl animate-slide-in-right border border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-2xl bg-primary/5 hover-lift">
                    <p className="font-serif text-4xl font-bold text-primary">3+</p>
                    <p className="text-muted-foreground text-sm mt-1">Cabang Aktif</p>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-primary/5 hover-lift">
                    <p className="font-serif text-4xl font-bold text-primary">50+</p>
                    <p className="text-muted-foreground text-sm mt-1">Menu Pilihan</p>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-primary/5 hover-lift">
                    <p className="font-serif text-4xl font-bold text-primary">5+</p>
                    <p className="text-muted-foreground text-sm mt-1">Tahun Berjalan</p>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-primary/5 hover-lift">
                    <p className="font-serif text-4xl font-bold text-primary">100%</p>
                    <p className="text-muted-foreground text-sm mt-1">Biji Lokal</p>
                  </div>
                </div>

                {/* Featured Item */}
                <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop"
                        alt="Signature Latte"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-serif font-semibold text-foreground">Padma Signature Latte</p>
                      <p className="text-muted-foreground text-sm">Menu favorit minggu ini</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg animate-float">
                <span className="font-semibold text-sm">🔥 Best Seller</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cream/50 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-cream/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
