import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/types/language";

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();

  const flags: Record<Language, string> = {
    en: "🇬🇧",
    ro: "🇷🇴",
    fr: "🇫🇷",
    de: "🇩🇪",
    es: "🇪🇸"
  };

  return (
    <footer className="py-20 px-4 bg-[#1A1F2C] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#8E9196]/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">SaltTech Industries</h3>
            <p className="text-white/60">
              Leading provider of industrial salt solutions for manufacturing and processing needs.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="tel:+1234567890" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <a href="mailto:sales@salttech.com" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                sales@salttech.com
              </a>
              <div className="text-white/60 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                123 Mining Road, Salt Lake City, UT
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Industrial Salt</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Chemical Grade</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Water Treatment</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">De-icing</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Language</h4>
            <div className="flex flex-wrap gap-2">
              {Object.entries(flags).map(([lang, flag]) => (
                <Button
                  key={lang}
                  onClick={() => setLanguage(lang as Language)}
                  className={`flex items-center gap-2 ${
                    language === lang ? 'bg-white/20' : 'glass-effect'
                  } hover:bg-white/10`}
                >
                  <span className="text-lg">{flag}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60">
            © 2024 SaltTech Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
