import { useState, useCallback } from "react";
import { 
  User, 
  Phone, 
  Mail, 
  CreditCard, 
  MapPin, 
  Building2, 
  Calendar, 
  RefreshCw,
  Sparkles,
  Copy,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
    }, 300);
  }, []);

  const handleCopyAll = async () => {
    if (!info) return;
    
    const text = `姓名: ${info.name}
性别: ${info.gender}
年龄: ${info.age}岁
生日: ${info.birthday}
手机: ${info.phone}
邮箱: ${info.email}
身份证: ${info.idCard}
银行卡: ${info.bankCard}
地址: ${info.address}
公司: ${info.company}`;

    await navigator.clipboard.writeText(text);
    setAllCopied(true);
    toast({
      title: "复制成功",
      description: "所有信息已复制到剪贴板",
    });
    setTimeout(() => setAllCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-16 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-60 left-20 w-2 h-2 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-8 w-4 h-4 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-40 right-24 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Decorative lines */}
        <div className="absolute top-32 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-48 right-0 w-40 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative max-w-md mx-auto px-4 py-8 pb-24">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[hsl(200,100%,50%)] mb-4 shadow-glow">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            信息生成器
          </h1>
          <p className="text-sm text-muted-foreground">
            一键生成随机身份信息
          </p>
        </header>

        {/* Content */}
        {info ? (
          <div className="space-y-3">
            <InfoCard
              label="姓名"
              value={`${info.name} (${info.gender})`}
              icon={<User size={18} />}
              delay={0}
            />
            <InfoCard
              label="年龄 / 生日"
              value={`${info.age}岁 · ${info.birthday}`}
              icon={<Calendar size={18} />}
              delay={50}
            />
            <InfoCard
              label="手机号码"
              value={info.phone}
              icon={<Phone size={18} />}
              delay={100}
            />
            <InfoCard
              label="电子邮箱"
              value={info.email}
              icon={<Mail size={18} />}
              delay={150}
            />
            <InfoCard
              label="身份证号"
              value={info.idCard}
              icon={<CreditCard size={18} />}
              delay={200}
            />
            <InfoCard
              label="银行卡号"
              value={info.bankCard.replace(/(\d{4})/g, '$1 ').trim()}
              icon={<CreditCard size={18} />}
              delay={250}
            />
            <InfoCard
              label="住址"
              value={info.address}
              icon={<MapPin size={18} />}
              delay={300}
            />
            <InfoCard
              label="公司"
              value={info.company}
              icon={<Building2 size={18} />}
              delay={350}
            />

            {/* Copy All Button */}
            <Button
              variant="glass"
              className="w-full mt-4"
              onClick={handleCopyAll}
            >
              {allCopied ? (
                <>
                  <Check size={18} />
                  已复制全部
                </>
              ) : (
                <>
                  <Copy size={18} />
                  复制全部信息
                </>
              )}
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
              <User className="w-10 h-10 text-muted-foreground/50" />
            </div>
            <p className="text-muted-foreground text-sm">
              点击下方按钮生成信息
            </p>
          </div>
        )}
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent">
        <div className="max-w-md mx-auto">
          <Button
            variant="gradient"
            size="lg"
            className="w-full h-14 text-base font-semibold"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <RefreshCw className="w-5 h-5" />
                {info ? '重新生成' : '生成信息'}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
