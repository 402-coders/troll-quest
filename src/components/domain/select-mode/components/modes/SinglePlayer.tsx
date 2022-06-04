type SinglePlayerProps = {
  hero: string;
};
const SinglePlayer = ({ hero }: SinglePlayerProps) => {
  return (
    <>
      <div className="flex max-h-72">
        <img src={hero} alt="hero" className="w-100 object-contain" />
      </div>
      <div className="card-body">
        <h2 className="card-title m-0">Gotowy?</h2>
        <p>Rozpocznij misję</p>
        <button className="btn btn-primary mt-4">Jeden gracz</button>
      </div>
    </>
  );
};

export default SinglePlayer;
