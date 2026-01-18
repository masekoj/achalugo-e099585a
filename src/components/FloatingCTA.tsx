import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/+14256831611"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 text-white" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:+14256831611"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        style={{
          background: "linear-gradient(135deg, hsl(0 85% 50%) 0%, hsl(0 85% 40%) 100%)",
          boxShadow: "0 8px 25px hsl(0 85% 50% / 0.4)",
        }}
        aria-label="Call to order"
      >
        <Phone className="h-5 w-5 text-white" />
      </motion.a>
    </div>
  );
};
