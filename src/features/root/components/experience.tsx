import React from 'react';

import WorkIcon from '@mui/icons-material/Work';
import Grid from '@mui/material/Grid';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Titles } from '@/shared';

import ExperienceItem from './experience-item';

const Experience = () => {
  const { t } = useAppTranslations();
  const { data } = useData();
  return data?.experience?.length ? (
    <Grid container>
      <Titles.Section icon={WorkIcon} text={`${t('common:experience.title')}`} />
      {data?.experience?.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </Grid>
  ) : null;
};

export default Experience;
