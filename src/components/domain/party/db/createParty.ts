import { addDocument, setDocument } from '~/lib/firebase';
import { getRealNews, getFakeNews } from '../api/news';
import { createQuestions, Questions } from '../utils/createQuestions';
import { getUniqueName } from '../utils/getUniqueName';

export type Game = {
  players: string[];
  questions: Questions;
};

export const createParty = async () => {
  try {
    const gameName = getUniqueName();
    const realNews = getRealNews();
    const fakeNews = getFakeNews();
    const [real, fake] = await Promise.all([realNews, fakeNews]);
    const questions = createQuestions({ real, fake });
    await setDocument('games', gameName, { questions });

    return gameName;
  } catch (ex) {
    console.log('🚀 ~ file: createParty.ts ~ line 14 ~ createParty ~ ex', ex);
  }
};
