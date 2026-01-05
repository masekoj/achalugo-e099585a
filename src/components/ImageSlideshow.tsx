import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSlideshowProps {
  images: { src: string; alt: string }[];
  interval?: number;
  className?: string;
  overlayOpacity?: number;
}

export const ImageSlideshow = ({
  images,
  interval = 6000,
  className = "",
  overlayOpacity = 0.3,
}: ImageSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/40"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      />
    </div>
  );
};
