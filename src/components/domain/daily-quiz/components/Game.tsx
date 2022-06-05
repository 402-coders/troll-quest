import { useMemo, useState } from 'react';
import { useDailyQuestContext } from '../contexts/DailyQuestContext';
import { createQuestions } from '../utils/createQuestions';
import { Question } from './Question';
import { appRoutes } from '~/components/router/appRoutes';
import { useNavigate } from 'react-router-dom';
import { Monster } from './Monster';
import { useAddPoints } from '../db/addPoints';
import { Hero } from '~/components/shared/components/Hero';
import Carousel from 'react-material-ui-carousel';

export const Game = () => {
  const [data] = useDailyQuestContext();
  const questions = useMemo(() => createQuestions(data), []);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const { addPoints } = useAddPoints();

  const handleClick = (isReal: boolean) => () => {
    if (currentQuestionIndex >= questions.length - 1) {
      const totalScore = questions.reduce((acc, current) => (current.isCorrect ? acc + 1 : acc), 0);
      addPoints(totalScore * 10);
      navigate(appRoutes.dailyQuestSummary, { state: questions });
      return;
    }

    if (isReal) questions[currentQuestionIndex].isCorrect = true;

    setcurrentQuestionIndex((current) => current + 1);
  };

  return (
    <div className="w-full justify-center">
      <div className="justify-center gap-4 mt-8 hidden lg:flex">
        <Monster />
        <Hero />
      </div>

      <Carousel
        className="!overflow-visible"
        index={currentQuestionIndex}
        navButtonsAlwaysInvisible
        autoPlay={false}
        animation="slide"
        indicators={false}
      >
        {questions.map(({ left, right }, i) => (
          <div key={i} className="flex justify-center">
            <div className="flex flex-wrap items-center justify-evenly py-0 lg:py-10 w-screen m-auto flex-col lg:flex-row">
              <Question header={right.title} image={right.image_url} source={right.source} onClick={handleClick} />
              <Question header={left.title} image={left.image_url} source={left.source} onClick={handleClick} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
