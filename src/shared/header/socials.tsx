import React from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Buttons, Icons } from '@/shared';

const Socials = () => {
  const { t } = useAppTranslations();
  const { data } = useData();

  const socials = [
    {
      id: 'github',
      title: t('common:social.github'),
      href: data?.main_info?.github,
      Icon: Icons.GitHub,
    },
    {
      id: 'linkedIn',
      title: t('common:social.linkedIn'),
      href: data?.main_info?.linked_in,
      Icon: Icons.LinkedIn,
    },
    {
      id: 'facebook',
      title: t('common:social.facebook'),
      href: data?.main_info?.facebook,
      Icon: Icons.Facebook,
    },
  ];

  return (
    <div className={'w-full flex justify-center bg-primary-950 md:rounded-bl-xs md:rounded-br-xs gap-1 py-0.5'}>
      {socials
        .filter(s => s.href)
        .map(({ Icon, href, title, id }) => (
          <a tabIndex={-1} key={id} title={title} rel="noreferrer noopener" target="_blank" href={href as string}>
            <Buttons.Button role="button" aria-label={title} size="icon" variant="icon" className="text-white">
              <Icon className="fill-white" />
            </Buttons.Button>
          </a>
        ))}
    </div>
  );
};

export default Socials;
