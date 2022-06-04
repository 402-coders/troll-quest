import { useMemo, useState } from 'react';
import { useDailyQuestContext } from '../contexts/DailyQuestContext';
import { createQuestions } from '../utils/createQuestions';
import { Question } from './Question';
import { Transition } from '@headlessui/react';
import { Slider } from '~/components/shared/components/Slider';

export const Game = () => {
  const [data] = useDailyQuestContext();
  const questions = useMemo(() => createQuestions(data), []);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);

  const handleClick = (isReal: boolean) => () => {};

  const { left, right } = questions[currentQuestionIndex];

  return (
    <div className="flex w-100 justify-around">
      <Slider />

      <Question header={right.title} image={right.image_url} source={right.source} onClick={handleClick} />
      <Question header={left.title} image={left.image_url} source={left.source} onClick={handleClick} />
    </div>
  );
};
