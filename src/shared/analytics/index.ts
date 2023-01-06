import dynamic from 'next/dynamic';

const Gtag = dynamic(() => import('./gtag'), {
  ssr: false,
});

export { Gtag };
