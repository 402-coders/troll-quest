import { Questions } from '../utils/createQuestions';
import { CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
export type QuestionSummaryProps = Questions[number];

export const QuestionSummary = ({ left, right, isCorrect }: QuestionSummaryProps) => {
  const isLeftReal = left.source !== 'aszdziennik.pl';
  const leftClass = isLeftReal ? 'text-success' : 'text-error';
  const rightClass = isLeftReal ? 'text-error' : 'text-success';
  const leftPostFix = isLeftReal ? ' [REAL]' : ' [FAKE]';
  const rigthPostFix = isLeftReal ? ' [FAKE]' : ' [REAL]';

  return (
    <div className="card w-[20vw] bg-base-300 shadow-xl flex ">
      <div className="flex justify-center mt-4">
        {isCorrect ? (
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-16 text-success" />
            <h3 className="text-2xl m-0 text-success">Dobrze</h3>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <MinusCircleIcon className="w-16 text-error" />
            <h3 className="text-4xl m-0 text-error">Źle</h3>
          </div>
        )}
      </div>
      <div className="card-body">
        <h2 className={`card-title `}>
          {left.title}
          <span className={`text-2xl ${leftClass}`}>{leftPostFix}</span>
        </h2>
      </div>
      <figure>
        <img src={left.image_url} alt="question-image" />
      </figure>
      <div className="card-body">
        <h2 className={`card-title `}>
          {right.title}
          <span className={`text-2xl ${rightClass}`}>{rigthPostFix}</span>
        </h2>
      </div>
      <figure>
        <img src={right.image_url} alt="question-image" />
      </figure>
    </div>
  );
};
