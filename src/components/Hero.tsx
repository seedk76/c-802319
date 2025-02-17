import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            {t.hero.subtitle}
          </p>
          <Button className="px-8 py-6 text-lg bg-[#8E9196] text-white hover:bg-[#8E9196]/90 flex items-center gap-2">
            <Download className="w-5 h-5" />
            {t.hero.downloadButton}
          </Button>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/60">{t.hero.experience}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">1M+</div>
              <div className="text-white/60">{t.hero.produced}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-white/60">{t.hero.clients}</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1605131545453-fdd375b93b81?q=80&w=1288&auto=format&fit=crop"
              alt="Salt Mining Operation"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#8E9196]/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;