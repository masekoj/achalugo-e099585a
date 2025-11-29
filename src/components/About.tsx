import { CheckCircle2 } from "lucide-react";
import brandBanner from "@/assets/brand-banner.jpeg";

export const About = () => {
  const highlights = [
    "Premium quality beef",
    "Authentic Chakalaka spices",
    "No artificial preservatives",
    "Family-owned business",
    "Fresh daily preparation",
    "Competitive pricing",
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={brandBanner} 
                alt="Achalugo's Chakalaka Beef Sausages"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-primary">Achalugo's</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Welcome to Achalugo's Chakalaka Beef Sausages, where tradition meets taste. 
              We are passionate about creating the finest quality beef sausages infused with 
              authentic Chakalaka spices.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment is simple: provide families with healthy, delicious, and affordable 
              sausages that bring people together. Every bite tells a story of quality and care.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
              <p className="text-foreground font-medium italic">
                "Our mission is to deliver exceptional taste and quality in every sausage, 
                making every meal a memorable experience."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
