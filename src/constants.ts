import UAflag from '@/shared/icons/ua-flag';
import USflag from '@/shared/icons/us-flag';
import { Languages, Locales } from '@/types';

export const LANGUAGES: Languages = {
  en: {
    lang: Locales.en,
    nextLang: Locales.uk,
    flagIcon: USflag,
  },
  uk: {
    lang: Locales.uk,
    nextLang: Locales.en,
    flagIcon: UAflag,
  },
};

export const DEFAULT_DATE_FORMAT = 'MMMM YYYY';
