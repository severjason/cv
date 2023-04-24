import React, { ReactNode } from 'react';

import Container from '@mui/material/Container';
import { grey } from '@mui/material/colors';

import { DataWrapper } from '@/hooks/use-data';
import { Footer, Header, Titles } from '@/shared';
import type { PageTitleProps } from '@/shared/titles/page';
import type { CVDataResponse } from '@/types';

type Props = Omit<PageTitleProps, 'url'> & {
  data?: CVDataResponse;
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children, data, ...pageTitleProps }) => {
  return (
    <DataWrapper data={data}>
      <Titles.Page url={data?.main_info?.website} {...pageTitleProps} />
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          boxShadow: theme => theme.shadows[2],
          backgroundColor: theme => (theme.palette.mode === 'dark' ? grey[800] : grey[100]),
          '@media print': {
            backgroundColor: grey[100],
          },
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </DataWrapper>
  );
};

export default Layout;
