import React from 'react';

import { useData } from '@/hooks';

const Footer = () => {
  const { fullName } = useData();

  return (
    <footer className="flex justify-center items-center min-h-12 bg-primary-950 print:hidden md:rounded-tl-xs md:rounded-tr-xs">
      <span className="text-white">{`${fullName} @ ${new Date().getFullYear()}`}</span>
    </footer>
  );
};

export default Footer;
