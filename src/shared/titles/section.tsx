import type { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';
import Grid from '@mui/material/Grid';
import type { SvgIconTypeMap } from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { useAppTheme } from '@/hooks';

type OwnProps = {
  icon: OverridableComponent<SvgIconTypeMap>;
  text: string;
};

const SectionTitle: React.FC<OwnProps> = ({ icon: Icon, text }) => {
  const { getSxColor } = useAppTheme();
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        paddingX: 0,
        paddingY: 2,
      }}
    >
      <Icon
        sx={{
          mr: 1,
          color: theme => getSxColor(theme),
        }}
      />
      <Typography
        variant="h5"
        component="h3"
        sx={{
          color: theme => getSxColor(theme),
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export default SectionTitle;
