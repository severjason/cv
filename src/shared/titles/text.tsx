import React from 'react';

import { useData } from '@/hooks';
import { ListItem } from '@/types';

const TextTitle: React.FC<Pick<ListItem, 'title' | 'text'>> = ({ title, text }) => {
  const { parseI18Data } = useData();

  if (!title) return parseI18Data(text);

  const parsedTitle = typeof title === 'string' ? title : parseI18Data(title);

  return (
    <span>
      <span className={'font-semibold'}>{parsedTitle}</span>
      {` - `}
      {parseI18Data(text)}
    </span>
  );
};

export default TextTitle;
