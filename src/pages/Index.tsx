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
  Shuffle,
  Copy,
  Check,
  AtSign,
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
性别: ${info.gender}
年龄: ${info.age}岁
生日: ${info.birthday}
用户名: ${info.username}
密码: ${info.password}
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />
        
        {/* Gradient blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-muted/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-muted/50 rounded-full blur-3xl" />
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-8 w-3 h-3 border-2 border-muted-foreground/10 rounded-full" />
        <div className="absolute top-32 right-12 w-4 h-4 border-2 border-muted-foreground/10 rotate-45" />
        <div className="absolute top-1/3 left-6 w-2 h-2 bg-muted-foreground/10 rounded-full" />
        <div className="absolute top-1/2 right-8 w-3 h-3 border-2 border-muted-foreground/10 rounded-sm rotate-12" />
        <div className="absolute bottom-40 left-10 w-4 h-4 border-2 border-muted-foreground/10 rounded-full" />
        <div className="absolute bottom-60 right-16 w-2 h-2 bg-muted-foreground/10" />
        
        {/* Dotted pattern */}
        <div className="absolute top-40 right-4 flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="w-1 h-1 bg-muted-foreground/20 rounded-full" />
            <div className="w-1 h-1 bg-muted-foreground/20 rounded-full" />
            <div className="w-1 h-1 bg-muted-foreground/20 rounded-full" />
          </div>
          <div className="flex gap-2">
            <div className="w-1 h-1 bg-muted-foreground/20 rounded-full" />
            <div className="w-1 h-1 bg-muted-foreground/20 rounded-full" />
            <div className="w-1 h-1 bg-muted-foreground/20 rounded-full" />
          </div>
          <div className="flex gap-2">
            <div className="w-1 h-1 bg-muted-foreground/20 rounded-full" />
            <div className="w-1 h-1 bg-muted-foreground/20 rounded-full" />
            <div className="w-1 h-1 bg-muted-foreground/20 rounded-full" />
          </div>
        </div>
        
        {/* Lines */}
        <div className="absolute top-28 left-0 w-16 h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />
        <div className="absolute bottom-52 right-0 w-20 h-px bg-gradient-to-l from-transparent via-muted-foreground/20 to-transparent" />
      </div>

      <div className="relative max-w-md mx-auto px-4 py-6 pb-24">
        {/* Header */}
        <Card className="mb-6">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-3">
              <Shuffle className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl">信息生成器</CardTitle>
            <CardDescription>一键生成随机身份信息</CardDescription>
          </CardHeader>
        </Card>

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
              label="用户名"
              value={info.username}
              icon={<AtSign size={18} />}
              delay={100}
            />
            <InfoCard
              label="密码"
              value={info.password}
              icon={<KeyRound size={18} />}
              delay={150}
            />
            <InfoCard
              label="手机号码"
              value={info.phone}
              icon={<Phone size={18} />}
              delay={200}
            />
            <InfoCard
              label="电子邮箱"
              value={info.email}
              icon={<Mail size={18} />}
              delay={250}
            />
            <InfoCard
              label="身份证号"
              value={info.idCard}
              icon={<CreditCard size={18} />}
              delay={300}
            />
            <InfoCard
              label="银行卡号"
              value={info.bankCard.replace(/(\d{4})/g, '$1 ').trim()}
              icon={<CreditCard size={18} />}
              delay={350}
            />
            <InfoCard
              label="住址"
              value={info.address}
              icon={<MapPin size={18} />}
              delay={400}
            />
            <InfoCard
              label="公司"
              value={info.company}
              icon={<Building2 size={18} />}
              delay={450}
            />

            {/* Copy All Button */}
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={handleCopyAll}
            >
              {allCopied ? (
                <>
                  <Check className="h-4 w-4" />
                  已复制全部
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  复制全部信息
                </>
              )}
            </Button>
          </div>
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <User className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">
                点击下方按钮生成信息
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
        <div className="max-w-md mx-auto">
          <Button
            size="lg"
            className="w-full"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <RefreshCw className="h-4 w-4" />
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
