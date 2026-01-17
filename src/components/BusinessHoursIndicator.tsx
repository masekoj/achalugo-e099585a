import { useEffect, useState } from "react";

interface BusinessHoursIndicatorProps {
  className?: string;
}

export const BusinessHoursIndicator = ({ className = "" }: BusinessHoursIndicatorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      
      // Mon-Sat (1-6): 9 AM - 7 PM, Sun (0): Closed
      if (day === 0) {
        setIsOpen(false);
      } else {
        setIsOpen(hours >= 9 && hours < 19);
      }
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase ${className}`}
      style={{
        background: isOpen 
          ? "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%)"
          : "linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 100%)",
        border: isOpen ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid rgba(239, 68, 68, 0.3)",
      }}
    >
      <div className="relative flex items-center justify-center">
        <div 
          className={`w-1.5 h-1.5 rounded-full ${
            isOpen ? "bg-green-500" : "bg-red-400"
          }`}
        />
        {isOpen && (
          <div className="absolute w-1.5 h-1.5 rounded-full bg-green-500 animate-ping opacity-60" />
        )}
      </div>
      <span className={isOpen ? "text-green-600" : "text-red-400"}>
        {isOpen ? "Open" : "Closed"}
      </span>
    </div>
  );
};