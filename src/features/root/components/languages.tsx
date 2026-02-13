import React from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Icons, Paper, Titles } from '@/shared';

import Item from './languages-item';

const Languages = () => {
  const { t } = useAppTranslations();
  const { data } = useData();

  if (!data?.languages?.length) return null;

  return (
    <div>
      <Titles.Section icon={<Icons.Globe />} text={`${t('common:languages.title')}`} />
      <Paper>
        {data?.languages?.map(lang => (
          <Item key={lang.title.en} {...lang} />
        ))}
      </Paper>
    </div>
  );
};

export default Languages;
