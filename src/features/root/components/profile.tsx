import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import React, { useMemo } from 'react';

import { Titles } from '@/shared';
import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import Typography from '@mui/material/Typography';

const Profile = () => {
  const { t, lang } = useAppTranslations();

  const { data } = useData();

  const profileData = useMemo(() => data?.profile?.full?.[lang], [data?.profile, lang]);

  return (
    <Grid container>
      <Titles.Section icon={AssignmentInd} text={`${t('common:profile')}`} />
      <Paper
        sx={{
          width: '100%',
          padding: theme => theme.spacing(2),
          margin: 0,
        }}
      >
        <Typography>{profileData}</Typography>
      </Paper>
    </Grid>
  );
};

export default Profile;
