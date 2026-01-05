import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "Thanks for reaching out! We'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Give Us a Call",
      content: "+1 (425) 683-1611",
      link: "tel:+14256831611",
      description: "We'd love to hear from you",
    },
    {
      icon: MapPin,
      title: "Service Areas",
      content: "Lynwood, Shoreline, Everett",
      description: "& surrounding areas in Washington",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 9AM - 8PM",
      description: "Sunday: By appointment",
    },
    {
      icon: Mail,
      title: "Drop Us a Line",
      content: "achalugosausges@gmail.com",
      link: "mailto:achalugosausges@gmail.com",
      description: "For orders & inquiries",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <span className="text-primary font-medium mb-2 inline-block">Let's Connect</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            From Our Kitchen to Yours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you're planning a backyard BBQ, a family gathering, or just craving something delicious — 
            we're here to help make it special.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div 
                  className="group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-foreground mb-1">{info.title}</h4>
                      <p className="text-foreground font-medium break-all">{info.content}</p>
                      <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                    </div>
                  </div>
                </div>
              );

              if (info.link) {
                return (
                  <AnimatedSection 
                    key={index} 
                    animation="fadeUp" 
                    delay={index * 0.1}
                    duration={0.8}
                  >
                    <a 
                      href={info.link} 
                      className="block hover:no-underline"
                    >
                      {content}
                    </a>
                  </AnimatedSection>
                );
              }

              return (
                <AnimatedSection 
                  key={index} 
                  animation="fadeUp" 
                  delay={index * 0.1}
                  duration={0.8}
                >
                  {content}
                </AnimatedSection>
              );
            })}
          </div>

          {/* Contact Form */}
          <AnimatedSection animation="scale" delay={0.2} duration={0.8}>
            <div className="bg-[#FCF9F5] rounded-[20px] p-8 md:p-10 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.08)] border border-[#E8E4DD]">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Let's Chat Sausages</h3>
              <p className="text-muted-foreground mb-8">Tell us about your next gathering or order!</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Who are we speaking with?
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                    className="bg-white border-[#E8E4DD] focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Your phone number
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(123) 456-7890" 
                    className="bg-white border-[#E8E4DD] focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Where can we reach you?
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                    className="bg-white border-[#E8E4DD] focus:border-primary focus:ring-primary/20 rounded-xl h-12"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your order or your next BBQ plans!
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="I'm planning a family cookout this weekend and would love to try your sausages..." 
                    rows={4} 
                    required 
                    className="bg-white border-[#E8E4DD] focus:border-primary focus:ring-primary/20 rounded-xl resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 rounded-xl shadow-[0_4px_20px_-4px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_25px_-4px_rgba(220,38,38,0.5)] transition-all duration-300"
                >
                  Send a Note ✉️
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
