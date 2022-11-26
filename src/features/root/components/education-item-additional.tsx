import React from 'react';
import Typography from '@mui/material/Typography';

import type { EducationDataAdditional } from '@/types';
import { useData } from '@/hooks';
import EducationItem from '@/features/root/components/education-item';
import EducationItemList from '@/features/root/components/education-item-list';

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
