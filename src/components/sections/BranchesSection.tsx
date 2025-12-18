import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { branches } from "@/data/branchesData";
import { Button } from "@/components/ui/button";

export function BranchesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padma">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium tracking-wide uppercase text-xs mb-4">
            Lokasi Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Temukan Cabang <span className="text-primary">Terdekat</span>
          </h2>
          <p className="text-muted-foreground">
            Kunjungi salah satu cabang kami di Surabaya dan Malang. Setiap
            cabang menawarkan suasana unik dengan standar kualitas yang sama.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={branch.id}
              className="card-seamless overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/90 via-coffee-dark/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl font-bold text-cream">
                    {branch.name}
                  </h3>
                  <p className="text-cream/80 text-sm">
                    {branch.city}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">{branch.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {branch.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-muted-foreground text-sm">{branch.hours}</p>
                </div>

                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full mt-2 group/btn">
                    Lihat di Maps
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
