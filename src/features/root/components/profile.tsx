import React from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Buttons, Icons, Paper, Titles } from '@/shared';

const ProfileRecommendations = () => {
  const { t } = useAppTranslations();
  const { data } = useData();

  if (!data?.profile?.recommendations_link) return null;

  return (
    <Buttons.Link className={`pl-1 `} href={data.profile.recommendations_link} title={`${t('common:recommendations')}`}>
      {t('common:recommendations')}
    </Buttons.Link>
  );
};

const Profile = () => {
  const { t } = useAppTranslations();

  const { data, parseI18Data, yearsOfExperience } = useData();

  if (!data) return null;

  return (
    <div>
      <Titles.Section icon={<Icons.Assignment />} text={`${t('common:profile')}`} />
      <Paper>
        <p>
          {parseI18Data(data.profile.full).replace('[year]', yearsOfExperience)}
          <ProfileRecommendations />
        </p>
      </Paper>
    </div>
  );
};

export default Profile;
