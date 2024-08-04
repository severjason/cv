import React from 'react';

import { useData } from '@/hooks/use-data';
import type { LanguageItem } from '@/types';

const LanguagesItem: React.FC<LanguageItem> = ({ title, level }) => {
  const { parseI18Data } = useData();
  return (
    <p className="flex items-center pb-2 last-of-type:pb-0">
      <span className="font-semibold">{parseI18Data(title)}:</span>
      <span className="pl-2">{parseI18Data(level)}</span>
    </p>
  );
};

export default LanguagesItem;
