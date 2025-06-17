import React, { ReactNode } from 'react';

import Link from 'next/link';
import { LANGUAGES } from 'src/constants';

import { useAppTranslations } from '@/hooks';
import { usePrint } from '@/hooks/use-print';
import { Buttons } from '@/shared';

const LangSwitcherButton: React.FC<{ icon: ReactNode }> = ({ icon }) => {
  const { t } = useAppTranslations();
  return (
    <Buttons.Button size="icon" variant="icon" title={t('common:langSwitch')}>
      {icon}
    </Buttons.Button>
  );
};

const LangSwitcher = () => {
  const { lang } = useAppTranslations();
  const { isPrinting } = usePrint();
  const Icon = LANGUAGES[lang]?.flagIcon;
  const nextLocale = LANGUAGES[lang]?.nextLang;

  if (!Icon) return null;

  return (
    <div className="p-1">
      {isPrinting ? (
        <LangSwitcherButton icon={<Icon />} />
      ) : (
        <Link href={`/`} locale={nextLocale}>
          <LangSwitcherButton icon={<Icon />} />
        </Link>
      )}
    </div>
  );
};

export default LangSwitcher;
