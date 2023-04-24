import React, { ReactNode, useCallback, useEffect, useMemo } from 'react';

import type { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useAppTranslations } from '@/hooks';
import { ThemeAppProvider } from '@/hooks/use-app-theme';
import GlobalStyles from '@/styles/global';
import createAppTheme from '@/styles/theme';
import { getPaletteMode, savePaletteMode } from '@/utils/cookies';

type Props = {
  children?: ReactNode;
};

const ThemeAppWrapper: React.FC<Props> = ({ children }) => {
  const { lang } = useAppTranslations();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const defaultMode: PaletteMode = useMemo(() => (prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);
  const [mode, setMode] = React.useState<PaletteMode>(defaultMode);

  useEffect(() => {
    const newMode = getPaletteMode();
    if (newMode) {
      setMode(newMode);
    }
  }, []);

  const handleMode = useCallback(() => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    savePaletteMode(newMode);
  }, [mode]);

  return (
    <ThemeAppProvider mode={mode} handleMode={handleMode}>
      <CssBaseline />
      <GlobalStyles mode={mode} lang={lang} />
      <ThemeProvider theme={createAppTheme(mode)}>{children}</ThemeProvider>
    </ThemeAppProvider>
  );
};

export default ThemeAppWrapper;
