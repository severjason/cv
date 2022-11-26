import React from 'react';
import Grid from '@mui/material/Grid';
import Titles from './titles';
import Photo from './photo';
import Socials from './socials';
import LangSwitcher from './lang-switcher';
import PaletteSwitcher from './palette-switcher';
import { grey } from '@mui/material/colors';
import { darken } from '@mui/system';

const Header = () => (
  <Grid component="header">
    <Grid
      sx={{
        position: 'relative',
        padding: theme => theme.spacing(1),
        backgroundColor: theme =>
          theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.primary.light,
        '@media print': {
          backgroundColor: grey[300],
        },
      }}
    >
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          top: 0,
          right: 0,
          position: 'absolute',
          padding: theme => theme.spacing(0.5),
        }}
      >
        <PaletteSwitcher />
        <LangSwitcher />
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
            md: 'row',
          },
        }}
      >
        <Photo />
        <Titles />
      </Grid>
    </Grid>
    <Socials />
  </Grid>
);

export default Header;
