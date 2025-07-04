import React, { ReactNode, useContext } from 'react';

import dayjs from 'dayjs';

import { useAppTranslations } from '@/hooks/index';
import type { CVDataResponse, I18Data } from '@/types';

export const DataContext = React.createContext<CVDataResponse>(null);

type DataWrapperProps = {
  data?: CVDataResponse;
  children?: ReactNode;
};

export const DataWrapper: React.FC<DataWrapperProps> = ({ children, data }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export function useData(outerData?: CVDataResponse) {
  const contextData = useContext(DataContext);
  const data = outerData || contextData;
  const { lang } = useAppTranslations();

  const parseI18Data = <T,>(data?: I18Data<T>) => data?.[lang] || data?.en || '';

  const fullName = `${parseI18Data(data?.main_info?.first_name)} ${parseI18Data(data?.main_info?.last_name)}`;

  const yearsOfExperience = dayjs().diff(`${data?.profile.start_year}-01-01`, 'year').toString();

  return {
    data,
    parseI18Data,
    fullName,
    yearsOfExperience,
    position: parseI18Data(data?.main_info?.position),
    specialization: data?.main_info?.specialization,
  };
}

export default useData;
