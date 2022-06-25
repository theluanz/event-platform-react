import { CircleNotch } from 'phosphor-react';
import React from 'react';

export const Loading = () => {
  return (
    <div className="flex-1 w-full items-center flex flex-col max-h-screen justify-center ">
      <CircleNotch size={40} className="animate-spin mx-auto my-auto text-green-500" />
    </div>
  );
};
