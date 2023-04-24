import React from 'react';

import CalendarIcon from '@mui/icons-material/DateRange';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import EducationItem from '@/features/root/components/education-item';
import { useAppTheme, useData } from '@/hooks';
import type { EducationDataBasic } from '@/types';

const EducationItemBasic: React.FC<EducationDataBasic> = ({ company, end_date, role, start_date }) => {
  const { parseI18Data } = useData();
  const { getSxColor } = useAppTheme();
  return (
    <EducationItem>
      <Typography variant="body2" fontWeight={600}>
        {parseI18Data(role)}
      </Typography>
      <Grid alignItems="center" display="flex" pr={1} item>
        <CalendarIcon sx={{ mr: 1, color: theme => getSxColor(theme) }} />
        <Typography sx={{ color: theme => getSxColor(theme) }}>{`${start_date} - ${end_date}`}</Typography>
      </Grid>
      <Typography>{parseI18Data(company)}</Typography>
    </EducationItem>
  );
};

export default EducationItemBasic;
