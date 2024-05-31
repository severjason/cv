import React from 'react';

import type { PaletteMode } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import { grey } from '@mui/material/colors';

import { Locales } from '@/types';

type Props = {
  mode?: PaletteMode;
  lang?: Locales;
};

const AppGlobalStyles: React.FC<Props> = ({ mode }) => {
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
