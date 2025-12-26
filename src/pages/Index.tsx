import { useState, useCallback } from "react";
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  RefreshCw,
  Sparkles,
  Copy,
  Check,
  KeyRound
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
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--muted))_0%,transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-md mx-auto px-4 pt-[env(safe-area-inset-top)]">
        {/* Header */}
        <header className="py-6 text-center">
          <div className={cn(
            "inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-all duration-300",
            isGenerating 
              ? "bg-primary/10 animate-pulse" 
              : "bg-primary shadow-lg shadow-primary/25"
          )}>
            <Sparkles className={cn(
              "w-7 h-7 transition-colors",
              isGenerating ? "text-primary" : "text-primary-foreground"
            )} />
          </div>
          <h1 className="text-xl font-semibold text-foreground mb-1">
            信息生成器
          </h1>
          <p className="text-sm text-muted-foreground">
            点击卡片即可复制
          </p>
        </header>

        {/* Cards */}
        <main className="pb-32">
          {isGenerating ? (
            <div className="space-y-2.5">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="h-[72px] rounded-xl bg-muted/50 animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
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
                  "w-full mt-4 py-3 rounded-xl border-2 border-dashed",
                  "flex items-center justify-center gap-2",
                  "text-sm font-medium transition-all duration-200",
                  "active:scale-[0.98] touch-manipulation",
                  allCopied 
                    ? "border-green-500 bg-green-50 text-green-600" 
                    : "border-muted-foreground/20 text-muted-foreground hover:border-muted-foreground/40"
                )}
              >
                {allCopied ? (
                  <>
                    <Check className="w-4 h-4" />
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
            <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                <User className="w-10 h-10 text-muted-foreground/30" />
              </div>
              <p className="text-muted-foreground">
                点击下方按钮开始
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="bg-gradient-to-t from-background via-background/95 to-transparent pt-8 pb-[max(1rem,env(safe-area-inset-bottom))] pointer-events-auto">
          <div className="max-w-md mx-auto px-4">
            <Button
              size="lg"
              className={cn(
                "w-full h-14 text-base font-semibold rounded-2xl",
                "shadow-xl shadow-primary/20",
                "transition-all duration-200",
                "active:scale-[0.97] active:shadow-lg",
                isGenerating && "opacity-80"
              )}
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <RefreshCw className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <RefreshCw className={cn(
                    "h-5 w-5 transition-transform",
                    info && "group-hover:rotate-180"
                  )} />
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
