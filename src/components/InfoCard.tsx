import { useState, ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  label: string;
  value: string;
  icon: ReactNode;
  delay?: number;
}

export const InfoCard = ({ label, value, icon, delay = 0 }: InfoCardProps) => {
  const [copied, setCopied] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    toast({
      title: "✓ 已复制",
      description: `${label}: ${value}`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={cn(
        "w-full p-4 rounded-xl",
        "flex items-center gap-4",
        "bg-card border border-border/50",
        "shadow-sm hover:shadow-md",
        "transition-all duration-200",
        "active:scale-[0.98] touch-manipulation",
        "animate-card-in",
        isPressed && "scale-[0.98] shadow-inner",
        copied && "border-green-500 bg-green-50/50"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center",
        "transition-colors duration-200",
        copied ? "bg-green-100 text-green-600" : "bg-muted/50 text-muted-foreground"
      )}>
        {icon}
      </div>
      
      {/* Content */}
      <div className="flex-1 text-left min-w-0">
        <p className={cn(
          "text-xs font-medium mb-0.5 transition-colors duration-200",
          copied ? "text-green-600" : "text-muted-foreground"
        )}>
          {label}
        </p>
        <p className={cn(
          "text-base font-medium truncate transition-colors duration-200",
          copied ? "text-green-700" : "text-foreground"
        )}>
          {value}
        </p>
      </div>
      
      {/* Copy indicator */}
      <div className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center",
        "transition-all duration-200",
        copied ? "bg-green-100" : "bg-muted/30"
      )}>
        {copied ? (
          <Check className="w-4 h-4 text-green-600 animate-bounce-in" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-muted-foreground" />
        )}
      </div>
    </button>
  );
};