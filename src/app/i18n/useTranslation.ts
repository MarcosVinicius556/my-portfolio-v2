import { useLanguage } from '@/app/context/LanguageContext';
import pt from './pt';
import en from './en';

const translations = { pt, en };

export function useTranslation() {
  const { language } = useLanguage();

  return translations[language];
}
