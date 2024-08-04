import React, { useMemo } from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Icons, Paper, Titles } from '@/shared';
import type { SkillsData } from '@/types';

import Item from './skills-item';

const Skills = () => {
  const { t } = useAppTranslations();
  const { data } = useData();

  const skillsData = useMemo(() => data?.skills, [data]);

  return skillsData ? (
    <>
      <Titles.Section icon={<Icons.Keyboard />} text={`${t('common:skills.title')}`} />
      <Paper className="flex-1">
        {Object.keys(skillsData).map(key => (
          <Item key={key} title={key} skillsList={skillsData[key as keyof SkillsData]} />
        ))}
      </Paper>
    </>
  ) : null;
};

export default Skills;
