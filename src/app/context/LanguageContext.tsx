'use client';

import { createContext, useContext, useState, useMemo } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextData {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextData | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const value = useMemo(
    () => ({ language, toggleLanguage }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
