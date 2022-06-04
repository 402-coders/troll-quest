import SinglePlayer from './SinglePlayer';
import TwoPlayers from './TwoPlayers';

type ModeCardProps = {
  modeName: string;
};

const ModeCard = ({ modeName }: ModeCardProps) => {
  return (
    <div className="card m-4 bg-base-100 shadow-xl items-center text-center">
      {/* <SinglePlayer /> */}
      <TwoPlayers />
    </div>
  );
};

export default ModeCard;
