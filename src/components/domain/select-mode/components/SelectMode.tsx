/* eslint-disable dot-notation */
import { heroImage } from '../utils/heroTypes';
import { Head } from '~/components/shared/components/Head/Head';
import { appRoutesHeaders } from '~/components/router/appRoutes';

import ModeCard from './ModeCard';
import Party from './modes/Party';
import SinglePlayer from './modes/SinglePlayer';
import TwoPlayers from './modes/TwoPlayers';

const SelectMode = () => {
  return (
    <>
      <Head title={appRoutesHeaders.selectGame} />
      <div className="flex h-5/6 flex-wrap justify-center content-center m-auto max-w-screen-xl">
        <div className="flex">
          <ModeCard>
            <SinglePlayer hero={heroImage['elf']} />
          </ModeCard>
          <ModeCard>
            <TwoPlayers hero1={heroImage.elf} hero2={heroImage.knight} />
          </ModeCard>
        </div>
        <ModeCard>
          <Party hero1={heroImage.elf} hero2={heroImage.knight} hero3={heroImage.warrior} />
        </ModeCard>
      </div>
    </>
  );
};

export { SelectMode };
