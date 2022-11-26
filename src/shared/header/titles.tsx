import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useData } from '@/hooks';

import Info from './info';

const Titles = () => {
  const { fullName, position } = useData();
  return (
    <Grid
      item
      width="100%"
      flex={1}
      sx={{
        color: theme => theme.palette.primary.contrastText,
        padding: theme => ({
          xs: theme.spacing(0, 0.5),
          sm: 3,
        }),
        '@media print': {
          padding: theme => theme.spacing(1, 2),
        },
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        pb={1}
        sx={{
          textAlign: {
            xs: 'center',
            sm: 'left',
          },
          fontSize: {
            xs: '1.75rem',
            sm: '2.125rem',
          },
        }}
      >
        {fullName}
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        pb={1}
        sx={{
          textAlign: {
            xs: 'center',
            sm: 'left',
          },
          fontSize: {
            xs: '1.25rem',
            sm: '1.5rem',
          },
          '@media print': {
            paddingBottom: theme => theme.spacing(1),
          },
        }}
      >
        {position}
      </Typography>
      <Divider
        component="hr"
        sx={{
          backgroundColor: theme => alpha(theme.palette.primary.contrastText, 0.3),
        }}
      />
      <Info />
    </Grid>
  );
};

export default Titles;
