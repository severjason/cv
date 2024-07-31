import React, { useMemo } from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { Icons, Paper, Titles } from '@/shared';

const Profile = () => {
  const { t, lang } = useAppTranslations();

  const { data } = useData();

  const profileData = useMemo(() => data?.profile?.full?.[lang], [data?.profile, lang]);

  return (
    <div>
      <Titles.Section icon={<Icons.Assignment />} text={`${t('common:profile')}`} />
      <Paper>
        <p>{profileData}</p>
      </Paper>
    </div>
  );
};

export default Profile;
