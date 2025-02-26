import React, { ReactNode, useContext } from 'react';

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

export function useData() {
  const data = useContext(DataContext);
  const { lang } = useAppTranslations();

  const parseI18Data = <T,>(data: I18Data<T>) => data?.[lang] || '';

  const getFullName = (data: CVDataResponse) =>
    `${data?.main_info?.first_name?.[lang]} ${data?.main_info?.last_name?.[lang]}`;

  const getPosition = (data: CVDataResponse) => `${data?.main_info?.position?.[lang]}`;

  return {
    data,
    parseI18Data,
    getFullName,
    getPosition,
    fullName: getFullName(data),
    position: getPosition(data),
  };
}

export default useData;
