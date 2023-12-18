import React from 'react';

import LangIcon from '@mui/icons-material/Language';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Titles } from '@/shared';

import Item from './languages-item';

const Languages = () => {
  const { t } = useAppTranslations();
  const { data, parseI18Data } = useData();

  return data?.languages?.length ? (
    <Grid container>
      <Titles.Section icon={LangIcon} text={`${t('common:languages.title')}`} />
      <Paper
        sx={theme => ({
          width: '100%',
          padding: theme.spacing(2),
          marginBottom: {
            xs: theme.spacing(1),
            sm: theme.spacing(1),
            md: 0,
          },
        })}
      >
        {data?.languages?.map(lang => <Item key={parseI18Data(lang.title)} {...lang} />)}
      </Paper>
    </Grid>
  ) : null;
};

export default Languages;
