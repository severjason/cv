import React from 'react';

import { useData } from '@/hooks';
import { Icons } from '@/shared';
import type { EducationDataAdditional } from '@/types';

type Props = {
  list: EducationDataAdditional['items'];
};

const EducationItemList: React.FC<Props> = ({ list }) => {
  const { parseI18Data } = useData();

  if (!list.length) return null;

  return (
    <ul className="w-full">
      {list?.map(item => (
        <li className="flex p-0" key={parseI18Data(item)}>
          {list?.length > 1 && <Icons.List />}
          <span className="py-1">{parseI18Data(item)}</span>
        </li>
      ))}
    </ul>
  );
};

export default EducationItemList;
