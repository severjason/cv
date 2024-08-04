import React from 'react';
import clsx from 'clsx';

const RemoveIcon: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({ className, ...props }) => (
  <svg
    className={clsx('w-6 h-6 fill-primary-800', className)}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19 13H5v-2h14z"></path>
  </svg>
);
export default RemoveIcon;
