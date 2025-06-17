import React, { ReactElement, useState } from 'react';

import Link from 'next/link';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { usePrint } from '@/hooks/use-print';
import { Icons } from '@/shared';
import { getBtnClx } from '@/shared/button';

type ItemProps = {
  title: string | ReactElement;
  comment?: string;
  icon: ReactElement;
};

const Item: React.FC<ItemProps> = ({ title, icon, comment }) => (
  <div className="flex w-full pt-1 items-center print:pt-0.5">
    <div className="flex">{icon}</div>
    <div className="flex pl-2 items-baseline flex-col print:text-sm">
      {title}
      {comment && <span className="text-sm ">{comment}</span>}
    </div>
  </div>
);

const EmailInfo = () => {
  const { t } = useAppTranslations();
  const { data } = useData();
  const [emailIsShown, setEmailIsShown] = useState(false);

  const onShowEmail = () => setEmailIsShown(true);
  const onHideEmail = () => setEmailIsShown(false);

  usePrint({ onBeforePrint: onShowEmail, onAfterPrint: onHideEmail });

  const email = data?.main_info?.email;

  const handleCopy = async () => {
    if (!email) return;
    await navigator.clipboard.writeText(email);
  };

  const handleClick = async (e: React.MouseEvent) => {
    if (emailIsShown) return handleCopy();
    e.preventDefault();
    onShowEmail();
  };

  if (!email) return null;

  return (
    <Item
      icon={<Icons.Email className="fill-white" />}
      title={
        <p
          title={t(emailIsShown ? 'common:emailCopy' : 'common:links.email')}
          className={getBtnClx({ variant: 'link' })}
          onClick={handleClick}
        >
          <span className={'flex'}>{emailIsShown ? email : t('common:links.email')}</span>
          <span className="hidden hover:flex">{email}</span>
        </p>
      }
    />
  );
};

const LocationInfo = () => {
  const { t } = useAppTranslations();
  const { data, parseI18Data } = useData();
  const { isPrinting } = usePrint();
  const location = data?.main_info?.location;

  if (!location) return null;

  const title = !isPrinting ? (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={location.link}
      title={t('common:links.location') as string}
      className={getBtnClx({ variant: 'link' })}
    >
      {parseI18Data(location.title)}
    </Link>
  ) : (
    parseI18Data(location.title)
  );

  return <Item icon={<Icons.Marker className="fill-white" />} title={title} comment={parseI18Data(location.comment)} />;
};

const FamilyInfo = () => {
  const { data, parseI18Data } = useData();
  const family = data?.main_info?.family;

  if (!family) return null;

  return <Item icon={<Icons.Family className="fill-white" />} title={parseI18Data(family)} />;
};

const Info = () => (
  <div className="flex w-full pt-2 flex-col print:pt-1">
    <EmailInfo />
    <LocationInfo />
    <FamilyInfo />
  </div>
);

export default Info;
