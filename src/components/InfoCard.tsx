import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  delay?: number;
}

export const InfoCard = ({ label, value, icon, delay = 0 }: InfoCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50 bg-card/60 backdrop-blur-xl p-4",
        "transition-all duration-300 hover:border-primary/30 hover:shadow-glow",
        "animate-slide-up"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground mb-1">{label}</p>
            <p className="text-sm font-medium text-foreground break-all leading-relaxed">
              {value}
            </p>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center",
            "transition-all duration-200",
            copied
              ? "bg-green-500/20 text-green-500"
              : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
};
