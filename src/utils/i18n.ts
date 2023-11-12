import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../translations/en.json";
import ar from "../translations/ar.json";
const resources = {
  en: {
    translation: en,
    dir: "ltr",
  },
  ar: {
    translation: ar,
    dir: "rtl",
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
