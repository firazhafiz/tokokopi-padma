import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Determine text color based on scroll and page
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm "
          : isHome
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md"
      )}
    >
      <nav className="container-padma">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "flex items-center gap-2 transition-colors",
              isTransparent 
                ? "text-cream hover:text-primary" 
                : "text-foreground hover:text-primary"
            )}
          >
            <Coffee className="h-7 w-7 text-primary" />
            <span className="font-serif text-xl font-bold">Padma</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "font-medium transition-colors",
                    isTransparent
                      ? "text-cream/90 hover:text-cream hover:bg-cream/10"
                      : "text-foreground/80 hover:text-foreground hover:bg-accent/10",
                    location.pathname === link.path &&
                      (isTransparent
                        ? "text-primary font-semibold"
                        : "text-primary font-semibold")
                  )}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle isTransparent={isTransparent} />
            <Link to="/reservation">
              <Button 
                variant="default" 
                size="default"
                className="shadow-md hover:shadow-lg"
              >
                Reservasi
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle isTransparent={isTransparent} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "h-9 w-9",
                isTransparent ? "text-cream hover:bg-cream/10" : ""
              )}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md rounded-b-2xl",
            isOpen ? "max-h-96 pb-4 border-b border-border/50" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 pt-2 px-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    location.pathname === link.path &&
                      "text-primary font-semibold bg-primary/5"
                  )}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <Link to="/reservation" className="mt-2">
              <Button variant="default" className="w-full">
                Reservasi
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
