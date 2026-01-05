import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  "Over 5,000 packages delivered across Lynwood and surrounding areas!",
  "Serving 1,200+ happy households with authentic flavors.",
  "Proudly accomplished: 10,000+ satisfied customers since launch.",
  "Delivering quality beef sausages to Lynwood, Shoreline, Everett, and beyond.",
  "Our customers love our healthy, halal, and affordable options – join the family!",
];

export const Marquee = () => {
  const [direction, setDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "left" ? "right" : "left"));
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="w-full bg-secondary/50 py-3 overflow-hidden border-y border-border/30">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ willChange: "transform" }}
      >
        {duplicatedTestimonials.map((text, index) => (
          <span
            key={index}
            className="text-base font-sans px-4"
            style={{ 
              color: "#666666",
              fontSize: "16px",
            }}
          >
            ⭐ {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
