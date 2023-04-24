import React from 'react';

import CircleIcon from '@mui/icons-material/Circle';
import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';

import { useAppTheme } from '@/hooks';

const ListIcon: React.FC<ListItemIconProps> = ({ sx, ...props }) => {
  const { getSxColor } = useAppTheme();
  return (
    <ListItemIcon
      sx={{
        display: 'flex',
        alignItems: 'center',
        minWidth: 'unset',
        ...sx,
      }}
      {...props}
    >
      <CircleIcon
        sx={theme => ({
          width: 8,
          height: 8,
          margin: {
            xs: theme.spacing(0.5, 1, 0.5, 0.5),
            sm: theme.spacing(1, 2, 1, 1),
          },
          color: getSxColor(theme),
        })}
      />
    </ListItemIcon>
  );
};
export default ListIcon;
