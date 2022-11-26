import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';

import type { SkillListItem } from '@/types';
import { Icons } from '@/shared';
import { useAppTranslations } from '@/hooks';

type Props = {
  title: string;
  skillsList: SkillListItem[][];
};

const SkillsItem: React.FC<Props> = ({ title, skillsList }) => {
  const { t } = useAppTranslations();
  const generateSkill = ({ name, important }: SkillListItem, index: number, length: number) => {
    const skill = `${name}${length < 2 || index === length - 1 ? '.' : ', '}`;
    return important ? (
      <Typography component="span" key={name} fontWeight={600}>
        {skill}
      </Typography>
    ) : (
      skill
    );
  };

  return (
    <Grid container direction="column" mb={0}>
      <Grid container alignItems="center">
        <Typography variant="body2" fontWeight={600}>
          {t(`common:skills.${title}`)}:
        </Typography>
      </Grid>
      <Grid>
        <List disablePadding>
          {skillsList.map((skills, index) => (
            <ListItem key={index} disablePadding>
              <Icons.List />
              <ListItemText>{skills?.map((skill, index) => generateSkill(skill, index, skills.length))}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default SkillsItem;
