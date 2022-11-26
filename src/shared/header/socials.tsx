import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useMemo } from 'react';

import { useAppTranslations } from '@/hooks';
import { useData } from '@/hooks/use-data';
import { darken } from '@mui/system';

const Socials = () => {
  const { t } = useAppTranslations();
  const { data } = useData();

  const socials = useMemo(
    () => [
      {
        id: 'github',
        title: t('common:social.github'),
        href: data?.main_info?.github,
        Icon: GitHubIcon,
      },
      {
        id: 'linkedIn',
        title: t('common:social.linkedIn'),
        href: data?.main_info?.linked_in,
        Icon: LinkedInIcon,
      },
      {
        id: 'facebook',
        title: t('common:social.facebook'),
        href: data?.main_info?.facebook,
        Icon: FacebookIcon,
      },
    ],
    [t, data]
  );

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        minHeight: theme => theme.spacing(6),
        backgroundColor: theme =>
          theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.75) : theme.palette.primary.dark,
        '@media print': {
          display: 'none',
        },
      }}
    >
      {socials
        .filter(s => s.href)
        .map(({ Icon, href, title, id }) => (
          <a tabIndex={-1} key={id} title={title} rel="noreferrer noopener" target="_blank" href={href as string}>
            <IconButton
              role="button"
              aria-label={title}
              sx={{
                margin: theme => theme.spacing(1),
                color: theme => theme.palette.primary.contrastText,
              }}
              size="large"
            >
              <Icon />
            </IconButton>
          </a>
        ))}
    </Grid>
  );
};

export default Socials;
