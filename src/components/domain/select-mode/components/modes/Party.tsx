import { useNavigate } from 'react-router-dom';
import { createParty } from '~/components/domain/party/db/createParty';
import { appRoutes } from '~/components/router/appRoutes';

type PartyProps = {
  hero1: string;
  hero2: string;
  hero3: string;
};
const Party = ({ hero1, hero2, hero3 }: PartyProps) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const gameName = await createParty();
    if (!gameName) return;
    navigate(appRoutes.partySummary.replace(':gameName', gameName));
  };

  return (
    <>
      <div className="flex max-h-72">
        <img src={hero1} alt="hero" className="w-1/3 object-contain" />
        <img src={hero2} alt="hero" className="w-1/3 object-contain" />
        <img src={hero3} alt="hero" className="w-1/3 object-contain" />
      </div>

      <div className="card-body justify-end">
        <h2 className="card-title m-0">Wszyscy na wszystkich!</h2>
        <p>Zacznijmy rozróbę</p>
        <button onClick={handleClick} className="btn btn-primary mt-4">
          Tryb impreza
        </button>
      </div>
    </>
  );
};

export default Party;
