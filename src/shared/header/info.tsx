import React, { ReactElement, useState } from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Buttons, Icons } from '@/shared';
import { getBtnClx } from '@/shared/button';

type ItemProps = {
  title: string | ReactElement;
  comment?: string;
  icon: ReactElement;
};

const Item: React.FC<ItemProps> = ({ title, icon, comment }) => (
  <div className="flex w-full pt-1 items-center cv-print:pt-0.5">
    <div className="flex">{icon}</div>
    <div className="flex pl-2 items-baseline flex-col cv-print:text-sm">
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
          <span className="flex cv-print:hidden">{emailIsShown ? email : t('common:links.email')}</span>
          <span className="hidden hover:flex cv-print:flex">{email}</span>
        </p>
      }
    />
  );
};

const LocationInfo = () => {
  const { t } = useAppTranslations();
  const { data, parseI18Data } = useData();
  const location = data?.main_info?.location;

  if (!location) return null;

  const locationTitle = parseI18Data(location.title);
  const title = (
    <>
      <Buttons.Link className="cv-print:hidden" href={location.link} title={t('common:links.location') as string}>
        {locationTitle}
      </Buttons.Link>
      <span className="hidden cv-print:inline">{locationTitle}</span>
    </>
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
  <div className="flex w-full pt-2 flex-col cv-print:pt-1">
    <EmailInfo />
    <LocationInfo />
    <FamilyInfo />
  </div>
);

export default Info;
