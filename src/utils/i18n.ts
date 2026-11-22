import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

import nextI18NextConfig from '@/root/next-i18next.config';
import { LocaleNamespaces, Locales } from '@/types';

export const ssrTranslations = async (locale?: string, namespaces: LocaleNamespaces[] = []) => {
  return await serverSideTranslations(
    locale || Locales.en,
    [LocaleNamespaces.common, ...namespaces],
    nextI18NextConfig
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await ssrTranslations(locale)),
    },
  };
};
