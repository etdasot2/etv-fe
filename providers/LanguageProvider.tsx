'use client'
import { useEffect, useState } from 'react';
import i18n from '../i18n';

const LanguageProvider = ({ children }: any) => {
  const [languageLoaded, setLanguageLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang') || 'en';
      if (savedLang !== i18n.language) {
        i18n.changeLanguage(savedLang).then(() => {
          setLanguageLoaded(true);
        });
      } else {
        setLanguageLoaded(true);
      }
    }
  }, []);

  if (!languageLoaded) {
    return null; // Or a loading spinner
  }

  return children;
};

export default LanguageProvider;
