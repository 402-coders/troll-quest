import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import GoldGlass from '~/components/shared/components/GoldGlass';
import { Header } from '~/components/shared/components/Header';
import { Loader } from '~/components/shared/components/Loader';
import { db } from '~/lib/firebase';
import { heroImage } from '../../select-mode/utils/heroTypes';
import { useGameName } from '../hooks/useGameName';
import { GameUser } from '../hooks/useGameUser';

export type LeaderboardProps = {};

const calculateTimeToComplete = (startTime: number, endTime: number) => {
  const time = endTime - startTime;
  if (time > 0) {
    const minutes = Math.floor(time / 60000);
    const seconds = Number(((time % 60000) / 1000).toFixed(0));
    return seconds == 60 ? `${minutes + 1  }:00` : `${minutes  }:${  seconds < 10 ? '0' : ''  }${seconds}`;
  }

  return '';
};

export const Leaderboard = ({}: LeaderboardProps) => {
  const gameName = useGameName();
  const collectionPath = `games/${gameName}/users/` as any;
  const [users, isLoading] = useCollectionData<GameUser>(collection(db, collectionPath) as any);

  if (isLoading || !users) return <Loader />;

  return (
    <div className="p-8">
      <Header>Lista najlepszych:</Header>
      <div className="flex flex-col items-center">
        {users
          ?.sort((a, b) => a.endTime - a.startTime - (b.endTime - b.startTime))
          ?.sort((a, b) => b.score - a.score)
          .map((user) => (
            <div
              key={user.id}
              className="mt-10 card w-1/2 mob:w-screen h-20 shadow-sm flex flex-row justify-around items-center border-2"
            >
              <div className="avatar self-center">
                <div className="w-12 h-12 rounded-full">
                  <img src={user.avatar} alt="user avatar" />
                </div>
              </div>
              <p className="m-0 text-center">{user.displayName}</p>
              <img src={heroImage[user.currentHero]} alt="user hero" className="w-20" />

              <div className="flex">
                <p className="m-2 text-lg font-black">{user.score}</p>
                <GoldGlass />
              </div>
              <p className="m-0 text-center">{calculateTimeToComplete(user.startTime, user.endTime)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
