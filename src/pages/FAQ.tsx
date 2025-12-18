import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { faqs, FAQ } from "@/data/faqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

type FAQCategory = "all" | "general" | "menu" | "reservation" | "payment";

const categoryLabels: Record<FAQCategory, string> = {
  all: "Semua",
  general: "Umum",
  menu: "Menu",
  reservation: "Reservasi",
  payment: "Pembayaran",
};

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>("all");

  const filteredFAQs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <Layout>
      <div className="pt-24 pb-16">
        {/* Header */}
        <div className="bg-secondary/30 py-16">
          <div className="container-padma">
            <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
              <span className="text-primary font-medium tracking-wide uppercase text-sm">
                FAQ
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Pertanyaan yang <span className="text-primary">Sering Diajukan</span>
              </h1>
              <p className="text-muted-foreground">
                Temukan jawaban untuk pertanyaan umum seputar Toko Kopi Padma.
                Tidak menemukan yang Anda cari? Hubungi kami langsung.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="container-padma py-8">
          <div className="flex flex-wrap justify-center gap-2">
            {(Object.keys(categoryLabels) as FAQCategory[]).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {categoryLabels[category]}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="container-padma">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="card-seamless px-6 animate-fade-in-up border-none"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-semibold hover:no-underline hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Tidak ada FAQ dalam kategori ini.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="container-padma mt-16">
          <div className="max-w-3xl mx-auto">
            <div className="card-seamless p-8 text-center animate-fade-in-up">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                Masih Ada Pertanyaan?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Tim kami siap membantu menjawab pertanyaan Anda. Jangan ragu
                untuk menghubungi kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/#contact">
                  <Button variant="default">Hubungi Kami</Button>
                </Link>
                <Link to="/reservation">
                  <Button variant="outline">Buat Reservasi</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
