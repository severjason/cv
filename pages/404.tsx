export const Custom404 = () => <div />;

export const getStaticProps = () => {
  return { redirect: { destination: '/', permanent: false } };
};

export default Custom404;
