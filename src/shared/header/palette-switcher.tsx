import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useAppTheme, useAppTranslations } from '@/hooks';
import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const PaletteSwitcher = () => {
  const theme = useTheme<Theme>();
  const { t } = useAppTranslations();
  const { handleMode, mode } = useAppTheme();
  const isSm = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'));
  return (
    <Grid
      item
      sx={{
        padding: theme => theme.spacing(0.5),
        '@media print': {
          display: 'none',
        },
      }}
    >
      <IconButton
        title={mode === 'dark' ? (t('common:paletteSwitchLight') as string) : (t('common:paletteSwitchDark') as string)}
        sx={{ ml: 1 }}
        onClick={handleMode}
        color="inherit"
        size={isSm ? 'small' : 'large'}
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon sx={{ color: theme => theme.palette.common.white }} />
        ) : (
          <Brightness4Icon sx={{ color: theme => theme.palette.primary.dark }} />
        )}
      </IconButton>
    </Grid>
  );
};

export default PaletteSwitcher;
