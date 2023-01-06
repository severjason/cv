import { AppProps } from 'next/app';
import React from 'react';
import { appWithTranslation } from 'next-i18next';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/styles/create-emotion-cache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
import '@/styles/fonts.css';
import { Analytics, Theme } from '@/shared';
import 'dayjs/locale/uk';
import packageJSON from '../package.json';

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
