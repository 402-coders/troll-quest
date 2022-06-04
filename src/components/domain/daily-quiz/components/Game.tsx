import { useMemo, useRef, useState } from 'react';
import { useDailyQuestContext } from '../contexts/DailyQuestContext';
import { createQuestions } from '../utils/createQuestions';
import { Question } from './Question';
import 'antd/dist/antd.css';
import { CarouselRef } from 'antd/lib/carousel';
import { Carousel } from 'antd';
import { appRoutes } from '~/components/router/appRoutes';
import { useNavigate } from 'react-router-dom';
import { Monster } from './Monster';
import { useAddPoints } from '../db/addPoints';
import { Hero } from '~/components/shared/components/Hero';

export const Game = () => {
  const sliderRef = useRef<CarouselRef>(null);
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

    sliderRef.current?.next();
    setcurrentQuestionIndex((current) => current + 1);
  };

  return (
    <div className="w-full justify-center">
      <div className="flex justify-around">
        <Monster />
        <Hero />
      </div>
      <Carousel dotPosition="bottom" ref={sliderRef}>
        {questions.map(({ left, right }, i) => (
          <div key={i} className="flex justify-center">
            <div className="flex justify-around m-auto">
              <Question header={right.title} image={right.image_url} source={right.source} onClick={handleClick} />
              <Question header={left.title} image={left.image_url} source={left.source} onClick={handleClick} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
