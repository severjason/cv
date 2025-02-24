import React, { ReactNode } from 'react';

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
      <div className="font-sans flex flex-col min-h-full bg-gray-100 max-w-(--breakpoint-xl) ml-auto mr-auto shadow-md">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </DataWrapper>
  );
};

export default Layout;
