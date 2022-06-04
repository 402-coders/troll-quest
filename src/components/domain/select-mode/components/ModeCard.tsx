import { ReactNode } from 'react';

type ModeCardProps = {
  children: ReactNode;
};

const ModeCard = ({ children }: ModeCardProps) => {
  return <div className="card m-4 bg-base-100 shadow-xl items-center text-center">{children}</div>;
};

export default ModeCard;
