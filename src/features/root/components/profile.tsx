import React from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Icons, Paper, Titles } from '@/shared';

const Profile = () => {
  const { t } = useAppTranslations();

  const { data, parseI18Data, yearsOfExperience } = useData();

  if (!data) return null;

  return (
    <div>
      <Titles.Section icon={<Icons.Assignment />} text={`${t('common:profile')}`} />
      <Paper>
        <p>{parseI18Data(data.profile.full).replace('[year]', yearsOfExperience)}</p>
      </Paper>
    </div>
  );
};

export default Profile;
