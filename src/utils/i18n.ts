import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LocaleNamespaces, Locales } from '@/types';

export const ssrTranslations = async (locale?: string, namespaces: LocaleNamespaces[] = []) => {
  return await serverSideTranslations(locale || Locales.en, [LocaleNamespaces.common, ...namespaces]);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await ssrTranslations(locale)),
    },
  };
};
