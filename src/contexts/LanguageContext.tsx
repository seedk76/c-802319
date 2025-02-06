import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translation } from '@/types/language';
import { translations } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [showInitialPopup, setShowInitialPopup] = useState(true);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
      setShowInitialPopup(false);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleLanguageChange, 
      t: translations[language] 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};