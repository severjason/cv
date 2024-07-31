import React from 'react';

import { useData } from '@/hooks/use-data';
import { Icons } from '@/shared';
import type { ListItem as ListItemType } from '@/types';

type Props = {
  list: ListItemType['sub_items'];
};

const ExperienceSubItemList: React.FC<Props> = ({ list }) => {
  const { parseI18Data } = useData();

  if (!list?.length) return null;

  return (
    <ul className={'w-full'}>
      {list?.map(item => (
        <li key={parseI18Data(item)} className={'flex py-1 items-center'}>
          <Icons.SubList />
          {parseI18Data(item)}
        </li>
      ))}
    </ul>
  );
};

export default ExperienceSubItemList;
