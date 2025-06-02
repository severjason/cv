import React, { useEffect } from 'react';

type Params = {
  onBeforePrint?: VoidFunction;
  onAfterPrint?: VoidFunction;
};

export const usePrint = ({ onBeforePrint, onAfterPrint }: Params = {}) => {
  const [isPrinting, setIsPrinting] = React.useState(false);

  useEffect(() => {
    const handleBeforePrint = () => {
      setIsPrinting(true);
      onBeforePrint?.();
    };

    window.addEventListener('beforeprint', handleBeforePrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
    };
  }, [onBeforePrint]);

  useEffect(() => {
    const handleAfterPrint = () => {
      setIsPrinting(false);
      onAfterPrint?.();
    };

    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [onAfterPrint]);

  return { isPrinting };
};
