import React from 'react';

import { Icons, Titles } from '@/shared';
import type { ListItem as ListItemType } from '@/types';

type Props = {
  list: ListItemType['sub_items'];
};

const ExperienceSubItemList: React.FC<Props> = ({ list }) => {
  if (!list?.length) return null;

  return (
    <ul className={'w-full'}>
      {list?.map(item => (
        <li key={item.text.en} className={'flex py-1 items-center'}>
          <Icons.List />
          <Titles.Text {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ExperienceSubItemList;
