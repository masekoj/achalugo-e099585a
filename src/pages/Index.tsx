import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <ProductCarousel />
        <Features />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <BottomNav />
    </div>
  );
};

export default Index;
