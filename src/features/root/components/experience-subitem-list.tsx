import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { useData } from '@/hooks/use-data';
import { Icons } from '@/shared';
import type { ListItem as ListItemType } from '@/types';

type Props = {
  list: ListItemType['sub_items'];
};

const ExperienceSubItemList: React.FC<Props> = ({ list }) => {
  const { parseI18Data } = useData();

  return list?.length ?? 0 > 0 ? (
    <List disablePadding sx={{ width: '100%' }}>
      {list?.map(item => (
        <ListItem key={parseI18Data(item)} sx={{ p: 0 }}>
          <Icons.SubList />
          <ListItemText>{parseI18Data(item)}</ListItemText>
        </ListItem>
      ))}
    </List>
  ) : null;
};

export default ExperienceSubItemList;
