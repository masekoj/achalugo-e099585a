import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { motion, AnimatePresence } from "framer-motion";

interface CartIconProps {
  onClick?: () => void;
}

export const CartIcon = ({ onClick }: CartIconProps) => {
  const { totalItems } = useCart();

  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded-full transition-all duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)",
        boxShadow: "0 4px 15px hsl(var(--primary) / 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
      aria-label={`Shopping cart with ${totalItems} items`}
    >
      <ShoppingCart className="h-5 w-5 text-primary-foreground" />
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs font-bold rounded-full bg-accent text-accent-foreground"
            style={{
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            {totalItems > 9 ? "9+" : totalItems}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
