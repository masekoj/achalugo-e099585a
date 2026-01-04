import { Heart, Sparkles, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

// Import feature images
import featureHealthy1 from "@/assets/feature-healthy-1.jpg";
import featureHealthy2 from "@/assets/feature-healthy-2.jpg";
import featureDelicious1 from "@/assets/feature-delicious-1.jpg";
import featureDelicious2 from "@/assets/feature-delicious-2.jpg";
import featureAffordable1 from "@/assets/feature-affordable-1.jpg";
import featureAffordable2 from "@/assets/feature-affordable-2.jpg";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  images: string[];
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, images, delay }: FeatureCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl group cursor-pointer animate-scale-in"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Dark Gradient Overlay with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 backdrop-blur-[2px] group-hover:from-black/85 group-hover:via-black/55 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10 text-center min-h-[320px] flex flex-col items-center justify-center">
        {/* Icon Container */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/5">
          <Icon className="h-10 w-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        </div>

        {/* Title with Glow Effect */}
        <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] [text-shadow:_0_2px_10px_rgba(255,255,255,0.2)]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/90 leading-relaxed max-w-xs mx-auto text-base [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">
          {description}
        </p>

        {/* Decorative Bottom Shine */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Corner Shine Effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "100% Healthy",
      description: "Made with premium quality beef and natural ingredients. No artificial preservatives or fillers.",
      images: [featureHealthy1, featureHealthy2],
    },
    {
      icon: Sparkles,
      title: "Delicious Food",
      description: "Traditional Chakalaka spices blend perfectly with high-quality beef for an unforgettable taste.",
      images: [featureDelicious1, featureDelicious2],
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description: "Premium quality at competitive prices. Great value for families and food lovers.",
      images: [featureAffordable1, featureAffordable2],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why Choose Our Sausages?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We take pride in delivering the best quality beef sausages with authentic flavors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              images={feature.images}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
