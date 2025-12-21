'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import './toogleLanguageButton.css';

export default function ToogleLanguageButton() {
  const { language, toggleLanguage } = useLanguage();

  const isEn = language === 'en';

  return (
    <label className="lang-switch">
      <input
        type="checkbox"
        checked={language === 'en'}
        onChange={toggleLanguage}
        aria-label="Trocar idioma"
      />
      <span className="slider">
        <span className="label pt">PT</span>
        <span className="label en">EN</span>
      </span>
    </label>
  );
}
