import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { ImageSlideshow } from "@/components/ImageSlideshow";
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
    <section id="home" className="pt-24 min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Slideshow - High visibility */}
      <div className="absolute inset-0 z-0">
        <ImageSlideshow
          images={heroSlideImages}
          interval={6000}
          className="w-full h-full"
          overlayOpacity={0.15}
        />
        {/* Smart gradient overlay for text readability - lighter at top */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 40%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        {/* Bottom fade for section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center">
        <div className="max-w-3xl">
          {/* Animated Content */}
          <AnimatedSection animation="fadeUp" duration={0.8}>
            <div 
              className="inline-block mb-4 px-4 py-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.08) 100%)",
                backdropFilter: "blur(8px)",
                border: "1px solid hsl(var(--primary) / 0.2)",
                boxShadow: "0 4px 15px hsl(var(--primary) / 0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              <p className="text-primary font-semibold text-sm">🔥 Super Delicious Beef Sausages</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.1} duration={0.8}>
            <h1 
              className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
              style={{
                color: "hsl(var(--foreground))",
                textShadow: "2px 2px 8px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5)",
              }}
            >
              Achalugo's <br />
              <span 
                className="text-primary"
                style={{
                  textShadow: "2px 2px 8px rgba(255,255,255,0.9), 0 0 40px hsl(var(--primary) / 0.3)",
                }}
              >
                Chakalaka and BBQ
              </span> <br />
              Beef Sausages
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.2} duration={0.8}>
            <p 
              className="text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl"
              style={{
                color: "hsl(var(--foreground) / 0.9)",
                textShadow: "1px 1px 4px rgba(255,255,255,0.8)",
              }}
            >
              feel the authentic taste of Our beef sausages crafted with passion and tradition. 
              healthy, delicious, Halal and affordable.
            </p>
          </AnimatedSection>

          {/* CTA Buttons with glassmorphism */}
          <AnimatedSection animation="fadeUp" delay={0.3} duration={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:+14256831611">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.85) 100%)",
                    boxShadow: "0 8px 30px hsl(var(--primary) / 0.4), inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Order Now: +1 (425) 683-1611
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto hover:scale-105"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  backdropFilter: "blur(8px)",
                  background: "rgba(255,255,255,0.7)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                View Products
              </Button>
            </div>
          </AnimatedSection>

          {/* Service Area with glass effect */}
          <AnimatedSection animation="fadeUp" delay={0.4} duration={0.8}>
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.5) 100%)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <MapPin className="h-5 w-5 text-primary" />
              <p className="text-sm md:text-base text-foreground/80">
                Serving Lynwood, Shoreline, Everett & surrounding areas
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
