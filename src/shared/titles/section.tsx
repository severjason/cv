import React, { ReactElement } from 'react';

type OwnProps = {
  icon: ReactElement;
  text: string;
};

const SectionTitle: React.FC<OwnProps> = ({ icon, text }) => (
  <div className="flex items-center px-0 py-4 print:py-2">
    <span className={'mr-2 text-primary-950'}>{icon}</span>
    <h3 className={'text-2xl uppercase text-primary-950 print:text-xl'}>{text}</h3>
  </div>
);

export default SectionTitle;
