import { List, X } from 'phosphor-react';
import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  mobileMenu: React.ReactElement;
}

export const Header = (props: HeaderProps) => {
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);

  return (
    <header className="w-full py-5 flex items-center justify-between md:justify-center px-6 bg-gray-700 border-b border-gray-600">
      <Logo />
      <div className="block md:hidden ">
        <button
          className="flex items-center gap-2"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}>
          Aulas
          {openMobileMenu ? (
            <X size={32} className="text-blue-500" />
          ) : (
            <List size={32} className="text-blue-500" />
          )}
        </button>
        {openMobileMenu && (
          <div className="absolute w-full top-[4.7rem] left-0 bg-green-400 mx-auto z-50">
            {props.mobileMenu}
          </div>
        )}
      </div>
    </header>
  );
};
