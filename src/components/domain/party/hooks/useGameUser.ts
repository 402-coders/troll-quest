import { doc, collection } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useAuthState } from '~/components/contexts/UserContext';
import { db } from '~/lib/firebase';
import { User } from '../../auth/db/addNewUser';
import { Game } from '../db/createParty';
import { useGameName } from './useGameName';

export type GameUser = User & { score: number; hasFinished: boolean };

export const useGameUser = () => {
  const { user } = useAuthState();
  const gameName = useGameName();
  const collectionPath = `games/${gameName}/users` as any;
  const [gameUser, isLoading] = useDocumentData<GameUser>(doc(collection(db, collectionPath), user!.id) as any);

  return { gameUser, isLoading };
};
