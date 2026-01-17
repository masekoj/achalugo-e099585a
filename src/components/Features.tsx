import { useState, useEffect } from "react";
import { Heart, Utensils, DollarSign, LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ImageSlideshow } from "@/components/ImageSlideshow";

import featureHealthy1 from "@/assets/feature-healthy-1.jpeg";
import featureHealthy2 from "@/assets/feature-healthy-2.jpeg";
import featureDelicious1 from "@/assets/feature-delicious-1.jpg";
import featureDelicious2 from "@/assets/feature-delicious-2.jpeg";
import featureAffordable1 from "@/assets/feature-affordable-1.jpg";
import featureAffordable2 from "@/assets/feature-affordable-2.jpg";
import slideshow1 from "@/assets/slideshow-1.jpg";
import slideshow3 from "@/assets/slideshow-3.jpg";
import slideshow5 from "@/assets/slideshow-5.jpg";
import slideshow6 from "@/assets/slideshow-6.jpg";

const featuresSlideshowImages = [
  { src: slideshow1, alt: "Premium grilled beef sausages" },
  { src: slideshow6, alt: "Quality sausage products" },
  { src: slideshow3, alt: "Happy customers enjoying sausages" },
  { src: slideshow5, alt: "Sizzling sausages on the grill" },
];

interface FeatureCardProps {
  icon: LucideIcon;
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
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <AnimatedSection animation="fadeUp" delay={delay} duration={0.8}>
      <div className="group relative h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <div
              key={image}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Glassmorphism Overlay - Lighter for better image visibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/35 to-black/15 backdrop-blur-[1px] transition-all duration-500 group-hover:from-black/60 group-hover:via-black/25" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center p-8 text-center">
          {/* Icon */}
          <div className="mb-6 p-4 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 transition-transform duration-500 group-hover:scale-110">
            <Icon className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          </div>

          {/* Title with glow effect */}
          <h3 
            className="text-2xl md:text-3xl font-display font-bold mb-3 text-white"
            style={{
              textShadow: "0 0 20px rgba(255,255,255,0.5), 0 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p 
            className="text-white/90 leading-relaxed text-base"
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const features = [
  {
    icon: Heart,
    title: "100% Healthy",
    description: "Made with premium ingredients, no preservatives, and certified Halal.",
    images: [featureHealthy1, featureHealthy2],
  },
  {
    icon: Utensils,
    title: "Delicious",
    description: "Authentic Chakalaka flavor that brings families together.",
    images: [featureDelicious1, featureDelicious2],
  },
  {
    icon: DollarSign,
    title: "Affordable",
    description: "Premium quality at prices everyone can enjoy.",
    images: [featureAffordable1, featureAffordable2],
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      {/* Section Slideshow Banner */}
      <AnimatedSection animation="fadeIn" duration={1}>
        <div className="relative h-64 md:h-80 w-full mb-16 overflow-hidden">
          <ImageSlideshow
            images={featuresSlideshowImages}
            interval={5000}
            className="w-full h-full"
            overlayOpacity={0.35}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center px-4">
              <h2 
                className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
                style={{
                  textShadow: "0 0 30px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)",
                }}
              >
                Why Choose Our Sausages?
              </h2>
              <p 
                className="text-xl md:text-2xl text-white/90"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                }}
              >
                Premium packages – Healthy, Delicious, Halal & Affordable
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp" className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Promise</p>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Quality You Can Taste
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              images={feature.images}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
