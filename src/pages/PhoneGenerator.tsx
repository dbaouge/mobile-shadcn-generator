import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  RefreshCw,
  Sparkles,
  Copy,
  Check,
  Minus,
  Plus,
  ArrowLeft,
  CheckCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Phone number generation logic
const generatePhone = (): string => {
  const prefixes = ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139', 
                    '150', '151', '152', '153', '155', '156', '157', '158', '159',
                    '170', '171', '172', '173', '175', '176', '177', '178',
                    '180', '181', '182', '183', '184', '185', '186', '187', '188', '189',
                    '198', '199'];
  const randomNum = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
  return prefixes[Math.floor(Math.random() * prefixes.length)] + randomNum(10000000, 99999999).toString();
};

const PhoneGenerator = () => {
  const [phones, setPhones] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(5);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [allCopied, setAllCopied] = useState(false);
  const [key, setKey] = useState(0);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    setPhones([]);
    setCopiedIndex(null);
    setAllCopied(false);
    setTimeout(() => {
      const newPhones = Array.from({ length: quantity }, () => generatePhone());
      setPhones(newPhones);
      setKey(k => k + 1);
      setIsGenerating(false);
    }, 400);
  }, [quantity]);

  const handleCopyOne = async (phone: string, index: number) => {
    await navigator.clipboard.writeText(phone);
    setCopiedIndex(index);
    toast({
      title: "✓ 已复制",
      description: phone,
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = async () => {
    if (phones.length === 0) return;
    await navigator.clipboard.writeText(phones.join('\n'));
    setAllCopied(true);
    toast({
      title: "✓ 已复制全部",
      description: `${phones.length} 个手机号已保存到剪贴板`,
    });
    setTimeout(() => setAllCopied(false), 2000);
  };

  const adjustQuantity = (delta: number) => {
    setQuantity(q => Math.max(1, Math.min(50, q + delta)));
  };

  return (
    <div className="min-h-[100dvh] bg-background relative overflow-x-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--muted)/0.5)_0%,transparent_60%)]" />
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-3s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />
        
        {/* Floating shapes */}
        <div className="absolute top-24 right-6 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 left-8 w-3 h-3 border-2 border-primary/10 rounded-full animate-float" style={{ animationDelay: '-1s' }} />
        <div className="absolute top-1/3 right-4 w-1.5 h-1.5 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-6 w-4 h-4 border border-primary/10 rotate-45 animate-float" style={{ animationDelay: '-0.5s' }} />
        
        {/* Decorative dots grid */}
        <div className="absolute top-32 left-4 grid grid-cols-3 gap-1.5 opacity-30">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-primary/40 rounded-full" />
          ))}
        </div>
        <div className="absolute bottom-40 right-4 grid grid-cols-3 gap-1.5 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-primary/40 rounded-full" />
          ))}
        </div>
        
        {/* Decorative lines */}
        <div className="absolute top-20 right-0 w-12 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-36 left-0 w-16 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        
        {/* Corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/10 rounded-tl-lg" />
        <div className="absolute bottom-24 right-4 w-6 h-6 border-b border-r border-primary/10 rounded-br-lg" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-md mx-auto px-4 pt-[env(safe-area-inset-top)]">
        {/* Header */}
        <header className="py-6">
          {/* Back button */}
          <Link 
            to="/" 
            className={cn(
              "inline-flex items-center gap-2 text-sm text-muted-foreground mb-4",
              "hover:text-foreground transition-colors duration-200",
              "active:scale-95 touch-manipulation"
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
          
          <div className="text-center">
            <div className={cn(
              "inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-all duration-500",
              isGenerating 
                ? "bg-primary/10 animate-pulse scale-95" 
                : "bg-primary shadow-lg shadow-primary/25"
            )}>
              <Phone className={cn(
                "w-7 h-7 transition-all duration-300",
                isGenerating ? "text-primary animate-spin" : "text-primary-foreground"
              )} />
            </div>
            <h1 className="text-xl font-semibold text-foreground mb-1">
              手机号生成器
            </h1>
            <p className="text-sm text-muted-foreground">
              批量生成随机手机号
            </p>
          </div>
        </header>

        {/* Quantity Control */}
        <div className="mb-6">
          <div className={cn(
            "flex items-center justify-between p-4 rounded-xl",
            "bg-card border border-border/50",
            "shadow-sm"
          )}>
            <span className="text-sm font-medium text-foreground">生成数量</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => adjustQuantity(-1)}
                disabled={quantity <= 1}
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center",
                  "bg-muted/50 hover:bg-muted transition-colors duration-200",
                  "active:scale-95 touch-manipulation",
                  "disabled:opacity-40 disabled:cursor-not-allowed"
                )}
              >
                <Minus className="w-4 h-4 text-muted-foreground" />
              </button>
              <span className="w-10 text-center text-lg font-semibold text-foreground tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => adjustQuantity(1)}
                disabled={quantity >= 50}
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center",
                  "bg-muted/50 hover:bg-muted transition-colors duration-200",
                  "active:scale-95 touch-manipulation",
                  "disabled:opacity-40 disabled:cursor-not-allowed"
                )}
              >
                <Plus className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Phone List */}
        <main className="pb-32">
          {isGenerating ? (
            <div className="space-y-2">
              {[...Array(quantity)].map((_, i) => (
                <div 
                  key={i}
                  className="h-[52px] rounded-xl bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 animate-shimmer"
                  style={{ 
                    animationDelay: `${i * 50}ms`,
                    backgroundSize: '200% 100%'
                  }}
                />
              ))}
            </div>
          ) : phones.length > 0 ? (
            <div key={key}>
              <div className="space-y-2">
                {phones.map((phone, index) => (
                  <button
                    key={index}
                    onClick={() => handleCopyOne(phone, index)}
                    className={cn(
                      "w-full p-4 rounded-xl",
                      "flex items-center justify-between",
                      "bg-card border border-border/50",
                      "shadow-sm hover:shadow-md",
                      "transition-all duration-200",
                      "active:scale-[0.98] touch-manipulation",
                      "animate-card-in",
                      copiedIndex === index && "border-green-500 bg-green-50/50"
                    )}
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center",
                        copiedIndex === index ? "bg-green-100" : "bg-muted/50"
                      )}>
                        <span className={cn(
                          "text-xs font-medium",
                          copiedIndex === index ? "text-green-600" : "text-muted-foreground"
                        )}>
                          {index + 1}
                        </span>
                      </div>
                      <span className={cn(
                        "font-mono text-base tracking-wider",
                        copiedIndex === index ? "text-green-600" : "text-foreground"
                      )}>
                        {phone}
                      </span>
                    </div>
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center",
                      "transition-colors duration-200",
                      copiedIndex === index ? "bg-green-100" : "bg-muted/30"
                    )}>
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-green-600 animate-bounce-in" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Copy All */}
              <button
                onClick={handleCopyAll}
                className={cn(
                  "w-full mt-4 py-3.5 rounded-xl border-2 border-dashed",
                  "flex items-center justify-center gap-2",
                  "text-sm font-medium transition-all duration-200",
                  "active:scale-[0.98] touch-manipulation",
                  allCopied 
                    ? "border-green-500 bg-green-50 text-green-600" 
                    : "border-muted-foreground/20 text-muted-foreground hover:border-muted-foreground/40 hover:bg-muted/30"
                )}
              >
                {allCopied ? (
                  <>
                    <CheckCheck className="w-4 h-4 animate-bounce-in" />
                    已复制全部
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    复制全部 ({phones.length})
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center mb-5">
                  <Phone className="w-12 h-12 text-muted-foreground/25" />
                </div>
                <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-dashed border-muted-foreground/10 animate-spin-slow" />
              </div>
              <p className="text-muted-foreground text-sm">
                点击下方按钮生成手机号
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="bg-gradient-to-t from-background via-background/98 to-transparent pt-10 pb-[max(1.25rem,env(safe-area-inset-bottom))] pointer-events-auto">
          <div className="max-w-md mx-auto px-4">
            <Button
              size="lg"
              className={cn(
                "w-full h-14 text-base font-semibold rounded-2xl",
                "shadow-xl shadow-primary/20",
                "transition-all duration-200",
                "active:scale-[0.97] active:shadow-lg",
                "group",
                isGenerating && "opacity-90"
              )}
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <RefreshCw className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <Sparkles className="h-5 w-5 transition-transform duration-300 group-active:scale-110" />
                  {phones.length > 0 ? '重新生成' : `生成 ${quantity} 个号码`}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneGenerator;
