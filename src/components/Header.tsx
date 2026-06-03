import { useState, useEffect } from "react";
import { Menu, X, Phone, Images, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/Marquee";
import { BusinessHoursIndicator } from "@/components/BusinessHoursIndicator";
import { CartIcon } from "@/components/CartIcon";
import { CartDrawer } from "@/components/CartDrawer";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll-driven morph
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("touchmove", handleScroll, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 transition-all duration-500"
        style={{
          background: scrolled
            ? "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.7) 100%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(12px)",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(12px)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="container mx-auto px-4">
          <div
            className="flex items-center justify-between transition-[height] duration-500"
            style={{
              height: scrolled ? "3.25rem" : "4rem",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <button onClick={() => navigateToPage("/")} className="text-xl md:text-2xl font-display font-bold text-primary hover:opacity-80 transition-opacity">
                Achalugo's
              </button>
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
            <nav className="hidden md:flex items-center gap-4">
              {["home", "about", "products", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="nav-underline text-foreground hover:text-primary transition-colors font-medium capitalize text-sm px-3 py-1.5"
                >
                  {section}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("faq")}
                className="nav-underline text-foreground hover:text-primary transition-colors font-medium text-sm px-3 py-1.5 flex items-center gap-1"
              >
                <HelpCircle className="w-4 h-4" />
                FAQs
              </button>
              <button
                onClick={() => navigateToPage("/gallery")}
                className="nav-underline text-foreground hover:text-primary transition-colors font-medium text-sm px-3 py-1.5 flex items-center gap-1"
              >
                <Images className="w-4 h-4" />
                Gallery
              </button>
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
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left py-2 px-3 rounded-lg hover:bg-primary/5 flex items-center gap-2"
                >
                  <HelpCircle className="w-4 h-4" />
                  FAQs
                </button>
                <button
                  onClick={() => navigateToPage("/gallery")}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left py-2 px-3 rounded-lg hover:bg-primary/5 flex items-center gap-2"
                >
                  <Images className="w-4 h-4" />
                  Gallery
                </button>
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

        {/* Page-load line draw */}
        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden pointer-events-none">
          <div
            className="h-full w-full animate-line-draw"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, hsl(var(--primary)) 50%, transparent 100%)",
            }}
          />
        </div>
      </header>

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
};
