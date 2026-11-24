import { type RefObject, useEffect } from 'react';

const PRINT_WIDTH = 1280;

type Props = {
  cvRef: RefObject<HTMLDivElement | null>;
};

const PrintStyles = ({ cvRef }: Props) => {
  useEffect(() => {
    const style = document.createElement('style');
    const root = document.documentElement;
    document.head.appendChild(style);

    const updatePageSize = () => {
      const cv = cvRef.current;
      if (!cv) return;

      // beforeprint can fire before the browser switches to print media.
      root.setAttribute('data-measuring-cv', '');
      try {
        const height = Math.ceil(cv.getBoundingClientRect().height);
        style.textContent = height > 0 ? `@page { size: ${PRINT_WIDTH}px ${height}px; margin: 0; }` : '';
      } finally {
        root.removeAttribute('data-measuring-cv');
      }
    };

    const resetPageSize = () => {
      style.textContent = '';
    };

    window.addEventListener('beforeprint', updatePageSize);
    window.addEventListener('afterprint', resetPageSize);

    return () => {
      window.removeEventListener('beforeprint', updatePageSize);
      window.removeEventListener('afterprint', resetPageSize);
      style.remove();
    };
  }, [cvRef]);

  return null;
};

export default PrintStyles;
