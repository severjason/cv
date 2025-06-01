import React from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Icons, Paper, Titles } from '@/shared';

const Profile = () => {
  const { t } = useAppTranslations();

  const { data, parseI18Data } = useData();

  return (
    <div>
      <Titles.Section icon={<Icons.Assignment />} text={`${t('common:profile')}`} />
      <Paper>
        <p>{parseI18Data(data?.profile?.full)}</p>
      </Paper>
    </div>
  );
};

export default Profile;
