import React from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Icons, Paper, Titles } from '@/shared';

const Profile = () => {
  const { t, lang } = useAppTranslations();

  const { data } = useData();

  return (
    <div>
      <Titles.Section icon={<Icons.Assignment />} text={`${t('common:profile')}`} />
      <Paper>
        <p>{data?.profile?.full?.[lang]}</p>
      </Paper>
    </div>
  );
};

export default Profile;
