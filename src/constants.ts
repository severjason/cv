import { DEflag, GBflag, UAflag } from '@/shared/icons';
import { Languages, Locales } from '@/types';

export const LANGUAGES: Languages = {
  en: {
    lang: Locales.en,
    nextLang: Locales.de,
    flagIcon: GBflag,
  },
  de: {
    lang: Locales.de,
    nextLang: Locales.uk,
    flagIcon: DEflag,
  },
  uk: {
    lang: Locales.uk,
    nextLang: Locales.en,
    flagIcon: UAflag,
  },
};

export const DEFAULT_DATE_FORMAT = 'MMMM YYYY';
