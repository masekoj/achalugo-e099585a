import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Minus, Plus, Trash2, Phone, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        className="w-full sm:max-w-md flex flex-col"
        style={{
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)",
        }}
      >
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-xl font-display">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Your Cart
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-4">
          <AnimatePresence mode="popLayout">
            {items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full text-muted-foreground"
              >
                <ShoppingBag className="h-16 w-16 mb-4 opacity-20" />
                <p>Your cart is empty</p>
                <p className="text-sm">Add some delicious sausages!</p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-3 p-3 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 flex flex-col">
                      <h4 className="font-semibold text-sm line-clamp-2">{item.name}</h4>
                      <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-auto">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 rounded-full text-destructive hover:bg-destructive/10 transition-colors ml-auto"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {items.length > 0 && (
          <SheetFooter className="flex-col gap-3 border-t pt-4">
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <a href="tel:+14256831611" className="w-full">
              <Button 
                size="lg" 
                className="w-full gap-2"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.85) 100%)",
                  boxShadow: "0 4px 15px hsl(var(--primary) / 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <Phone className="h-4 w-4" />
                Call to Order: +1 (425) 683-1611
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearCart}
              className="w-full"
            >
              Clear Cart
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
