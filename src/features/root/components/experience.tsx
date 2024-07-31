import React from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Icons, Titles } from '@/shared';

import ExperienceItem from './experience-item';

const Experience = () => {
  const { t } = useAppTranslations();
  const { data } = useData();

  if (!data?.experience?.length) return null;

  return (
    <div>
      <Titles.Section icon={<Icons.Work />} text={`${t('common:experience.title')}`} />
      {data.experience.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;
