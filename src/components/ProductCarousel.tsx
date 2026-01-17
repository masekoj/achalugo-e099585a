import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingCart, Pause, Play } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { AnimatedSection } from "@/components/AnimatedSection";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import { toast } from "@/hooks/use-toast";

const products = [
  {
    id: "chakalaka-12",
    image: product1,
    name: "Fresh Chakalaka Sausages",
    description: "Our signature fresh sausages, perfect for grilling or pan-frying. Bursting with authentic flavors. Pack of 12 premium beef sausages.",
    price: 143.00,
    badge: "Best Seller",
  },
  {
    id: "grill-ready-12",
    image: product2,
    name: "Grill Ready Sausages",
    description: "Pre-seasoned and ready to cook. Ideal for quick meals and gatherings. Pack of 12 premium beef sausages.",
    price: 135.00,
    badge: "Popular",
  },
  {
    id: "bbq-special-12",
    image: product3,
    name: "BBQ Special Sausages",
    description: "Premium quality sausages specially prepared for the perfect BBQ experience. Pack of 12 premium beef sausages.",
    price: 149.00,
    badge: "Premium",
  },
];

export const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { addToCart } = useCart();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to Cart! 🛒",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Premium <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every sausage is crafted with care, using only the finest ingredients
          </p>
        </AnimatedSection>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div 
            className="relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid md:grid-cols-2 gap-6 p-6 md:p-10"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden rounded-2xl group">
                  <img
                    src={products[currentIndex].image}
                    alt={products[currentIndex].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Badge */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-primary-foreground"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)",
                      boxShadow: "0 4px 15px hsl(var(--primary) / 0.3)",
                    }}
                  >
                    {products[currentIndex].badge}
                  </div>
                  {/* Glassmorphism overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
                      backdropFilter: "blur(2px)",
                    }}
                  >
                    <span className="text-white text-lg font-semibold px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
                      🔥 100% Halal Beef
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                    {products[currentIndex].name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {products[currentIndex].description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">
                      ${products[currentIndex].price.toFixed(2)}
                    </span>
                    <span className="text-muted-foreground ml-2">/ pack</span>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    size="lg"
                    onClick={() => handleAddToCart(products[currentIndex])}
                    className="w-full sm:w-auto gap-2 group"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.85) 100%)",
                      boxShadow: "0 8px 25px hsl(var(--primary) / 0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                  >
                    <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
              aria-label="Previous product"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
              aria-label="Next product"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>

            {/* Play/Pause indicator */}
            <div className="absolute top-4 right-4">
              {isPaused ? (
                <Pause className="h-4 w-4 text-muted-foreground animate-pulse" />
              ) : (
                <Play className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
