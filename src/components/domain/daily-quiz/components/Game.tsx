import { useMemo, useRef, useState } from 'react';
import { useDailyQuestContext } from '../contexts/DailyQuestContext';
import { createQuestions } from '../utils/createQuestions';
import { Question } from './Question';
import 'antd/dist/antd.css';
import { CarouselRef } from 'antd/lib/carousel';
import { Carousel } from 'antd';
import { appRoutes } from '~/components/router/appRoutes';
import { useNavigate } from 'react-router-dom';

export const Game = () => {
  const sliderRef = useRef<CarouselRef>(null);
  const [data] = useDailyQuestContext();
  const questions = useMemo(() => createQuestions(data), []);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (isReal: boolean) => () => {
    if (currentQuestionIndex >= questions.length - 1) {
      navigate(appRoutes.dailyQuestSummary, { state: questions });
      return;
    }

    if (isReal) questions[currentQuestionIndex].isCorrect = true;

    sliderRef.current?.next();
    setcurrentQuestionIndex((current) => current + 1);
  };

  return (
    <div className="w-100">
      <Carousel dotPosition="top" ref={sliderRef}>
        {questions.map(({ left, right }, i) => (
          <div key={i} className="flex justify-center">
            <div className="flex justify-around w-[80vw] m-auto">
              <Question header={right.title} image={right.image_url} source={right.source} onClick={handleClick} />
              <Question header={left.title} image={left.image_url} source={left.source} onClick={handleClick} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
