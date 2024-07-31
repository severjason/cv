import React from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Titles, Icons } from '@/shared';
import { EducationType } from '@/types';

import EducationItemAdditional from './education-item-additional';
import EducationItemBasic from './education-item-basic';

const Education = () => {
  const { t } = useAppTranslations();
  const { data } = useData();

  if (!data?.education?.length) return null;

  return (
    <div className="flex flex-col">
      <Titles.Section icon={<Icons.Education />} text={`${t('common:education.title')}`} />
      {data.education.map((exp, index) =>
        exp.type === EducationType.basic ? (
          <EducationItemBasic key={index} {...exp} />
        ) : (
          <EducationItemAdditional key={index} {...exp} />
        )
      )}
    </div>
  );
};

export default Education;
