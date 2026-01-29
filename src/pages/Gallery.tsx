import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";

import slideshow1 from "@/assets/slideshow-1.jpg";
import slideshow2 from "@/assets/slideshow-2.jpg";
import slideshow3 from "@/assets/slideshow-3.jpg";
import slideshow4 from "@/assets/slideshow-4.jpg";
import slideshow5 from "@/assets/slideshow-5.jpg";
import slideshow6 from "@/assets/slideshow-6.jpg";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import brandBanner from "@/assets/brand-banner.jpeg";
import heroSausages from "@/assets/hero-sausages.jpg";
import featureHealthy1 from "@/assets/feature-healthy-1.jpeg";
import featureHealthy2 from "@/assets/feature-healthy-2.jpeg";
import featureDelicious1 from "@/assets/feature-delicious-1.jpg";
import featureDelicious2 from "@/assets/feature-delicious-2.jpeg";
import featureAffordable1 from "@/assets/feature-affordable-1.jpg";
import featureAffordable2 from "@/assets/feature-affordable-2.jpg";

const galleryImages = [
  { src: slideshow1, alt: "Premium grilled sausages" },
  { src: slideshow2, alt: "Fresh sausage preparation" },
  { src: slideshow3, alt: "Sausages cooking" },
  { src: slideshow4, alt: "Delicious sausage platter" },
  { src: slideshow5, alt: "Sizzling sausages" },
  { src: slideshow6, alt: "Quality sausage products" },
  { src: product1, alt: "Chakalaka beef sausage pack" },
  { src: product2, alt: "Premium sausage bundle" },
  { src: product3, alt: "Family sausage pack" },
  { src: brandBanner, alt: "Achalugo's brand" },
  { src: heroSausages, alt: "Hero sausages display" },
  { src: featureHealthy1, alt: "Healthy ingredients" },
  { src: featureHealthy2, alt: "Fresh quality meat" },
  { src: featureDelicious1, alt: "Delicious serving" },
  { src: featureDelicious2, alt: "Tasty sausage meal" },
  { src: featureAffordable1, alt: "Affordable packages" },
  { src: featureAffordable2, alt: "Value packs" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main className="pt-28 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Photo <span className="text-primary">Gallery</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Explore our delicious Chakalaka beef sausages through our gallery
            </motion.p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="aspect-square overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
