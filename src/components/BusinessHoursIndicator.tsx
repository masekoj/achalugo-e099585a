interface BusinessHoursIndicatorProps {
  className?: string;
}

export const BusinessHoursIndicator = ({ className = "" }: BusinessHoursIndicatorProps) => {
  // Always show as OPEN (static)
  return (
    <div 
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%)",
        border: "1px solid rgba(34, 197, 94, 0.3)",
      }}
    >
      <div className="relative flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-green-500 animate-ping opacity-60" />
      </div>
      <span className="text-green-600">Open</span>
    </div>
  );
};