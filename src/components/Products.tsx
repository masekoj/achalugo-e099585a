import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Products = () => {
  const products = [
    {
      image: product1,
      title: "Fresh Chakalaka Sausages",
      description: "Our signature fresh sausages, perfect for grilling or pan-frying. Bursting with authentic flavors.",
    },
    {
      image: product2,
      title: "Grill Ready Sausages",
      description: "Pre-seasoned and ready to cook. Ideal for quick meals and gatherings.",
    },
    {
      image: product3,
      title: "BBQ Special Sausages",
      description: "Premium quality sausages specially prepared for the perfect BBQ experience.",
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Premium <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every sausage is crafted with care, using only the finest ingredients
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <AnimatedSection 
              key={product.title} 
              animation="fadeUp" 
              delay={index * 0.15}
              duration={0.8}
            >
              <Card 
                className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group h-full"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scale" delay={0.3} duration={0.8} className="text-center">
          <a href="tel:+14256831611">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call to Order: +14256831611
            </Button>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};
