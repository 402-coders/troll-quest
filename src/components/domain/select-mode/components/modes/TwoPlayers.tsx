type TwoPlayersProps = {
  hero1: string;
  hero2: string;
};
const TwoPlayers = ({ hero1, hero2 }: TwoPlayersProps) => {
  return (
    <>
      <div className="flex max-h-72">
        <img src={hero1} alt="hero" className="w-6/12 object-contain" />
        <img src={hero2} alt="hero" className="w-6/12 object-contain" style={{ transform: 'scaleX(-1)' }} />
      </div>

      <div className="card-body justify-end">
        <h2 className="card-title m-0">Zmierz się z przeciwnikiem!</h2>
        <p>Rozpocznij misję</p>
        <button className="btn btn-primary mt-4">Dwóch graczy</button>
      </div>
    </>
  );
};

export default TwoPlayers;
