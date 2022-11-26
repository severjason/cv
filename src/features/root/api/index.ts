import config from '@/config';
import { CVDataResponse } from '@/types';

export const getMyCV = async () => {
  const res = await fetch(`${config.NEXT_PUBLIC_APP_URL}/api/cv`);

  return (await res.json()) as CVDataResponse;
};
