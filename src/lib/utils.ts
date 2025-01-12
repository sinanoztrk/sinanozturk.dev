import i18n from "@/localization/i18n";
import { resources } from "@/localization/i18n";
import { Translation } from "@/localization/i18n";

export const getLocalizedValue = (value: Translation) => {
  return value[
    i18n.language?.toLowerCase() as Lowercase<keyof typeof resources>
  ];
};
