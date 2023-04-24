import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { darken } from '@mui/system';

import { useData } from '@/hooks';

const Footer = () => {
  const { fullName } = useData();

  return (
    <Grid
      component="footer"
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: theme => theme.spacing(6),
        backgroundColor: theme =>
          theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.75) : theme.palette.primary.dark,
        '@media print': {
          display: 'none',
        },
      }}
    >
      <Typography
        sx={{
          color: theme => theme.palette.primary.contrastText,
        }}
      >
        {`${fullName} @ ${new Date().getFullYear()}`}
      </Typography>
    </Grid>
  );
};

export default Footer;
