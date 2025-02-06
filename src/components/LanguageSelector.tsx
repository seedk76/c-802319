import { useEffect, useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/types/language';
import { X } from 'lucide-react';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLanguage, t } = useLanguage();

  useEffect(() => {
    const hasSelectedLanguage = localStorage.getItem('language');
    if (!hasSelectedLanguage) {
      setIsOpen(true);
    }
  }, []);

  const flags: Record<Language, string> = {
    en: "🇬🇧",
    ro: "🇷🇴",
    fr: "🇫🇷",
    de: "🇩🇪",
    es: "🇪🇸"
  };

  const languages: Record<Language, string> = {
    en: "English",
    ro: "Română",
    fr: "Français",
    de: "Deutsch",
    es: "Español"
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-[#1A1F2C] p-8 rounded-xl max-w-md w-full mx-4 relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white/60 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <h2 className="text-2xl font-bold text-white mb-2">{t.languageSelect.title}</h2>
          <p className="text-white/60 mb-6">{t.languageSelect.subtitle}</p>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(flags).map(([lang, flag]) => (
              <Button
                key={lang}
                onClick={() => handleLanguageSelect(lang as Language)}
                className="flex items-center gap-2 justify-center py-6 glass-effect hover:bg-white/10"
              >
                <span className="text-2xl">{flag}</span>
                <span>{languages[lang as Language]}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default LanguageSelector;