import React, { useId } from 'react';

const UAFlag = () => {
  const maskId = useId();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={'w-7 h-7'}>
      <mask id={maskId}>
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#ffda44" d="m0 256 258-39.4L512 256v256H0z" />
        <path fill="#338af3" d="M0 0h512v256H0z" />
      </g>
    </svg>
  );
};

export default UAFlag;
