import React from 'react';

import { useData } from '@/hooks';

import Info from './info';

const Titles = () => {
  const { fullName, position } = useData();
  return (
    <div className="text-white flex-1 w-full p-1 md:p-6 print:p-2">
      <h1 className={'uppercase text-center text-3xl pb-2 md:text-left md:text-4xl print:text-2xl print:pb-1'}>
        {fullName}
      </h1>
      <h2 className={'uppercase text-center text-xl pb-2 md:text-left md:text-3xl print:text-xl print:pb-1'}>
        {position}
      </h2>
      <hr className="border-white opacity-15" />
      <Info />
    </div>
  );
};

export default Titles;
