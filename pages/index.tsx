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
  const { fullName, position, parseI18Data, yearsOfExperience } = useData(data);

  const title = `${fullName} | ${position}`;

  const description = parseI18Data(data?.profile?.short).replace('[year]', yearsOfExperience);

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
