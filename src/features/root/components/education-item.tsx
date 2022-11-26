import React, { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

type Props = {
  children?: ReactNode;
};

const EducationItem: React.FC<Props> = ({ children }) => {
  return (
    <Paper
      sx={{
        width: '100%',
        padding: theme => theme.spacing(2),
        marginBottom: theme => theme.spacing(2),
        '&:last-child': {
          marginBottom: 0,
        },
      }}
    >
      <Grid container wrap="wrap" direction="column">
        {children}
      </Grid>
    </Paper>
  );
};

export default EducationItem;
