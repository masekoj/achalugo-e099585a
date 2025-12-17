import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export const Products = () => {
  const products = [
    {
      image: product1,
      title: "Fresh Chakalaka Sausages",
      description: "Our signature fresh sausages, perfect for grilling or pan-frying. Bursting with authentic flavors.",
    },
    {
      image: product2,
      title: "Grilled Ready Sausages",
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Premium <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every sausage is crafted with care, using only the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.title}
              className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
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
          ))}
        </div>

        <div className="text-center">
          <a href="tel:+14256831611">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call to Order: +14256831611
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
