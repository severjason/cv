import React, { ReactNode, useCallback, useContext } from 'react';
import { PaletteMode } from '@mui/material';
import { Theme } from '@mui/material/styles';

type AppTheme = {
  mode?: PaletteMode;
  handleMode?: () => void;
};

export const ThemeContext = React.createContext<AppTheme | null>(null);

type DataWrapperProps = AppTheme & {
  children?: ReactNode;
};

export const ThemeAppProvider: React.FC<DataWrapperProps> = ({ children, ...props }) => {
  return <ThemeContext.Provider value={props}>{children}</ThemeContext.Provider>;
};

export function useAppTheme() {
  const data = useContext(ThemeContext);

  const getSxColor = useCallback(
    (theme: Theme, defaultColor?: string) =>
      theme.palette.mode === 'dark' ? theme.palette.common.white : defaultColor || theme.palette.primary.main,
    []
  );

  return {
    ...data,
    getSxColor,
  };
}

export default useAppTheme;
