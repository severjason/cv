import React from 'react';

import SchoolIcon from '@mui/icons-material/School';
import Grid from '@mui/material/Grid';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Titles } from '@/shared';
import { EducationType } from '@/types';

import EducationItemAdditional from './education-item-additional';
import EducationItemBasic from './education-item-basic';

const Education = () => {
  const { t } = useAppTranslations();
  const { data } = useData();

  return data?.education?.length ? (
    <Grid container>
      <Titles.Section icon={SchoolIcon} text={`${t('common:education.title')}`} />
      {data?.education?.map((exp, index) =>
        exp.type === EducationType.basic ? (
          <EducationItemBasic key={index} {...exp} />
        ) : (
          <EducationItemAdditional key={index} {...exp} />
        )
      )}
    </Grid>
  ) : null;
};

export default Education;
