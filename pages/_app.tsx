import React from 'react';

import { CacheProvider, EmotionCache } from '@emotion/react';
import 'dayjs/locale/uk';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';

import { Analytics, Theme } from '@/shared';
import createEmotionCache from '@/styles/create-emotion-cache';
import '@/styles/fonts.css';

import packageJSON from '../package.json';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

console.info(`Current app version: ${packageJSON.version}`);

const CVApp: React.FC<MyAppProps> = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {
  return (
    <CacheProvider value={emotionCache}>
      <Theme>
        <Analytics.Gtag />
        <Component {...pageProps} />
      </Theme>
    </CacheProvider>
  );
};

export default appWithTranslation(CVApp);
