import { MapPin } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Our Story */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-white">Our Story</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              At Achalugo's, we believe great food tells a story. Our Premium Chakalaka Beef Sausages are 
              <span className="text-primary font-semibold"> hand-crafted with tradition</span>, using recipes 
              passed down through generations. Each bite carries the warmth of home-cooked meals and the 
              bold flavors of authentic African spices.
            </p>
            <p className="text-white/60 text-sm italic">
              "From our family kitchen to yours."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'Our Story' },
                { id: 'products', label: 'Our Sausages' },
                { id: 'features', label: 'Why Choose Us' },
                { id: 'contact', label: 'Get In Touch' },
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-white">Connect With Us</h4>
            <ul className="space-y-4 text-white/70">
              <li>
                <a 
                  href="tel:+14256831611" 
                  className="hover:text-primary transition-colors flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span>+1 (425) 683-1611</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:achalugosausges@gmail.com" 
                  className="hover:text-primary transition-colors flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <span className="break-all">achalugosausges@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p>Lynwood, Shoreline, Everett</p>
                  <p className="text-sm text-white/50">& surrounding areas</p>
                </div>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1877F2] hover:bg-[#1877F2]/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#00f2ea] via-[#ff0050] to-[#000] hover:opacity-80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white/60">
              <span className="text-primary">✦</span>
              <span className="font-display font-medium">Hand-crafted in Washington</span>
              <span className="text-primary">✦</span>
            </div>
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Achalugo's Chakalaka Beef Sausages. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
