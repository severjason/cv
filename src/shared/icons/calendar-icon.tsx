import React from 'react';
import clsx from 'clsx';

const CalendarIcon: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({ className, ...props }) => (
  <svg
    className={clsx('w-6 h-6 fill-primary-800', className)}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M9 11H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89
       2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V9h14z"
    ></path>
  </svg>
);
export default CalendarIcon;
