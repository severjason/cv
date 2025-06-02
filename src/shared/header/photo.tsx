import React from 'react';

import Image from 'next/image';

import avatar from '@/assets/avatar.webp';
import { useData } from '@/hooks';
import UseAppTranslations from '@/hooks/use-app-translations';

const Photo = () => {
  const { fullName } = useData();
  const { t } = UseAppTranslations();

  return (
    <div className="flex w-full h-full justify-center items-center max-w-32 md:max-w-40 xl:max-w-64 ">
      <Image
        loading="eager"
        title={`${fullName} ${t('common:photo')}`}
        className={'object-cover aspect-square rounded-full'}
        src={avatar.src}
        alt={`${fullName} ${t('common:photo')}`}
        width={200}
        height={200}
      />
    </div>
  );
};

export default Photo;
