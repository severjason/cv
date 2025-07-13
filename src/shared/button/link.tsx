'use client';

import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { Icons } from 'src/shared';

import { getBtnClx } from './index';

export type LinkButtonProps = React.ComponentPropsWithRef<typeof Link>;

export const LinkButton: React.FC<LinkButtonProps> = ({ className, children, ...props }) => {
  const classes = clsx(getBtnClx({ variant: 'link' }), className);
  return (
    <Link className={classes} color="textPrimary" target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <Icons.Link className={'hidden print:inline-flex'} />
    </Link>
  );
};
