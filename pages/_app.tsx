import React from 'react';

import 'dayjs/locale/de';
import 'dayjs/locale/uk';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import localFont from 'next/font/local';

import { Analytics } from '@/shared';
import '@/styles/global.css';

import packageJSON from '../package.json';

const myFont = localFont({
  src: [
    {
      path: '../src/assets/fonts/Roboto-Regular.ttf',

      weight: '400',
      style: 'normal',
    },
    {
      path: '../src/assets/fonts/Roboto-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-cv',
});

// Client-side cache, shared for the whole session of the user in the browser.
console.info(`Current app version: ${packageJSON.version}`);

const CVApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${myFont.style.fontFamily};
        }
      `}</style>
      <Analytics.Gtag />

      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(CVApp);
