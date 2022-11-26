import React from 'react';
import Grid from '@mui/material/Grid';
import SchoolIcon from '@mui/icons-material/School';

import { Titles } from '@/shared';
import { EducationType } from '@/types';
import { useAppTranslations } from '@/hooks';
import EducationItemBasic from './education-item-basic';
import EducationItemAdditional from './education-item-additional';
import { useData } from '@/hooks/use-data';

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
