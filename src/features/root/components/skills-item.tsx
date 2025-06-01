import React from 'react';

import { useAppTranslations } from '@/hooks';
import useData from '@/hooks/use-data';
import { Icons } from '@/shared';
import type { SkillListItem } from '@/types';

type SkillsItemProps = {
  title: string;
  skillsList: SkillListItem[][];
};

const SkillsItem: React.FC<SkillsItemProps> = ({ title, skillsList }) => {
  const { t } = useAppTranslations();
  const { parseI18Data } = useData();

  const generateSkill = (listItem: SkillListItem, index: number, length: number) => {
    const name = 'name' in listItem ? listItem.name : parseI18Data(listItem);
    const skill = `${name}${length < 2 || index === length - 1 ? '.' : ', '}`;
    return listItem.important ? <span className={'font-semibold'}>{skill}</span> : skill;
  };

  return (
    <div className="flex flex-col">
      <p className="font-semibold">{t(`common:skills.${title}`)}:</p>
      <ul>
        {skillsList.map((skills, index) => (
          <li key={index} className="flex">
            <Icons.List />
            <span className={'py-1'}>{skills?.map((skill, index) => generateSkill(skill, index, skills.length))}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsItem;
