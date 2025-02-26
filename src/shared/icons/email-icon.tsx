import React from 'react';

import clsx from 'clsx';

const EmailIcon: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({ className, ...props }) => (
  <svg
    className={clsx('w-6 h-6 fill-primary-800', className)}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"></path>
  </svg>
);
export default EmailIcon;
