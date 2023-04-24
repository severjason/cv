import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { useData } from '@/hooks';
import { Icons } from '@/shared';
import type { EducationDataAdditional } from '@/types';

type Props = {
  list: EducationDataAdditional['items'];
};

const EducationItemList: React.FC<Props> = ({ list }) => {
  const { parseI18Data } = useData();

  return list?.length ?? 0 > 0 ? (
    <List disablePadding sx={{ width: '100%' }}>
      {list?.map(item => (
        <ListItem key={parseI18Data(item)} sx={{ p: 0 }}>
          {list?.length > 1 && <Icons.List />}
          <ListItemText>{parseI18Data(item)}</ListItemText>
        </ListItem>
      ))}
    </List>
  ) : null;
};

export default EducationItemList;
