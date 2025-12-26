import { Heart, Sparkles, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "100% Healthy",
      description: "Made with premium quality beef and natural ingredients. No artificial preservatives or fillers.",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Sparkles,
      title: "Delicious Food",
      description: "Traditional Chakalaka spices blend perfectly with high-quality beef for an unforgettable taste.",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description: "Premium quality at competitive prices. Great value for families and food lovers.",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why Choose Our Sausages?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We take pride in delivering the best quality beef sausages with authentic flavors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mb-6`}>
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
