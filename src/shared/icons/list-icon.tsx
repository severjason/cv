import React from 'react';

const ListIcon: React.FC = () => (
  <span className="flex items-center">
    <svg
      className={'w-2 h-2 m-1 mr-2 md:mr-4 fill-primary-800'}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path>
    </svg>
  </span>
);
export default ListIcon;
