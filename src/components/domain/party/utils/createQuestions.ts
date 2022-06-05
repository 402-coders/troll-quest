import { shuffle } from 'lodash-es';
import { PartyQuestContextValue } from '../contexts/PartyQuestContext';

export const createQuestions = (data: PartyQuestContextValue) => {
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

export type Questions = ReturnType<typeof createQuestions>;
