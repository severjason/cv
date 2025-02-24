'use client';

import React, { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import clsx from 'clsx';
import { JSX } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-1 focus-visible:outline-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        link: 'text-base! text-primary underline-offset-4 hover:underline focus-visible:underline',
        icon: 'rounded-full hover:bg-black/[.04] focus:outline-hidden focus-visible:outline-hidden focus:bg-black/[.05] p-2',
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
  };

function ButtonBase<T extends keyof JSX.IntrinsicElements = 'button'>(
  props: ButtonProps<T>,
  ref: React.ForwardedRef<ComponentProps<T>>
) {
  const { className, component = 'button', variant, size, ...rest } = props;
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

const Button = React.memo(React.forwardRef(ButtonBase)) as unknown as typeof ButtonBase;

ButtonBase.displayName = 'Button';

export { Button, getBtnClx };
