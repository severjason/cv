import React from 'react';

import { GetStaticProps, NextPage } from 'next';
import App from 'src/features/root';

import CvService from '@/api-lib/cv/cv.service';
import { useData } from '@/hooks';
import { Layout } from '@/shared';
import { CVDataResponse } from '@/types';
import { ssrTranslations } from '@/utils/i18n';

type Props = {
  data: CVDataResponse;
};

const HomePage: NextPage<Props> = ({ data }) => {
  const { fullName, position, parseI18Data } = useData(data);

  const framework = data?.main_info?.framework ? `(${data?.main_info?.framework})` : '';

  const title = `${fullName} | ${position} ${framework}`;

  const description = parseI18Data(data?.profile?.short);

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
