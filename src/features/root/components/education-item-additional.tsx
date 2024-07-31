import React from 'react';

import EducationItem from '@/features/root/components/education-item';
import EducationItemList from '@/features/root/components/education-item-list';
import { useData } from '@/hooks';
import type { EducationDataAdditional } from '@/types';

const EducationItemAdditional: React.FC<EducationDataAdditional> = ({ title, items }) => {
  const { parseI18Data } = useData();
  return (
    <EducationItem>
      <p className="font-semibold">{parseI18Data(title)}</p>
      <EducationItemList list={items} />
    </EducationItem>
  );
};

export default EducationItemAdditional;
