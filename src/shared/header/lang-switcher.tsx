import React, { useMemo } from 'react';

import Link from 'next/link';
import { LANGUAGES } from 'src/constants';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import type { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useAppTranslations } from '@/hooks';

const LangSwitcher = () => {
  const { t, lang } = useAppTranslations();
  const isSm = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'));

  const Icon = useMemo(() => LANGUAGES[lang]?.flagIcon, [lang]);

  const nextLocale = useMemo(() => LANGUAGES[lang]?.nextLang, [lang]);

  return Icon ? (
    <Grid
      item
      sx={{
        padding: theme => theme.spacing(0.5),
        '@media print': {
          display: 'none',
        },
      }}
    >
      <Link href={`/`} locale={nextLocale}>
        <IconButton size={isSm ? 'small' : 'large'} title={t('common:langSwitch') as string}>
          <Icon />
        </IconButton>
      </Link>
    </Grid>
  ) : null;
};

export default LangSwitcher;
