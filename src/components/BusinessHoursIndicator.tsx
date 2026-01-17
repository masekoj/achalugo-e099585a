import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface BusinessHoursIndicatorProps {
  className?: string;
}

export const BusinessHoursIndicator = ({ className = "" }: BusinessHoursIndicatorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("");

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;

      // Business hours: Mon-Sat 9 AM - 7 PM (540 - 1140 minutes)
      const openTime = 9 * 60; // 9:00 AM
      const closeTime = 19 * 60; // 7:00 PM

      if (day === 0) {
        // Sunday - closed
        setIsOpen(false);
        setCurrentStatus("Closed · Opens Mon 9AM");
      } else if (currentTime >= openTime && currentTime < closeTime) {
        setIsOpen(true);
        const closingHour = 7;
        setCurrentStatus(`Open · Closes ${closingHour}PM`);
      } else if (currentTime < openTime) {
        setIsOpen(false);
        setCurrentStatus(`Closed · Opens 9AM`);
      } else {
        setIsOpen(false);
        if (day === 6) {
          setCurrentStatus("Closed · Opens Mon 9AM");
        } else {
          setCurrentStatus("Closed · Opens 9AM");
        }
      }
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
    >
      <Clock className="h-3 w-3 text-muted-foreground" />
      <div className="flex items-center gap-1.5">
        {/* Pulsing dot */}
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isOpen ? "bg-green-400" : "bg-red-400"
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              isOpen ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </span>
        <span className={isOpen ? "text-green-600" : "text-red-500"}>
          {currentStatus}
        </span>
      </div>
    </div>
  );
};
