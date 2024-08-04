import React from 'react';

import Education from '@/features/root/components/education';
import Experience from '@/features/root/components/experience';
import Languages from '@/features/root/components/languages';
import Profile from '@/features/root/components/profile';
import Skills from '@/features/root/components/skills';

const Root = () => {
  return (
    <div className={'flex-1'}>
      <div className="grid grid-cols-2 auto-rows-max p-2 pb-0 last-of-type:pb-4 last-of-type:pt-0">
        <div className={'px-2 col-span-full'}>
          <Profile />
        </div>
        <div className={'px-2 col-span-full'}>
          <Experience />
        </div>
        <div className={'px-2 flex flex-col justify-between col-span-full xl:col-auto'}>
          <Skills />
        </div>
        <div className={'px-2 flex flex-col justify-between col-span-full xl:col-auto'}>
          <Education />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default Root;
