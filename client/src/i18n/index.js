import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import frTranslation from '../locales/fr/translation.json';
import arTranslation from '../locales/ar/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: frTranslation },
      ar: { translation: arTranslation }
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
