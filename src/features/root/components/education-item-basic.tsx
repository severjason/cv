import React from 'react';

import EducationItem from '@/features/root/components/education-item';
import { useData } from '@/hooks';
import { Calendar } from '@/shared/icons';
import type { EducationDataBasic } from '@/types';

const EducationItemBasic: React.FC<EducationDataBasic> = ({ company, end_date, role, start_date }) => {
  const { parseI18Data } = useData();
  return (
    <EducationItem>
      <p className={'font-semibold'}>{parseI18Data(role)}</p>
      <div className="items-center flex pr-2 ">
        <Calendar />
        <p className={'text-primary-950'}>{`${start_date} - ${end_date}`}</p>
      </div>
      <p>{parseI18Data(company)}</p>
    </EducationItem>
  );
};

export default EducationItemBasic;
