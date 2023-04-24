import React from 'react';

import RemoveIcon from '@mui/icons-material/Remove';
import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';

import { useAppTheme } from '@/hooks';

const SubListIcon: React.FC<ListItemIconProps> = ({ sx, ...props }) => {
  const { getSxColor } = useAppTheme();
  return (
    <ListItemIcon
      sx={{
        minWidth: 'unset',
        ...sx,
      }}
      {...props}
    >
      <RemoveIcon
        sx={{
          width: 8,
          height: 8,
          m: theme => theme.spacing(1, 1, 1, 3),
          color: theme => getSxColor(theme, theme.palette.common.black),
        }}
      />
    </ListItemIcon>
  );
};

export default SubListIcon;
