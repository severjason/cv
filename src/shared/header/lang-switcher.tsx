import React from 'react';

import Link from 'next/link';
import { LANGUAGES } from 'src/constants';

import { useAppTranslations } from '@/hooks';
import { Buttons } from '@/shared';

const LangSwitcher = () => {
  const { t, lang } = useAppTranslations();
  const Icon = LANGUAGES[lang]?.flagIcon;
  const nextLocale = LANGUAGES[lang]?.nextLang;

  if (!Icon) return null;

  return (
    <div className="print:hidden p-1">
      <Link href={`/`} locale={nextLocale}>
        <Buttons.Button size="icon" variant="icon" title={t('common:langSwitch')}>
          <Icon />
        </Buttons.Button>
      </Link>
    </div>
  );
};

export default LangSwitcher;
