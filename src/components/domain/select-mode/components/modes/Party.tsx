type PartyProps = {
  hero1: string;
  hero2: string;
  hero3: string;
};
const Party = ({ hero1, hero2, hero3 }: PartyProps) => {
  return (
    <>
      <div className="flex max-h-72">
        <img src={hero1} alt="hero" className="w-1/3 object-contain" />
        <img src={hero2} alt="hero" className="w-1/3 object-contain" />
        <img src={hero3} alt="hero" className="w-1/3 object-contain" />
      </div>

      <div className="card-body">
        <h2 className="card-title m-0">Wszyscy na wszystkich!</h2>
        <p>Zacznijmy rozróbę</p>
        <button className="btn btn-primary mt-4">Tryb impreza</button>
      </div>
    </>
  );
};

export default Party;
