import { useState, useCallback } from "react";
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  RefreshCw,
  Shuffle,
  Copy,
  Check,
  KeyRound
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoCard } from "@/components/InfoCard";
import { generateInfo, type GeneratedInfo } from "@/lib/generators";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [info, setInfo] = useState<GeneratedInfo | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [allCopied, setAllCopied] = useState(false);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    setTimeout(() => {
      setInfo(generateInfo());
      setIsGenerating(false);
    }, 200);
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
      title: "复制成功",
      description: "所有信息已复制到剪贴板",
    });
    setTimeout(() => setAllCopied(false), 2000);
  };

  return (
    <div className="min-h-[100dvh] bg-background relative overflow-x-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-muted/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-muted/50 rounded-full blur-3xl" />
      </div>

      {/* Scrollable content */}
      <div className="relative w-full max-w-md mx-auto px-4 pt-[env(safe-area-inset-top)] pb-[calc(5rem+env(safe-area-inset-bottom))]">
        {/* Header - compact for mobile */}
        <header className="sticky top-0 z-10 -mx-4 px-4 py-4 bg-background/80 backdrop-blur-lg border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <Shuffle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-semibold text-foreground truncate">信息生成器</h1>
              <p className="text-xs text-muted-foreground">一键生成随机身份信息</p>
            </div>
            {info && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyAll}
                className="shrink-0 h-9 px-3"
              >
                {allCopied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="py-4 space-y-2.5">
          {info ? (
            <>
              <InfoCard
                label="姓名"
                value={info.name}
                icon={<User size={16} />}
                delay={0}
              />
              <InfoCard
                label="生日"
                value={info.birthday}
                icon={<Calendar size={16} />}
                delay={40}
              />
              <InfoCard
                label="邮箱"
                value={info.email}
                icon={<Mail size={16} />}
                delay={80}
              />
              <InfoCard
                label="手机"
                value={info.phone}
                icon={<Phone size={16} />}
                delay={120}
              />
              <InfoCard
                label="密码"
                value={info.password}
                icon={<KeyRound size={16} />}
                delay={160}
              />
            </>
          ) : (
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-3">
                  <User className="w-7 h-7 text-muted-foreground/60" />
                </div>
                <p className="text-sm text-muted-foreground">
                  点击下方按钮开始生成
                </p>
              </CardContent>
            </Card>
          )}
        </main>
      </div>

      {/* Fixed Bottom Button - safe area aware */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <div className="bg-gradient-to-t from-background via-background to-transparent pt-6">
          <div className="max-w-md mx-auto px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <Button
              size="lg"
              className="w-full h-12 text-base font-medium shadow-lg active:scale-[0.98] transition-transform"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <RefreshCw className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <RefreshCw className="h-5 w-5" />
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
