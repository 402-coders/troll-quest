import { FC, ReactNode } from 'react';

export const Header: FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 className="text-4xl font-bold text-center w-full">{children}</h1>;
};
