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
  // Duplicate once for seamless -50% loop
  const items = [...testimonials, ...testimonials];

  return (
    <div
      className={`w-full overflow-hidden ${compact ? "py-1.5" : "py-2"}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="flex gap-8 whitespace-nowrap animate-marquee"
        style={{ ["--marquee-duration" as any]: "18s" }}
      >
        {items.map((text, index) => (
          <span
            key={index}
            className={`font-sans inline-flex items-center gap-2 ${compact ? "text-xs" : "text-sm"}`}
            style={{
              color: "hsl(var(--muted-foreground))",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              borderRadius: "20px",
              padding: compact ? "4px 12px" : "6px 14px",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <span className="text-primary">⭐</span> {text}
          </span>
        ))}
      </div>
    </div>
  );
};
