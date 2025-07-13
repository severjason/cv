import React from 'react';

import dayjs from 'dayjs';

import { DEFAULT_DATE_FORMAT } from '@/constants';
import ExperienceItemList from '@/features/root/components/experience-item-list';
import { useAppTranslations } from '@/hooks';
import useData from '@/hooks/use-data';
import { Buttons, Icons, Paper } from '@/shared';
import type { ExperienceItem, I18Data } from '@/types';

const ExperienceItemComponent: React.FC<ExperienceItem> = ({
  company,
  end_date,
  role,
  start_date,
  list,
  location,
  link,
  stack,
}) => {
  const { t, lang } = useAppTranslations();
  const { parseI18Data } = useData();

  const parsedCompany = typeof company === 'string' ? company : parseI18Data(company as I18Data);

  const getFormattedDate = (date: string) =>
    date === 'present' ? 'present' : dayjs(date).locale(lang)?.format?.(DEFAULT_DATE_FORMAT);

  return (
    <Paper>
      <div className="flex flex-wrap flex-col">
        <div>
          <p className={'font-semibold pr-1 text-lg'}>
            {parseI18Data(role)}
            {parsedCompany ? (
              <>
                <span>{` ${t('common:at')} `}</span>
                <span>
                  {link ? (
                    <Buttons.Link
                      className={`font-semibold text-lg!`}
                      href={link}
                      title={`${t('common:visit')} ${parsedCompany}`}
                    >
                      {parsedCompany}
                    </Buttons.Link>
                  ) : (
                    <span className="font-semibold">{parsedCompany}</span>
                  )}
                </span>
              </>
            ) : null}
          </p>
        </div>
        {location && (
          <div className="container flex items-center">
            <Icons.Marker className={'mr-2 p-0 '} />
            <span className={'text-primary-800'}>{parseI18Data(location)}</span>
          </div>
        )}
        <div className={'flex container items-center pr-2 fill-primary-800 text-primary-800'}>
          <Icons.Calendar className="mr-2" />
          <span className={'capitalize'}>{`${getFormattedDate(start_date)} - ${getFormattedDate(end_date)}`}</span>
        </div>
      </div>
      <ExperienceItemList list={list} stack={stack} />
    </Paper>
  );
};

export default ExperienceItemComponent;
