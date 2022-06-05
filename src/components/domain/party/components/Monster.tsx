import monsterPath from 'assets/troll/troll-idle.gif';

export type MonsterProps = {};

export const Monster = ({}: MonsterProps) => {
  return (
    <>
      <img className="w-28 lg:w-72 object-contain" src={monsterPath} alt="" />
    </>
  );
};
