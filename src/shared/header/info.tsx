import React, { ReactElement, useRef, useState } from 'react';

import Link from 'next/link';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { getBtnClx } from '@/shared/button';
import { Icons } from '@/shared';

type ItemProps = {
  title: string | ReactElement;
  icon: ReactElement;
};

const Item: React.FC<ItemProps> = ({ title, icon }) => (
  <div className="flex w-full pt-1 items-center">
    <div className="flex">{icon}</div>
    <div className="flex pl-2">{title}</div>
  </div>
);

const Info = () => {
  const { t, lang } = useAppTranslations();
  const { data } = useData();
  const [emailIsShown, setEmailIsShown] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!emailIsShown) {
      e.preventDefault();
      if (ref.current) {
        ref.current.href = `mailto:${data?.main_info?.email}`;
      }
      setEmailIsShown(true);
    }
  };

  return (
    <div className="flex w-full pt-2 flex-col">
      {data?.main_info?.email ? (
        <Item
          icon={<Icons.Email className="fill-white" />}
          title={
            <Link
              tabIndex={0}
              ref={ref}
              href="#"
              target={'_blank'}
              rel="noopener noreferrer"
              title={t('common:links.email') as string}
              className={getBtnClx({ variant: 'link' })}
              onClick={handleClick}
            >
              <span className={'flex'}>{emailIsShown ? data?.main_info?.email : t('common:links.email')}</span>
              <span className="hidden hover:flex">{data?.main_info?.email}</span>
            </Link>
          }
        />
      ) : null}
      {data?.main_info?.location?.link ? (
        <Item
          icon={<Icons.Marker className="fill-white" />}
          title={
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={data?.main_info?.location?.link}
              title={t('common:links.location') as string}
              className={getBtnClx({ variant: 'link' })}
            >
              {data?.main_info?.location?.title?.[lang]}
            </Link>
          }
        />
      ) : null}
    </div>
  );
};

export default Info;
