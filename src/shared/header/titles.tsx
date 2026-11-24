import React from 'react';

import { useData } from '@/hooks';

import Info from './info';

const Titles = () => {
  const { fullName, position, specialization } = useData();
  return (
    <div className="text-white flex-1 w-full p-1 md:p-6 cv-print:p-2">
      <h1
        className={
          'uppercase text-center text-3xl pb-2 md:text-left md:text-4xl cv-print:text-2xl cv-print:pb-1 cv-print:text-left'
        }
      >
        {fullName}
      </h1>
      <h2
        className={
          'uppercase text-center text-xl pb-2 md:text-left md:text-3xl cv-print:text-xl cv-print:pb-1  cv-print:text-left'
        }
      >
        {position}
        {specialization && (
          <span className="normal-case">
            <br className={'md:hidden cv-print:hidden'} />
            <span className={'hidden px-2 md:inline-flex cv-print:inline-flex  cv-print:text-left'}>{`|`}</span>
            {specialization}
          </span>
        )}
      </h2>
      <hr className="border-white opacity-15" />
      <Info />
    </div>
  );
};

export default Titles;
