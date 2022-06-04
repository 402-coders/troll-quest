import { Questions } from '../utils/createQuestions';
import { CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
export type QuestionSummaryProps = Questions[number];

export const QuestionSummary = ({ left, right, isCorrect }: QuestionSummaryProps) => {
  const isLeftReal = left.source !== 'aszdziennik.pl';
  const leftClass = isLeftReal ? 'text-green-500' : 'text-red-500';
  const rightClass = isLeftReal ? 'text-red-500' : 'text-green-500';
  const leftPostFix = isLeftReal ? ' [REAL]' : ' [FAKE]';
  const rigthPostFix = isLeftReal ? ' [FAKE]' : ' [REAL]';

  return (
    <div className="card w-[20vw] bg-base-100 shadow-xl cursor-pointer flex">
      <div className="flex justify-center">
        {isCorrect ? (
          <CheckCircleIcon className="w-10 text-green-500" />
        ) : (
          <MinusCircleIcon className="w-10 text-red-500" />
        )}
      </div>
      <div className="card-body">
        <h2 className={`card-title ${leftClass}`}>
          {left.title}
          {leftPostFix}
        </h2>
      </div>
      <figure>
        <img src={left.image_url} alt="question-image" />
      </figure>
      <div className="card-body">
        <h2 className={`card-title ${rightClass}`}>
          {right.title}
          {rigthPostFix}
        </h2>
      </div>
      <figure>
        <img src={right.image_url} alt="question-image" />
      </figure>
    </div>
  );
};
