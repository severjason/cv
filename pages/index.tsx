import React, { useMemo } from 'react';

import { GetStaticProps, NextPage } from 'next';
import App from 'src/features/root';

import CvService from '@/api-lib/cv/cv.service';
import { useAppTranslations, useData } from '@/hooks';
import { Layout } from '@/shared';
import { CVDataResponse } from '@/types';
import { ssrTranslations } from '@/utils/i18n';

type Props = {
  data: CVDataResponse;
};

const HomePage: NextPage<Props> = ({ data }) => {
  const { lang } = useAppTranslations();
  const { getPosition, getFullName } = useData();

  const framework = useMemo(() => (data?.main_info?.framework ? `(${data?.main_info?.framework})` : ''), [data]);

  const title = useMemo(
    () => `${getFullName(data)} | ${getPosition(data)} ${framework}`,
    [getFullName, getPosition, framework]
  );

  const description = useMemo(() => data?.profile?.short?.[lang] || '', [data]);

  return (
    <Layout title={title} description={description} data={data}>
      <App />
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await CvService.getCvDataJSON();
  return {
    props: {
      data,
      ...(await ssrTranslations(locale)),
    },
  };
};
