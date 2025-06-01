import { useEffect } from 'react';

import { useAppTranslations } from '@/hooks';
import { Locales } from '@/types';

const PAGE_SIZE: Record<Locales, string> = {
  [Locales.en]: '1200px 1350px',
  [Locales.de]: '1200px 1425px',
  [Locales.uk]: '1200px 1450px',
};

const PrintStyles = () => {
  const { lang } = useAppTranslations();

  const size = PAGE_SIZE[lang] || PAGE_SIZE[Locales.en];

  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'dynamic-print-style';

    style.innerHTML = `
      @media print {
        @page {
          margin: 0;
          size: ${size};
        }
      }
    `;

    const existing = document.getElementById('dynamic-print-style');
    if (existing) existing.remove();

    document.head.appendChild(style);

    return () => {
      style.remove(); // cleanup on unmount
    };
  }, [size]);

  return null;
};

export default PrintStyles;
