import { Location, useLocation } from 'react-router-dom';
import { Questions } from '../utils/createQuestions';

export type DailyQuestSummaryProps = {};

export const DailyQuestSummary = ({}: DailyQuestSummaryProps) => {
  const { state } = useLocation() as any;
  const questions = state as Questions;
  const totalScore = questions.reduce((acc, current) => (current.isCorrect ? acc + 1 : acc), 0);

  return <div>Odpowiedziałeś poprawnie na: {totalScore}</div>;
};
