import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import React from 'react';

import avatar from '@/assets/avatar.webp';
import { useData } from '@/hooks';
import Image from 'next/image';

const Photo = () => {
  const { fullName } = useData();
  return (
    <Grid
      item
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxWidth={{ xs: 125, sm: 150, md: 250 }}
      minHeight={{ xs: 125, sm: 150, md: 250 }}
      sx={{
        '@media print': {
          minHeight: 150,
          maxWidth: 150,
        },
      }}
    >
      <Avatar
        sx={{
          width: { xs: 100, sm: 150, md: 200 },
          height: { xs: 100, sm: 150, md: 200 },
          margin: theme => theme.spacing(1),
          '@media print': {
            width: 150,
            height: 150,
          },
        }}
      >
        <Image
          title={`${fullName} photo`}
          style={{ objectFit: 'cover' }}
          src={avatar.src}
          alt={`${fullName} photo`}
          width={200}
          height={200}
        />
      </Avatar>
    </Grid>
  );
};

export default Photo;
