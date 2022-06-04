/* eslint-disable dot-notation */
import { heroImage } from '../utils/heroTypes';
import ModeCard from './ModeCard';
import Party from './modes/Party';
import SinglePlayer from './modes/SinglePlayer';
import TwoPlayers from './modes/TwoPlayers';

const SelectMode = () => {
  return (
    <div className="flex">
      <ModeCard>
        <SinglePlayer hero={heroImage['elf']} />
      </ModeCard>
      <ModeCard>
        <TwoPlayers hero1={heroImage.elf} hero2={heroImage.knight} />
      </ModeCard>
      <ModeCard>
        <Party hero1={heroImage.elf} hero2={heroImage.knight} hero3={heroImage.warrior} />
      </ModeCard>
    </div>
  );
};

export { SelectMode };
