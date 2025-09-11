// hooks/useSafeTranslation.ts

import { useTranslation } from "react-i18next";

type StringMap = { [key: string]: string | number };

export const useSafeTranslation = () => {
  const { t } = useTranslation();
  
  return {
    t: (key: string, options?: StringMap): string => {
      const result = t(key, options);
      if (typeof result !== 'string') {
        console.warn(`Translation key ${key} returned non-string value`);
        return '';
      }
      return result;
    }
  };
};