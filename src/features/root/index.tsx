import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material/styles';
import React from 'react';

import Education from '@/features/root/components/education';
import Experience from '@/features/root/components/experience';
import Languages from '@/features/root/components/languages';
import Profile from '@/features/root/components/profile';
import Skills from '@/features/root/components/skills';
import { SxProps } from '@mui/material';

const sxItemStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme => theme.spacing(0, 1),
};

const Root = () => {
  return (
    <Grid flex={1}>
      <Grid
        container
        sx={{
          padding: theme => theme.spacing(1, 1, 0, 1),
          '&:last-child': {
            padding: theme => theme.spacing(0, 1, 1, 1),
          },
        }}
      >
        <Grid item xs={12} sm={12} md={12} sx={sxItemStyles}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={sxItemStyles}>
          <Experience />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={sxItemStyles}>
          <Skills />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={sxItemStyles}>
          <Education />
          <Languages />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Root;
