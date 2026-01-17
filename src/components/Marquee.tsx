import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  "Over 5,000 packages delivered across Lynwood and surrounding areas!",
  "Serving 1,200+ happy households with authentic flavors.",
  "Proudly accomplished: 10,000+ satisfied customers since launch.",
  "Delivering quality beef sausages to Lynwood, Shoreline, Everett, and beyond.",
  "Our customers love our healthy, halal, and affordable options – join the family!",
];

interface MarqueeProps {
  compact?: boolean;
}

export const Marquee = ({ compact = false }: MarqueeProps) => {
  const [direction, setDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "left" ? "right" : "left"));
    }, 16000); // Faster direction swap
    return () => clearInterval(interval);
  }, []);

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div 
      className={`w-full overflow-hidden ${
        compact 
          ? "py-1.5" 
          : "py-2"
      }`}
      style={{ 
        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: 16, // 50% faster (was 25s)
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ willChange: "transform" }}
      >
        {duplicatedTestimonials.map((text, index) => (
          <span
            key={index}
            className={`font-sans px-3 inline-flex items-center gap-2 ${compact ? "text-xs" : "text-sm"}`}
            style={{ 
              color: "hsl(var(--muted-foreground))",
              background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              borderRadius: "20px",
              padding: compact ? "4px 12px" : "6px 14px",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <span className="text-primary">⭐</span> {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
