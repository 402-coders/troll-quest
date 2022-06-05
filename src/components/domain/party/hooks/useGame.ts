import { doc, collection } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from '~/lib/firebase';
import { Game } from '../db/createParty';
import { useGameName } from './useGameName';

export const useGame = () => {
  const gameName = useGameName();
  const [game, isLoading] = useDocumentData<Game>(doc(collection(db, 'games'), gameName) as any);

  return { game, isLoading };
};
