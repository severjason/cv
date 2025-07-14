import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import avatar from '@/assets/avatar.webp';
import { useData } from '@/hooks';
import { Locales } from '@/types';

import packageJSON from '../../../package.json';

export type PageTitleProps = {
  title: string;
  description?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  const { locale } = useRouter();
  const { data, fullName } = useData();
  const url = data?.main_info?.website;
  const avatarUrl = `${avatar.src}?v=${packageJSON.version}`;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="author" content={fullName} />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={avatarUrl} />
      <link rel="canonical" href={`${url}${locale === Locales.en ? '' : `/${locale}`}`} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={avatarUrl} />
    </Head>
  );
};

export default PageTitle;
