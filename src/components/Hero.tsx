import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import { Marquee } from "@/components/Marquee";
import { AnimatedSection } from "@/components/AnimatedSection";
import slideshow1 from "@/assets/slideshow-1.jpg";
import slideshow2 from "@/assets/slideshow-2.jpg";
import slideshow3 from "@/assets/slideshow-3.jpg";
import slideshow4 from "@/assets/slideshow-4.jpg";
import slideshow5 from "@/assets/slideshow-5.jpg";
import slideshow6 from "@/assets/slideshow-6.jpg";

const heroSlideImages = [
  { src: slideshow1, alt: "Delicious Chakalaka Beef Sausages on grill" },
  { src: slideshow2, alt: "Fresh ingredients for Chakalaka sausages" },
  { src: slideshow3, alt: "Happy family enjoying Achalugo's sausages" },
  { src: slideshow4, alt: "Quality sausage delivery service" },
  { src: slideshow5, alt: "Sizzling beef sausages cooking" },
  { src: slideshow6, alt: "Premium beef sausage packages" },
];

export const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <ImageSlideshow
          images={heroSlideImages}
          interval={6000}
          className="w-full h-full"
          overlayOpacity={0.4}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center">
        <div className="max-w-3xl">
          {/* Animated Content */}
          <AnimatedSection animation="fadeUp" duration={0.8}>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-primary font-semibold text-sm">🔥 Super Delicious Beef Sausages</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.1} duration={0.8}>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Achalugo's <br />
              <span className="text-primary">Chakalaka</span> <br />
              Beef Sausages
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.2} duration={0.8}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Experience the authentic taste of premium beef sausages crafted with passion and tradition. 
              100% healthy, delicious, Halal and affordable.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="fadeUp" delay={0.3} duration={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:+14256831611">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Order Now: +14256831611
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Products
              </Button>
            </div>
          </AnimatedSection>

          {/* Service Area */}
          <AnimatedSection animation="fadeUp" delay={0.4} duration={0.8}>
            <div className="flex items-center gap-2 text-foreground/80">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="text-sm md:text-base">
                Serving Lynwood, Shoreline, Everett & surrounding areas
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Testimonials Marquee */}
      <div className="relative z-10 mt-auto">
        <Marquee />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-16 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]"></div>
    </section>
  );
};
