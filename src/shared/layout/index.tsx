import React, { ReactNode, useRef } from 'react';

import { DataWrapper } from '@/hooks/use-data';
import { Footer, Header, PrintStyles, Titles } from '@/shared';
import type { PageTitleProps } from '@/shared/titles/page';
import type { CVDataResponse } from '@/types';

type Props = Omit<PageTitleProps, 'url'> & {
  data?: CVDataResponse;
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children, data, ...pageTitleProps }) => {
  const cvRef = useRef<HTMLDivElement>(null);

  return (
    <DataWrapper data={data}>
      <PrintStyles cvRef={cvRef} />
      <Titles.Page {...pageTitleProps} />
      <div
        ref={cvRef}
        className="mx-auto flex min-h-full max-w-(--breakpoint-xl) flex-col font-sans shadow-md cv-print:min-h-0 cv-print:w-[1280px] cv-print:max-w-none cv-print:shadow-none"
      >
        <Header />
        <main className="bg-gray-100">{children}</main>
        <Footer />
      </div>
    </DataWrapper>
  );
};

export default Layout;
