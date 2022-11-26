import { Icons } from '@/shared';
import { Locales, Languages } from '@/types';

export const LANGUAGES: Languages = {
  en: {
    lang: Locales.en,
    nextLang: Locales.uk,
    flagIcon: Icons.USflag,
  },
  uk: {
    lang: Locales.uk,
    nextLang: Locales.en,
    flagIcon: Icons.UAflag,
  },
};

export const DEFAULT_DATE_FORMAT = 'MMMM YYYY';
