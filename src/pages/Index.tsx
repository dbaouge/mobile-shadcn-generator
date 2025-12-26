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
  Check
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
      <div className="max-w-md mx-auto px-4 py-6 pb-24">
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
              delay={30}
            />
            <InfoCard
              label="手机号码"
              value={info.phone}
              icon={<Phone size={18} />}
              delay={60}
            />
            <InfoCard
              label="电子邮箱"
              value={info.email}
              icon={<Mail size={18} />}
              delay={90}
            />
            <InfoCard
              label="身份证号"
              value={info.idCard}
              icon={<CreditCard size={18} />}
              delay={120}
            />
            <InfoCard
              label="银行卡号"
              value={info.bankCard.replace(/(\d{4})/g, '$1 ').trim()}
              icon={<CreditCard size={18} />}
              delay={150}
            />
            <InfoCard
              label="住址"
              value={info.address}
              icon={<MapPin size={18} />}
              delay={180}
            />
            <InfoCard
              label="公司"
              value={info.company}
              icon={<Building2 size={18} />}
              delay={210}
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
