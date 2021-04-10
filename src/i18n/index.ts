import en from './en';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './zh';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
} as const;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'zh',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
