import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonialsData";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-padma">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium tracking-wide uppercase text-xs mb-4">
            Testimoni
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Apa Kata <span className="text-primary">Pelanggan?</span>
          </h2>
          <p className="text-muted-foreground">
            Pendapat dari pelanggan setia kami tentang pengalaman mereka di Toko
            Kopi Padma.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-seamless p-6 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-primary/10 absolute top-4 right-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "text-primary fill-primary"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-card-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
