import React from 'react';
import { Logo } from './Logo';

const Footer = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row bg-gray-900 py-8 px-6 items-center justify-between border-t border-gray-600 gap-8">
      <div className="flex gap-4 items-center">
        <Logo />
        <p className="text-sm text-gray-400">Alguns direitos reservados</p>
      </div>
      <div>
        <a className="text-sm text-gray-400" href="/">
          Voltar para a Home
        </a>
      </div>
    </div>
  );
};

export default Footer;
