import Paper from '@mui/material/Paper';
import SkillIcon from '@mui/icons-material/Keyboard';
import React, { useMemo } from 'react';

import { Titles } from '@/shared';
import type { SkillsData } from '@/types';
import { useAppTranslations } from '@/hooks';
import Item from './skills-item';
import { useData } from '@/hooks/use-data';

const Skills = () => {
  const { t } = useAppTranslations();
  const { data } = useData();

  const skillsData = useMemo(() => data?.skills, [data]);

  return skillsData ? (
    <>
      <Titles.Section icon={SkillIcon} text={`${t('common:skills.title')}`} />
      <Paper sx={{ flex: 1, padding: theme => theme.spacing(2) }}>
        {Object.keys(skillsData).map(key => (
          <Item key={key} title={key} skillsList={skillsData[key as keyof SkillsData]} />
        ))}
      </Paper>
    </>
  ) : null;
};

export default Skills;
