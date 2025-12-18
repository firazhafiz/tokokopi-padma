import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Coffee } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="container-padma">
          <div className="text-center max-w-md mx-auto animate-fade-in-up">
            <Coffee className="h-20 w-20 text-primary mx-auto mb-6 animate-float" />
            <h1 className="font-serif text-6xl font-bold text-foreground mb-4">
              404
            </h1>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-muted-foreground mb-8">
              Maaf, halaman yang Anda cari tidak tersedia. Mungkin halaman telah
              dipindahkan atau URL salah ketik.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button>
                  <Home className="h-4 w-4" />
                  Kembali ke Beranda
                </Button>
              </Link>
              <Link to="/menu">
                <Button variant="outline">Lihat Menu</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
