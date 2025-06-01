import React from 'react';

import ExperienceSubItemList from '@/features/root/components/experience-subitem-list';
import { useAppTranslations, useData } from '@/hooks';
import { Buttons, Icons, Titles } from '@/shared';
import type { ExperienceItem } from '@/types';

type StackListProps = {
  stack?: string[];
  index?: number;
  listLength?: number;
};

const StackList: React.FC<StackListProps> = ({ stack, listLength = 0, index = 0 }) => {
  const { t } = useAppTranslations();

  if (!stack?.length) return null;

  const isLast = index === listLength - 1;
  const isSingle = listLength <= 1;

  return (
    <p className={`italic ${isLast ? 'pb-0' : 'pb-2'} ${isSingle ? 'pl-0' : 'pl-4 md:pl-8'}`}>
      {`${t('common:experience.stack')}: ${stack?.join(', ')}.`}
    </p>
  );
};

const ExperienceItemList: React.FC<Pick<ExperienceItem, 'list' | 'stack'>> = ({ list, stack }) => {
  const { t } = useAppTranslations();
  const { parseI18Data } = useData();

  if (!list?.length) return null;

  return (
    <>
      <ul>
        {list.map((item, index) => (
          <React.Fragment key={parseI18Data(item.text) || index}>
            <li className="flex flex-col justify-center">
              <div className="flex flex-nowrap">
                <span className={'flex-1 my-1'}>
                  <Titles.Text {...item} />
                  {item.link && (
                    <Buttons.Button
                      component={'a'}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.link}
                      className={'color-primary-950 my-0 mx-1 py-0 px-0'}
                      title={`${t('common:visit')}`}
                    >
                      <Icons.Open className={'w-4! h-4!'} />
                    </Buttons.Button>
                  )}
                </span>
              </div>
              <ExperienceSubItemList list={item.sub_items} />
            </li>
            <StackList stack={item?.stack} listLength={list?.length} index={index} />
          </React.Fragment>
        ))}
      </ul>
      <StackList stack={stack} />
    </>
  );
};

export default ExperienceItemList;
