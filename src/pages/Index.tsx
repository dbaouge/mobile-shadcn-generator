import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  RefreshCw,
  Sparkles,
  Copy,
  Check,
  KeyRound,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/InfoCard";
import { generateInfo, type GeneratedInfo } from "@/lib/generators";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Index = () => {
  const [info, setInfo] = useState<GeneratedInfo | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [allCopied, setAllCopied] = useState(false);
  const [key, setKey] = useState(0);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    setInfo(null);
    setTimeout(() => {
      setInfo(generateInfo());
      setKey(k => k + 1);
      setIsGenerating(false);
    }, 400);
  }, []);

  const handleCopyAll = async () => {
    if (!info) return;
    
    const text = `姓名: ${info.name}
生日: ${info.birthday}
邮箱: ${info.email}
手机: ${info.phone}
密码: ${info.password}`;

    await navigator.clipboard.writeText(text);
    setAllCopied(true);
    toast({
      title: "✓ 已复制全部",
      description: "信息已保存到剪贴板",
    });
    setTimeout(() => setAllCopied(false), 2000);
  };

  return (
    <div className="min-h-[100dvh] bg-background relative overflow-x-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--muted)/0.5)_0%,transparent_60%)]" />
        
        {/* Large blur circles */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-3s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />
        
        {/* Floating shapes */}
        <div className="absolute top-24 left-6 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-8 w-3 h-3 border-2 border-primary/10 rounded-full animate-float" style={{ animationDelay: '-1s' }} />
        <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 right-6 w-4 h-4 border border-primary/10 rotate-45 animate-float" style={{ animationDelay: '-0.5s' }} />
        <div className="absolute bottom-1/3 left-8 w-2 h-2 border-2 border-primary/10 rounded-sm rotate-12 animate-float" style={{ animationDelay: '-1.5s' }} />
        <div className="absolute bottom-48 right-10 w-2.5 h-2.5 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '-2.5s' }} />
        
        {/* Decorative dots grid */}
        <div className="absolute top-32 right-4 grid grid-cols-3 gap-1.5 opacity-30">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-primary/40 rounded-full" />
          ))}
        </div>
        <div className="absolute bottom-40 left-4 grid grid-cols-3 gap-1.5 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-primary/40 rounded-full" />
          ))}
        </div>
        
        {/* Decorative lines */}
        <div className="absolute top-20 left-0 w-12 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-36 right-0 w-16 h-px bg-gradient-to-l from-transparent via-primary/15 to-transparent" />
        <div className="absolute bottom-52 left-0 w-20 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        
        {/* Corner accents */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/10 rounded-tr-lg" />
        <div className="absolute bottom-24 left-4 w-6 h-6 border-b border-l border-primary/10 rounded-bl-lg" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-md mx-auto px-4 pt-[env(safe-area-inset-top)]">
        {/* Header */}
        <header className="py-6">
          {/* Navigation to Phone Generator */}
          <Link 
            to="/sjh" 
            className={cn(
              "inline-flex items-center gap-2 text-sm text-muted-foreground mb-4",
              "hover:text-foreground transition-colors duration-200",
              "active:scale-95 touch-manipulation group"
            )}
          >
            <Phone className="w-4 h-4" />
            手机号批量生成
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <div className="text-center">
            <div className={cn(
              "inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-all duration-500",
              isGenerating 
                ? "bg-primary/10 animate-pulse scale-95" 
                : "bg-primary shadow-lg shadow-primary/25"
            )}>
              <Sparkles className={cn(
                "w-7 h-7 transition-all duration-300",
                isGenerating ? "text-primary animate-spin" : "text-primary-foreground"
              )} />
            </div>
            <h1 className="text-xl font-semibold text-foreground mb-1">
              信息生成器
            </h1>
            <p className="text-sm text-muted-foreground">
              点击卡片即可复制
            </p>
          </div>
        </header>

        {/* Cards */}
        <main className="pb-32">
          {isGenerating ? (
            <div className="space-y-2.5">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="h-[72px] rounded-xl bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 animate-shimmer"
                  style={{ 
                    animationDelay: `${i * 150}ms`,
                    backgroundSize: '200% 100%'
                  }}
                />
              ))}
            </div>
          ) : info ? (
            <div className="space-y-2.5" key={key}>
              <InfoCard
                label="姓名"
                value={info.name}
                icon={<User size={18} />}
                delay={0}
              />
              <InfoCard
                label="生日"
                value={info.birthday}
                icon={<Calendar size={18} />}
                delay={60}
              />
              <InfoCard
                label="邮箱"
                value={info.email}
                icon={<Mail size={18} />}
                delay={120}
              />
              <InfoCard
                label="手机"
                value={info.phone}
                icon={<Phone size={18} />}
                delay={180}
              />
              <InfoCard
                label="密码"
                value={info.password}
                icon={<KeyRound size={18} />}
                delay={240}
              />

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
                    <Check className="w-4 h-4 animate-bounce-in" />
                    已复制全部
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    复制全部信息
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center mb-5">
                  <User className="w-12 h-12 text-muted-foreground/25" />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-dashed border-muted-foreground/10 animate-spin-slow" />
              </div>
              <p className="text-muted-foreground text-sm">
                点击下方按钮开始
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
                  {info ? '重新生成' : '生成信息'}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;