import { useEffect } from 'react';

import { useRouter } from 'next/router';

export const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);
  return <div />;
};

export default Custom404;
