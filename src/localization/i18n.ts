import i18n, { LanguageDetectorAsyncModule } from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import translationEN from "./en.json";
import translationTR from "./tr.json";

export type Translation = {
  tr: string;
  en: string;
};

export const defaultNS = "translation";
export const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
} as const;

export const supportedLanguages = Object.keys(resources).map((key) =>
  key.toUpperCase()
) as Uppercase<keyof typeof resources>[];

i18n.use(initReactI18next).init({
  lng: getLocales()[0]?.languageCode ?? "en",
  defaultNS,
  fallbackLng: "en",
  compatibilityJSON: "v4",
  returnEmptyString: false,
  resources,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export function getLocalizedValue<T extends Record<string, any>>(obj?: T): any {
  const language = i18n.language;
  return obj?.[language];
}

export default i18n;
