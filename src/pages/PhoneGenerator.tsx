import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  RefreshCw,
  Copy,
  Check,
  Minus,
  Plus,
  ArrowLeft,
  Smartphone,
  CheckCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Phone prefixes
const phonePrefixes = [
  '130', '131', '132', '133', '134', '135', '136', '137', '138', '139',
  '150', '151', '152', '153', '155', '156', '157', '158', '159',
  '170', '171', '172', '173', '175', '176', '177', '178',
  '180', '181', '182', '183', '184', '185', '186', '187', '188', '189',
  '198', '199'
];

const generatePhone = (): string => {
  const prefix = phonePrefixes[Math.floor(Math.random() * phonePrefixes.length)];
  const suffix = Math.floor(Math.random() * 90000000 + 10000000).toString();
  return prefix + suffix;
};

const generatePhones = (count: number): string[] => {
  return Array.from({ length: count }, () => generatePhone());
};

const PhoneGenerator = () => {
  const [count, setCount] = useState(5);
  const [phones, setPhones] = useState<string[]>([]);
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
      setPhones(generatePhones(count));
      setKey(k => k + 1);
      setIsGenerating(false);
    }, 300);
  }, [count]);

  const handleCopy = async (phone: string, index: number) => {
    await navigator.clipboard.writeText(phone);
    setCopiedIndex(index);
    toast({
      title: "✓ 已复制",
      description: phone,
    });
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const handleCopyAll = async () => {
    if (phones.length === 0) return;
    const text = phones.join('\n');
    await navigator.clipboard.writeText(text);
    setAllCopied(true);
    toast({
      title: "✓ 已复制全部",
      description: `${phones.length} 个手机号已保存到剪贴板`,
    });
    setTimeout(() => setAllCopied(false), 2000);
  };

  const adjustCount = (delta: number) => {
    setCount(prev => Math.min(50, Math.max(1, prev + delta)));
  };

  return (
    <div className="min-h-[100dvh] bg-background relative overflow-x-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--muted)/0.5)_0%,transparent_60%)]" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-3s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />
        
        {/* Floating shapes */}
        <div className="absolute top-24 left-6 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-8 w-3 h-3 border-2 border-primary/10 rounded-full animate-float" style={{ animationDelay: '-1s' }} />
        <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 right-6 w-4 h-4 border border-primary/10 rotate-45 animate-float" style={{ animationDelay: '-0.5s' }} />
        
        {/* Decorative dots */}
        <div className="absolute top-32 right-4 grid grid-cols-3 gap-1.5 opacity-30">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-primary/40 rounded-full" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-md mx-auto px-4 pt-[env(safe-area-inset-top)]">
        {/* Header with back button */}
        <header className="py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">返回首页</span>
          </Link>
          
          <div className="text-center">
            <div className={cn(
              "inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-all duration-500",
              isGenerating 
                ? "bg-primary/10 animate-pulse scale-95" 
                : "bg-primary shadow-lg shadow-primary/25"
            )}>
              <Smartphone className={cn(
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

        {/* Count Selector */}
        <div className="mb-6 animate-fade-in">
          <div className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-card border border-border/50 shadow-sm">
            <span className="text-sm text-muted-foreground">生成数量</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => adjustCount(-1)}
                disabled={count <= 1}
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                  "bg-muted/50 hover:bg-muted active:scale-95",
                  "disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
                )}
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="w-16 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-semibold text-primary">{count}</span>
              </div>
              <button
                onClick={() => adjustCount(1)}
                disabled={count >= 50}
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                  "bg-muted/50 hover:bg-muted active:scale-95",
                  "disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
                )}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Quick select */}
          <div className="flex justify-center gap-2 mt-3">
            {[5, 10, 20, 50].map(num => (
              <button
                key={num}
                onClick={() => setCount(num)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                  count === num 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                )}
              >
                {num}个
              </button>
            ))}
          </div>
        </div>

        {/* Phone List */}
        <main className="pb-40">
          {isGenerating ? (
            <div className="space-y-2">
              {[...Array(Math.min(count, 8))].map((_, i) => (
                <div 
                  key={i}
                  className="h-14 rounded-xl bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 animate-shimmer"
                  style={{ 
                    animationDelay: `${i * 80}ms`,
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
                    onClick={() => handleCopy(phone, index)}
                    className={cn(
                      "w-full p-4 rounded-xl transition-all duration-200 animate-card-in",
                      "flex items-center justify-between gap-3",
                      "active:scale-[0.98] touch-manipulation",
                      copiedIndex === index
                        ? "bg-green-50 border-2 border-green-200 dark:bg-green-950/30 dark:border-green-800"
                        : "bg-card border border-border/50 hover:border-border hover:shadow-sm"
                    )}
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium",
                        copiedIndex === index 
                          ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                          : "bg-muted/50 text-muted-foreground"
                      )}>
                        {copiedIndex === index ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className={cn(
                        "font-mono text-base tracking-wide",
                        copiedIndex === index ? "text-green-600 dark:text-green-400" : "text-foreground"
                      )}>
                        {phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3')}
                      </span>
                    </div>
                    <Phone className={cn(
                      "w-4 h-4 transition-colors",
                      copiedIndex === index ? "text-green-500" : "text-muted-foreground/50"
                    )} />
                  </button>
                ))}
              </div>

              {/* Copy All Button */}
              <button
                onClick={handleCopyAll}
                className={cn(
                  "w-full mt-4 py-3.5 rounded-xl border-2 border-dashed",
                  "flex items-center justify-center gap-2",
                  "text-sm font-medium transition-all duration-200",
                  "active:scale-[0.98] touch-manipulation animate-card-in",
                  allCopied 
                    ? "border-green-500 bg-green-50 text-green-600 dark:bg-green-950/30" 
                    : "border-muted-foreground/20 text-muted-foreground hover:border-muted-foreground/40 hover:bg-muted/30"
                )}
                style={{ animationDelay: `${phones.length * 40 + 100}ms` }}
              >
                {allCopied ? (
                  <>
                    <CheckCheck className="w-4 h-4" />
                    已复制全部
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    复制全部 ({phones.length}个)
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center mb-5">
                  <Phone className="w-12 h-12 text-muted-foreground/25" />
                </div>
                <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-dashed border-muted-foreground/10 animate-spin-slow" />
              </div>
              <p className="text-muted-foreground text-sm">
                设置数量后点击下方按钮生成
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
                  <RefreshCw className="h-5 w-5 transition-transform duration-300 group-active:rotate-180" />
                  {phones.length > 0 ? '重新生成' : `生成 ${count} 个手机号`}
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
