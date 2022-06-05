import { useState } from 'react';
import { Questions } from '../utils/createQuestions';
import { Question } from './Question';

import { appRoutes } from '~/components/router/appRoutes';
import { useNavigate, Navigate } from 'react-router-dom';
import { Monster } from './Monster';
import { useAddPoints } from '../db/addPoints';
import { Hero } from '~/components/shared/components/Hero';
import { useGameName } from '../hooks/useGameName';
import { updateDocument } from '~/lib/firebase';
import { useAuthState } from '~/components/contexts/UserContext';
import { useGameUser } from '../hooks/useGameUser';
import Carousel from 'react-material-ui-carousel';

export type GameProps = {
  questions: Questions;
};

export const Game = ({ questions }: GameProps) => {
  const gameName = useGameName();
  const { gameUser } = useGameUser();
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const { addPoints } = useAddPoints();
  const { user } = useAuthState();

  const handleClick = (isReal: boolean) => async () => {
    if (currentQuestionIndex >= questions.length - 1) {
      const collectionPath = `games/${gameName}/users` as any;
      if (user) await updateDocument(collectionPath, user.id, { ...user, hasFinished: true, endTime: Date.now() });
      navigate(appRoutes.partySummary.replace(':gameName', gameName ?? ''));
      return;
    }
    if (isReal) {
      addPoints(10);
    }
    setcurrentQuestionIndex((current) => current + 1);
  };

  if (gameUser?.hasFinished) return <Navigate to={appRoutes.partySummary.replace(':gameName', gameName ?? '')} />;

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
        swipe={false}
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
