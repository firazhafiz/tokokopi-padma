import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuItems, categoryLabels } from "@/data/menuData";
import { Badge } from "@/components/ui/badge";

export function MenuPreviewSection() {
  const popularItems = menuItems.filter((item) => item.isPopular).slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-padma">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium tracking-wide uppercase text-xs mb-4">
            Menu Pilihan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Favorit <span className="text-primary">Pelanggan</span>
          </h2>
          <p className="text-muted-foreground">
            Menu-menu terpopuler yang selalu menjadi pilihan pelanggan setia
            kami. Diciptakan dengan bahan berkualitas dan penuh cinta.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item, index) => (
            <div
              key={item.id}
              className="card-seamless overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.isPopular && (
                    <Badge className="bg-primary text-primary-foreground shadow-md">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Popular
                    </Badge>
                  )}
                  {item.isNew && (
                    <Badge className="bg-foreground text-background shadow-md">
                      New
                    </Badge>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-background/90 text-foreground backdrop-blur-sm">
                    {categoryLabels[item.category]}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                <p className="font-bold text-primary text-lg">
                  {formatPrice(item.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-400">
          <Link to="/menu">
            <Button variant="default" size="lg" className="group shadow-lg hover:shadow-xl">
              Lihat Semua Menu
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
