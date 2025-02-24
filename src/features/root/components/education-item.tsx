import React, { ReactNode } from 'react';

import { Paper } from '@/shared';

type Props = {
  children?: ReactNode;
};

const EducationItem: React.FC<Props> = ({ children }) => (
  <Paper>
    <div className="flex flex-wrap flex-col">{children}</div>
  </Paper>
);

export default EducationItem;
