import { grey } from '@mui/material/colors';
import GlobalStyles from '@mui/material/GlobalStyles';
import React from 'react';
import { PaletteMode } from '@mui/material';
import { Locales } from '@/types';

type Props = {
  mode?: PaletteMode;
  lang?: Locales;
};

const AppGlobalStyles: React.FC<Props> = ({ mode, lang }) => {
  return (
    <GlobalStyles
      styles={{
        body: {
          backgroundColor: mode === 'dark' ? grey[800] : grey[100],
        },
        '@media print': {
          'html, body': {
            backgroundColor: grey[100],
            WebkitPrintColorAdjust: 'exact',
            printColorAdjust: 'exact',
          },
          '*': {
            color: 'black',
          },
        },
        '@page': {
          margin: 0,
          size: lang === Locales.uk ? '1200px 2869px' : '1200px 2849px',
        },
        img: {
          maxWidth: '100%',
          maxHeight: '100%',
        },
      }}
    />
  );
};

export default AppGlobalStyles;
