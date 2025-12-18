import { Link } from "react-router-dom";
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Heart } from "lucide-react";
import { branches } from "@/data/branchesData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-dark text-cream">
      <div className="container-padma py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold text-cream">Padma</span>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              Menyajikan kopi specialty terbaik dengan cita rasa yang konsisten
              dan suasana yang nyaman untuk setiap momen Anda.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-cream/10 hover:bg-primary text-cream hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-cream/10 hover:bg-primary text-cream hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-cream/10 hover:bg-primary text-cream hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-cream">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-cream/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-cream/70 hover:text-primary transition-colors"
                >
                  Menu Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-cream/70 hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-cream/70 hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/reservation"
                  className="text-cream/70 hover:text-primary transition-colors"
                >
                  Reservasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-cream">Cabang Kami</h4>
            <ul className="space-y-3">
              {branches.map((branch) => (
                <li key={branch.id} className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-sm text-cream">{branch.name}</p>
                    <p className="text-cream/60 text-xs">
                      {branch.city}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-cream">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+62318472123"
                  className="text-cream/70 hover:text-primary transition-colors text-sm"
                >
                  +62 31 8472 1234
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:hello@tokokopipadma.id"
                  className="text-cream/70 hover:text-primary transition-colors text-sm"
                >
                  hello@tokokopipadma.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm flex items-center gap-1">
              © {currentYear} Toko Kopi Padma. Dibuat dengan 
              <Heart className="h-3 w-3 text-primary fill-primary" /> 
              di Indonesia.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-cream/50 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-cream/50 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
