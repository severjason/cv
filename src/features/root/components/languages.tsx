import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LangIcon from '@mui/icons-material/Language';
import React from 'react';

import { Titles } from '@/shared';
import { useAppTranslations } from '@/hooks';
import Item from './languages-item';
import { useData } from '@/hooks/use-data';

const Languages = () => {
  const { t } = useAppTranslations();
  const { data, parseI18Data } = useData();

  return data?.languages?.length ? (
    <Grid container>
      <Titles.Section icon={LangIcon} text={`${t('common:languages.title')}`} />
      <Paper
        sx={{
          width: '100%',
          padding: theme => theme.spacing(2),
          marginBottom: {
            xs: theme => theme.spacing(1),
            sm: theme => theme.spacing(1),
            md: 0,
          },
        }}
      >
        {data?.languages?.map(lang => (
          <Item key={parseI18Data(lang.title)} {...lang} />
        ))}
      </Paper>
    </Grid>
  ) : null;
};

export default Languages;
