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
      <div className="flex justify-center my-4">
        {isCorrect ? (
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-16 text-success" />
            <h3 className="text-4xl font-bold m-0 text-success">Dobrze</h3>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <MinusCircleIcon className="w-16 text-error" />
            <h3 className="text-4xl font-bold m-0 text-error">Źle</h3>
          </div>
        )}
      </div>

      <figure>
        <img src={left.image_url} alt="question-image" />
      </figure>
      <div className="card-body pt-2 mb-4">
        <h2 className="card-title m-0">
          {left.title}
          <span className={`text-2xl ${leftClass}`}>{leftPostFix}</span>
        </h2>
      </div>

      <figure>
        <img src={right.image_url} alt="question-image" />
      </figure>
      <div className="card-body pt-2 mb-4">
        <h2 className="card-title m-0">
          {right.title}
          <span className={`text-2xl ${rightClass}`}>{rigthPostFix}</span>
        </h2>
      </div>
    </div>
  );
};
