import monsterPath from 'assets/troll/troll-idle.gif';

export type MonsterProps = {};

export const Monster = ({}: MonsterProps) => {
  return (
    <>
      <img className="w-72 object-contain" src={monsterPath} alt="" />
    </>
  );
};
