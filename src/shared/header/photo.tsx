import React from 'react';

import Image from 'next/image';

import avatar from '@/assets/avatar.webp';
import { useData } from '@/hooks';

const Photo = () => {
  const { fullName } = useData();

  return (
    <div className="flex w-full h-full justify-center items-center max-w-32 md:max-w-40 xl:max-w-64 ">
      <Image
        loading="eager"
        title={`${fullName} photo`}
        className={'object-cover aspect-square rounded-full'}
        src={avatar.src}
        alt={`${fullName} photo`}
        width={200}
        height={200}
      />
    </div>
  );
};

export default Photo;
