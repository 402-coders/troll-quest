import elf from '~/assets/heroes/elf.gif';

const SinglePlayer = () => {
  return (
    <>
      <img src={elf} alt="hero" className="w-72" />
      <div className="card-body">
        <h2 className="card-title m-0">Gotowy?</h2>
        <p>Rozpocznij misję</p>
        <button className="btn btn-primary mt-4">Jeden gracz</button>
      </div>
    </>
  );
};

export default SinglePlayer;
