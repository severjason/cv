import { UseTranslationOptions } from 'react-i18next';

import { useTranslation } from 'next-i18next';

import type { LocaleNamespaces, Locales } from '@/types';

const useAppTranslations = (ns?: LocaleNamespaces | LocaleNamespaces[], options?: UseTranslationOptions<'cv'>) => {
  const { i18n, ...rest } = useTranslation(ns, options);
  return {
    i18n,
    ...rest,
    lang: i18n.language as Locales,
  };
};

export default useAppTranslations;
