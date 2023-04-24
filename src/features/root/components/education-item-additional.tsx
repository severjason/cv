import React from 'react';

import Typography from '@mui/material/Typography';

import EducationItem from '@/features/root/components/education-item';
import EducationItemList from '@/features/root/components/education-item-list';
import { useData } from '@/hooks';
import type { EducationDataAdditional } from '@/types';

const EducationItemAdditional: React.FC<EducationDataAdditional> = ({ title, items }) => {
  const { parseI18Data } = useData();
  return (
    <EducationItem>
      <Typography variant="body2" fontWeight={600}>
        {parseI18Data(title)}
      </Typography>
      <EducationItemList list={items} />
    </EducationItem>
  );
};

export default EducationItemAdditional;
