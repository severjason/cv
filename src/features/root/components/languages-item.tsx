import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import type { LanguageItem } from '@/types';
import { useData } from '@/hooks/use-data';

const LanguagesItem: React.FC<LanguageItem> = ({ title, level }) => {
  const { parseI18Data } = useData();
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        marginBottom: theme => theme.spacing(1),
        '&:last-child': {
          marginBottom: 0,
        },
      }}
    >
      <Typography variant="body2" fontWeight={600}>
        {parseI18Data(title)}:
      </Typography>
      <Typography variant="body2" pl={1}>
        {parseI18Data(level)}
      </Typography>
    </Grid>
  );
};

export default LanguagesItem;
