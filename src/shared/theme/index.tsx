import React, { ReactNode, useCallback, useEffect, useMemo } from 'react';

import { ThemeAppProvider } from '@/hooks/use-app-theme';
import type { PaletteMode } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import createAppTheme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@/styles/global';
import { getPaletteMode, savePaletteMode } from '@/utils/cookies';
import { useAppTranslations } from '@/hooks';

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
