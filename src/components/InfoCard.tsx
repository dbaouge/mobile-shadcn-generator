import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  delay?: number;
  multiline?: boolean;
}

export const InfoCard = ({ label, value, icon, delay = 0, multiline = false }: InfoCardProps) => {
  const [copied, setCopied] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={cn(
        "relative flex items-center gap-3 rounded-xl border bg-card p-3.5",
        "transition-all duration-150 touch-manipulation select-none cursor-pointer",
        "animate-card-in",
        "hover:shadow-md hover:border-primary/20",
        isPressed && "scale-[0.98] bg-accent/50 shadow-inner",
        copied && "border-green-500/50 bg-green-50/50 shadow-green-100"
      )}
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleCopy}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      role="button"
      tabIndex={0}
    >
      {/* Icon */}
      <div className={cn(
        "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200",
        copied 
          ? "bg-green-100 text-green-600 scale-105" 
          : "bg-muted text-muted-foreground"
      )}>
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-[15px] font-medium text-foreground break-all leading-snug">
          {value}
        </p>
      </div>

      {/* Copy indicator */}
      <div className={cn(
        "flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200",
        copied 
          ? "bg-green-100 text-green-600" 
          : "text-muted-foreground/40 group-hover:text-muted-foreground"
      )}>
        {copied ? (
          <Check className="h-5 w-5 animate-bounce-in" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </div>

      {/* Success ripple effect */}
      {copied && (
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-green-500/5 animate-fade-in" />
        </div>
      )}
    </div>
  );
};
