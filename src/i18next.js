import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationID from './locales/id/translation.json';
import translationEN from './locales/en/translation.json';
import translationJP from './locales/jp/translation.json';

const resources = {
  id: { translation: translationID },
  en: { translation: translationEN },
  jp: { translation: translationJP },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'id', // default bahasa
  fallbackLng: 'id',
  interpolation: { escapeValue: false },
});

export default i18n;
