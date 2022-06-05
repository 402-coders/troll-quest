/* eslint-disable dot-notation */
import { heroImage } from '../utils/heroTypes';
import { Head } from '~/components/shared/components/Head/Head';
import { appRoutesHeaders } from '~/components/router/appRoutes';

import ModeCard from './ModeCard';
import Party from './modes/Party';
import SinglePlayer from './modes/SinglePlayer';
import TwoPlayers from './modes/TwoPlayers';
import { useAuthState } from '~/components/contexts/UserContext';

const SelectMode = () => {
  const { user } = useAuthState();
  return (
    <>
      <Head title={appRoutesHeaders.selectGame} />
      <div className="flex h-5/6 flex-wrap justify-center content-center m-auto max-w-screen-xl">
        <div className="flex">
          <ModeCard>
            <SinglePlayer hero={user ? heroImage[user.currentHero] : heroImage.elf} />
          </ModeCard>
          <ModeCard>
            <TwoPlayers hero1={user ? heroImage[user.currentHero] : heroImage.elf} hero2={heroImage.knight} />
          </ModeCard>
        </div>
        <ModeCard>
          <Party hero1={heroImage.elf} hero2={heroImage.warrior} hero3={heroImage.knight} />
        </ModeCard>
      </div>
    </>
  );
};

export { SelectMode };
