import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/Marquee";
import { BusinessHoursIndicator } from "@/components/BusinessHoursIndicator";
import { CartIcon } from "@/components/CartIcon";
import { CartDrawer } from "@/components/CartDrawer";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/30"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-display font-bold text-primary">
                Achalugo's
              </h1>
              {/* Business Hours - Desktop */}
              <div className="hidden lg:block">
                <BusinessHoursIndicator />
              </div>
            </div>

            {/* Marquee - Desktop Only */}
            <div className="hidden md:flex flex-1 mx-6 max-w-xl">
              <Marquee compact />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {["home", "about", "products", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-foreground hover:text-primary transition-colors font-medium capitalize text-sm px-3 py-1.5 rounded-full hover:bg-primary/5"
                >
                  {section}
                </button>
              ))}
            </nav>

            {/* CTA Buttons & Cart */}
            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+14256831611">
                <Button 
                  size="sm"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.85) 100%)",
                    boxShadow: "0 4px 15px hsl(var(--primary) / 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>
              <CartIcon onClick={() => setIsCartOpen(true)} />
            </div>

            {/* Mobile: Business Hours + Cart + Menu */}
            <div className="flex md:hidden items-center gap-1.5">
              <BusinessHoursIndicator />
              <CartIcon onClick={() => setIsCartOpen(true)} />
              <button
                className="p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border/30 animate-fade-in">
              <div className="flex flex-col gap-2">
                {["home", "about", "products", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-foreground hover:text-primary transition-colors font-medium text-left capitalize py-2 px-3 rounded-lg hover:bg-primary/5"
                  >
                    {section}
                  </button>
                ))}
                <a href="tel:+14256831611" className="pt-2">
                  <Button 
                    className="w-full"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.85) 100%)",
                      boxShadow: "0 4px 15px hsl(var(--primary) / 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </nav>
          )}
        </div>
        
        {/* Marquee - Mobile Full Width */}
        <div className="md:hidden w-full border-t border-border/20">
          <Marquee compact />
        </div>
      </header>

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
};
