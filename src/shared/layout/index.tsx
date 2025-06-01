import React, { ReactNode } from 'react';

import { DataWrapper } from '@/hooks/use-data';
import { Footer, Header, PrintStyles, Titles } from '@/shared';
import type { PageTitleProps } from '@/shared/titles/page';
import type { CVDataResponse } from '@/types';

type Props = Omit<PageTitleProps, 'url'> & {
  data?: CVDataResponse;
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children, data, ...pageTitleProps }) => {
  return (
    <DataWrapper data={data}>
      <PrintStyles />
      <Titles.Page url={data?.main_info?.website} {...pageTitleProps} />
      <div className="font-sans flex flex-col min-h-full  max-w-(--breakpoint-xl) ml-auto mr-auto shadow-md print:shadow-none">
        <Header />
        <main className="bg-gray-100">{children}</main>
        <Footer />
      </div>
    </DataWrapper>
  );
};

export default Layout;
