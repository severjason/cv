import React from 'react';

import LangSwitcher from './lang-switcher';
import Photo from './photo';
import Socials from './socials';
import Titles from './titles';

const Header = () => (
  <header>
    <div className="relative p-2 bg-primary-800 ">
      <div className="flex justify-center items-center top-0 right-0 absolute p-1">
        <LangSwitcher />
      </div>
      <div className="flex w-full justify-center items-center flex-col md:flex-row">
        <Photo />
        <Titles />
      </div>
    </div>
    <Socials />
  </header>
);

export default Header;
