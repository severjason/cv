'use client';

import React, { ComponentProps } from 'react';
import { JSX } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-1 focus-visible:outline-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        link: 'text-base! text-primary underline-offset-4 hover:underline focus-visible:underline',
        icon: 'rounded-full hover:bg-black/[.04] focus:outline-hidden focus-visible:outline-hidden p-2 focus-visible:border-gray-300 focus-visible:border',
      },
      size: {
        default: '',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const getBtnClx = (config?: VariantProps<typeof buttonVariants>) => clsx(buttonVariants(config));

export type ButtonProps<T extends keyof JSX.IntrinsicElements = 'button'> = Omit<JSX.IntrinsicElements[T], 'size'> &
  VariantProps<typeof buttonVariants> & {
    component?: T;
    ref?: React.ForwardedRef<ComponentProps<T>>;
  };

function Button<T extends keyof JSX.IntrinsicElements = 'button'>(props: ButtonProps<T>) {
  const { className, component = 'button', variant, size, ref, ...rest } = props;
  const Comp = component as React.ElementType;
  return (
    <Comp
      role="button"
      tabIndex={0}
      className={clsx(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...rest}
    />
  );
}

Button.displayName = 'Button';

export { Button, getBtnClx };
