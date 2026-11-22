import React from 'react';

import { GetServerSideProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import App from 'src/features/root';

import CvService from '@/api-lib/cv/cv.service';
import { HttpException } from '@/api-lib/utils/http-exception.util';
import { useData } from '@/hooks';
import { Layout } from '@/shared';
import { CVDataResponse } from '@/types';
import { ssrTranslations } from '@/utils/i18n';

type Props = { data: CVDataResponse } | { statusCode: 503 };

const CvPage = ({ data }: { data: CVDataResponse }) => {
  const { fullName, position, parseI18Data, yearsOfExperience } = useData(data);

  const title = `${fullName} | ${position}`;

  const description = parseI18Data(data?.profile?.short).replace('[year]', yearsOfExperience);

  return (
    <Layout title={title} description={description} data={data}>
      <App />
    </Layout>
  );
};

const HomePage: NextPage<Props> = props =>
  'statusCode' in props ? <ErrorPage statusCode={props.statusCode} /> : <CvPage data={props.data} />;

export default HomePage;

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale, res }) => {
  let data;
  try {
    data = await CvService.getCvDataJSON();
  } catch (error) {
    if (error instanceof HttpException && error.status === 404) {
      return { notFound: true };
    }
    console.error('Could not load CV data', error instanceof Error ? error.name : 'Unknown error');
    res.statusCode = 503;
    return { props: { statusCode: 503 } };
  }
  if (!data) {
    return { notFound: true };
  }
  return {
    props: {
      data,
      ...(await ssrTranslations(locale)),
    },
  };
};
