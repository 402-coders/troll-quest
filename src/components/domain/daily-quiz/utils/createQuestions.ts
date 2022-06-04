import { shuffle } from 'lodash-es';
import { DailyQuestContextValue } from '../contexts/DailyQuestContext';

export const createQuestions = (data: DailyQuestContextValue) => {
  const questions = [];
  for (let i = 0; i < data.real.length; i++) {
    const [left, right] = shuffle([data.real[i], data.fake[i]]);
    questions.push({
      left,
      right,
      isCorrect: false,
    });
  }

  return questions;
};
