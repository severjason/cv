import Grid from '@mui/material/Grid';
import WorkIcon from '@mui/icons-material/Work';
import React from 'react';
import { Titles } from '@/shared';

import { useAppTranslations } from '@/hooks';
import ExperienceItem from './experience-item';
import { useData } from '@/hooks/use-data';

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
