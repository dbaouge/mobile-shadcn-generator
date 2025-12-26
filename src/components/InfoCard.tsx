import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

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
    toast({
      title: "已复制",
      description: label,
    });
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border bg-card p-3.5",
        "active:bg-accent/50 transition-colors",
        "animate-card-in touch-manipulation"
      )}
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleCopy}
      role="button"
      tabIndex={0}
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-muted-foreground mb-0.5">{label}</p>
        <p className="text-sm font-medium text-foreground break-all leading-snug">
          {value}
        </p>
      </div>
      <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground">
        {copied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </div>
    </div>
  );
};
