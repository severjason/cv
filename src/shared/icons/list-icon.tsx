import React from 'react';
import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';
import CircleIcon from '@mui/icons-material/Circle';
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
        sx={{
          width: 8,
          height: 8,
          m: theme => theme.spacing(1, 2, 1, 1),
          color: theme => getSxColor(theme),
        }}
      />
    </ListItemIcon>
  );
};
export default ListIcon;
