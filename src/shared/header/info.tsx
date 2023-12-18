import React, { ReactElement, useCallback, useRef, useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import MarkerIcon from '@mui/icons-material/Room';
import type { SxProps } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';

type ItemProps = {
  title: string | ReactElement;
  icon: ReactElement;
};

const Item: React.FC<ItemProps> = ({ title, icon }) => (
  <Grid container pt={0.5} alignItems="center">
    <Grid item display="flex">
      {icon}
    </Grid>
    <Grid item pl={1}>
      {title}
    </Grid>
  </Grid>
);

const sxStyles: SxProps<Theme> = {
  color: theme => theme.palette.primary.contrastText,
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  '@media print': {
    color: theme => theme.palette.common.black,
  },
};

const Info = () => {
  const { t, lang } = useAppTranslations();
  const { data } = useData();
  const [emailIsShown, setEmailIsShown] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!emailIsShown) {
      e.preventDefault();
      if (ref.current) {
        ref.current.href = `mailto:${data?.main_info?.email}`;
      }
      setEmailIsShown(true);
    }
  };

  return (
    <Grid container pt={1}>
      {data?.main_info?.email ? (
        <Item
          icon={<EmailIcon />}
          title={
            <Link
              ref={ref}
              target={'_blank'}
              rel="noopener noreferrer"
              title={t('common:links.email') as string}
              sx={sxStyles}
              href={`mailto:${data?.main_info?.email}`}
              onClick={handleClick}
            >
              <Typography
                component="span"
                sx={{
                  display: 'flex',
                  '@media print': {
                    display: 'none',
                  },
                }}
              >
                {emailIsShown ? data?.main_info?.email : t('common:links.email')}
              </Typography>
              <Typography
                sx={{
                  display: 'none',
                  '@media print': {
                    display: 'flex',
                  },
                }}
              >
                {data?.main_info?.email}
              </Typography>
            </Link>
          }
        />
      ) : null}
      {data?.main_info?.location?.link ? (
        <Item
          icon={<MarkerIcon />}
          title={
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={data?.main_info?.location?.link}
              title={t('common:links.location') as string}
              sx={sxStyles}
            >
              {data?.main_info?.location?.title?.[lang]}
            </Link>
          }
        />
      ) : null}
    </Grid>
  );
};

export default Info;
