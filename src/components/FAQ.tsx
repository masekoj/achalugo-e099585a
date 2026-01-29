import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Achalugo's sausages unique?",
    answer: "Our sausages are made with premium quality beef infused with authentic Chakalaka spices. We use no artificial preservatives, and all our products are certified Halal. Each sausage is crafted with care to deliver a unique, flavorful experience."
  },
  {
    question: "Are your sausages Halal certified?",
    answer: "Yes! All Achalugo's Chakalaka Beef Sausages are 100% Halal certified. We take pride in providing high-quality, Halal-compliant products for our customers."
  },
  {
    question: "How do I place an order?",
    answer: "You can place an order by calling us directly at +1 (425) 683-1611 or via WhatsApp at the same number. Simply let us know which package you'd like, and we'll arrange delivery or pickup."
  },
  {
    question: "What packages do you offer?",
    answer: "We offer various packages to suit different needs: Individual packs, Family packs, and Bulk/Wholesale options. Check our Products section for current pricing and availability."
  },
  {
    question: "Do you offer delivery?",
    answer: "Yes, we offer delivery services! Delivery availability and fees may vary based on your location. Contact us to discuss delivery options for your area."
  },
  {
    question: "How should I store the sausages?",
    answer: "Keep our sausages refrigerated at 0-4°C (32-40°F). For longer storage, they can be frozen for up to 3 months. Always check the expiration date on the package."
  },
  {
    question: "What's the best way to cook your sausages?",
    answer: "Our sausages are versatile! You can grill them, pan-fry, bake, or even boil them. For best results, cook over medium heat until the internal temperature reaches 165°F (74°C). Don't pierce them while cooking to retain juiciness."
  },
  {
    question: "Do you offer wholesale pricing?",
    answer: "Yes! We offer competitive wholesale pricing for businesses, events, and bulk orders. Contact us directly to discuss wholesale options and get a custom quote."
  },
  {
    question: "Are there any allergens in your products?",
    answer: "Our sausages contain beef and various spices. They are processed in a facility that may handle other allergens. Please contact us directly if you have specific allergy concerns."
  },
  {
    question: "Can I visit your location?",
    answer: "We'd love to meet you! Contact us to schedule a visit or pickup. Our team is always happy to show you our products and answer any questions in person."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp" className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Got Questions?
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.2} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};
