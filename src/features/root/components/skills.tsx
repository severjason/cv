import React from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Icons, Paper, Titles } from '@/shared';
import type { SkillsData } from '@/types';

import Item from './skills-item';

const Skills = () => {
  const { t } = useAppTranslations();
  const { data } = useData();

  if (!data?.skills) return null;

  return (
    <>
      <Titles.Section icon={<Icons.Keyboard />} text={`${t('common:skills.title')}`} />
      <Paper className="flex-1">
        {Object.keys(data.skills).map(key => (
          <Item key={key} title={key} skillsList={data.skills[key as keyof SkillsData]} />
        ))}
      </Paper>
    </>
  );
};

export default Skills;
