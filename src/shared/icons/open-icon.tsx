import React from 'react';

import clsx from 'clsx';

const OpenIcon: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({ className, ...props }) => (
  <svg
    className={clsx('w-6 h-6 fill-primary-800', className)}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14
     3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"
    ></path>
  </svg>
);
export default OpenIcon;
