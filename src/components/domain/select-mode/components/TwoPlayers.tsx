import elf from '~/assets/heroes/elf.gif';
import knight from '~/assets/heroes/Knight.gif';

const TwoPlayers = () => {
  return (
    <div>
      <div className="flex gap-4">
        <img src={elf} alt="hero" className="w-72" />
        <img src={knight} alt="hero" className="w-72 " style={{ transform: 'scaleX(-1)' }} />
      </div>

      <div className="card-body">
        <h2 className="card-title m-0">Zmierz się z przeciwnikiem!</h2>
        <p>Rozpocznij misję</p>
        <button className="btn btn-primary mt-4">Dwóch graczy</button>
      </div>
    </div>
  );
};

export default TwoPlayers;
