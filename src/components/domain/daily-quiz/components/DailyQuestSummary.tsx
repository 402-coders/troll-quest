import { Location, useLocation } from 'react-router-dom';
import { Header } from '~/components/shared/components/Header';
import { Questions } from '../utils/createQuestions';
import { QuestionSummary } from './QuestionSummary';

export type DailyQuestSummaryProps = {};

export const DailyQuestSummary = ({}: DailyQuestSummaryProps) => {
  const { state } = useLocation() as any;
  const questions = state as Questions;
  const totalScore = questions.reduce((acc, current) => (current.isCorrect ? acc + 1 : acc), 0);

  return (
    <div className="justify-content flex-col flex w-100 ">
      <Header>Odpowiedziałeś poprawnie na: {totalScore}</Header>
      <span className="text-center text-2xl">Dostajesz {totalScore * 10} złotych lup</span>
      <div className="flex gap-4 w-full mt-5">
        {questions.map((question, i) => (
          <QuestionSummary key={i} {...question} />
        ))}
      </div>
    </div>
  );
};
