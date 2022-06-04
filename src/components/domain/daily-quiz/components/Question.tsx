export type QuestionProps = {
  image: string;
  header: string;
  source: string;
  onClick: (isReal: boolean) => () => void;
};

export const Question = ({ image, header, source, onClick }: QuestionProps) => {
  const isReal = source !== 'aszdziennik.pl';

  return (
    <div className="card w-[30vw] bg-base-100 shadow-xl cursor-pointer" onClick={onClick(isReal)}>
      <div className="card-body">
        <h2 className="card-title">{header}</h2>
      </div>
      <figure>
        <img src={image} alt="question-image" />
      </figure>
    </div>
  );
};
