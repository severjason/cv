import React from 'react';

import clsx from 'clsx';

function PaperBase(props: React.HTMLAttributes<HTMLDivElement>, ref: React.ForwardedRef<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      className={clsx('p-4 w-full mb-4 last-of-type:mb-0 bg-white shadow-md rounded-sm', className)}
      ref={ref}
      {...rest}
    />
  );
}

const Paper = React.forwardRef(PaperBase);

Paper.displayName = 'Paper';

export { Paper };
