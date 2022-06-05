import { Link, useLocation } from 'react-router-dom';
import { appRoutes, appRoutesHeaders } from '~/components/router/appRoutes';
import GoldGlass from '~/components/shared/components/GoldGlass';
import { Head } from '~/components/shared/components/Head/Head';
import { Header } from '~/components/shared/components/Header';
import { Questions } from '../utils/createQuestions';
import { QuestionSummary } from './QuestionSummary';

export const DailyQuestSummary = () => {
  const { state } = useLocation() as any;
  const questions = state as Questions;
  const totalScore = questions.reduce((acc, current) => (current.isCorrect ? acc + 1 : acc), 0);

  return (
    <div className="justify-content flex-col flex w-100 mt-8">
      <Head title={appRoutesHeaders.dailyQuestSummary} />
      <div className="flex justify-center items-center gap-10">
        <div className="flex flex-col justify-end">
          <Header>Odpowiedziałeś poprawnie na: {totalScore}</Header>
          <div className="text-right text-2xl my-2 flex justify-end">
            Dostajesz {totalScore * 10}{' '}
            <span className="ml-2">
              <GoldGlass />
            </span>
          </div>
        </div>
        <Link to={appRoutes.dailyQuest}>
          <button className="btn btn-primary btn-lg btn-wide">Jeszcze raz</button>
        </Link>
      </div>
      <div className="flex gap-4 justify-evenly w-full mt-8">
        {questions.map((question, i) => (
          <QuestionSummary key={i} {...question} />
        ))}
      </div>
    </div>
  );
};
