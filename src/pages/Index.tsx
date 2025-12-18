import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MenuPreviewSection } from "@/components/sections/MenuPreviewSection";
import { BranchesSection } from "@/components/sections/BranchesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <MenuPreviewSection />
      <BranchesSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
