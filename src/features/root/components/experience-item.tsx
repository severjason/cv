import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CalendarIcon from '@mui/icons-material/DateRange';
import MarkerIcon from '@mui/icons-material/Room';
import React, { useCallback, useMemo } from 'react';

import { ExperienceItem, I18Data } from '@/types';
import { useAppTheme, useAppTranslations, useData } from '@/hooks';
import ExperienceItemList from '@/features/root/components/experience-item-list';
import dayjs from 'dayjs';
import { DEFAULT_DATE_FORMAT } from '@/constants';

const ExperienceItem: React.FC<ExperienceItem> = ({ company, end_date, role, start_date, list, location, link }) => {
  const { t, lang } = useAppTranslations();
  const { parseI18Data } = useData();
  const { getSxColor } = useAppTheme();

  const parsedCompany = useMemo(
    () => (typeof company === 'string' ? company : parseI18Data(company as I18Data)),
    [company, parseI18Data]
  );

  const getFormattedDate = useCallback(
    (date: string) => dayjs(date, '').locale(lang).format(DEFAULT_DATE_FORMAT),
    [lang]
  );

  return (
    <Paper
      sx={{
        width: '100%',
        padding: theme => theme.spacing(2),
        marginBottom: theme => theme.spacing(2),
        '&:last-child': {
          marginBottom: 0,
        },
      }}
    >
      <Grid container wrap="wrap" direction="column">
        <Grid container>
          <Typography variant="body2" fontWeight={600} pr={0.5}>
            {parseI18Data(role)}
            {parsedCompany ? (
              <>
                <span>{` ${t('common:at')} `}</span>
                <span>
                  {link ? (
                    <Link
                      color="textPrimary"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link}
                      variant="body2"
                      underline="always"
                      fontWeight={600}
                      title={`${t('common:visit')} ${parsedCompany}`}
                    >
                      {parsedCompany}
                    </Link>
                  ) : (
                    <Typography component="span" fontWeight={600}>
                      {parsedCompany}
                    </Typography>
                  )}
                </span>
              </>
            ) : null}
          </Typography>
        </Grid>
        <Grid container>
          <Typography display="flex" alignItems="center">
            <MarkerIcon
              sx={{
                mr: 1,
                p: 0,
                color: theme => getSxColor(theme),
              }}
            />
          </Typography>
          <Typography sx={{ color: theme => getSxColor(theme) }}>{parseI18Data(location)}</Typography>
        </Grid>
        <Grid container display="flex" alignItems="center" pr={1}>
          <CalendarIcon sx={{ mr: 1, color: theme => getSxColor(theme) }} />
          <Typography sx={{ color: theme => getSxColor(theme) }} textTransform="capitalize">{`${getFormattedDate(
            start_date
          )} - ${getFormattedDate(end_date)}`}</Typography>
        </Grid>
      </Grid>
      <ExperienceItemList list={list} />
    </Paper>
  );
};

export default ExperienceItem;
