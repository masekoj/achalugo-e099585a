import { Home, ShoppingBag, Images, HelpCircle, Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/", scrollTo: "home" },
  { icon: ShoppingBag, label: "Products", path: "/", scrollTo: "products" },
  { icon: Images, label: "Gallery", path: "/gallery", scrollTo: null },
  { icon: HelpCircle, label: "FAQs", path: "/", scrollTo: "faq" },
  { icon: Phone, label: "Contact", path: "/", scrollTo: "contact" },
];

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string, scrollTo: string | null) => {
    if (path !== location.pathname) {
      navigate(path);
      if (scrollTo) {
        setTimeout(() => {
          const element = document.getElementById(scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (path: string, scrollTo: string | null) => {
    if (path === "/gallery") {
      return location.pathname === "/gallery";
    }
    return location.pathname === "/" && !scrollTo;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Glass background */}
      <div 
        className="border-t border-border/30"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center justify-around py-2 px-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path, item.scrollTo);
            
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path, item.scrollTo)}
                className={cn(
                  "flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-200 min-w-[60px]",
                  active 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 mb-1 transition-transform",
                  active && "scale-110"
                )} />
                <span className="text-[10px] font-medium leading-tight">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Safe area padding for devices with home indicator */}
        <div className="h-safe-area-inset-bottom bg-transparent" />
      </div>
    </nav>
  );
};
