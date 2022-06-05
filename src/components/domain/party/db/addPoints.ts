import { increment } from 'firebase/firestore';
import { useAuthState } from '~/components/contexts/UserContext';
import { getDocument, setDocument, updateDocument } from '~/lib/firebase';
import { useGameName } from '../hooks/useGameName';

export const useAddPoints = () => {
  const { user } = useAuthState();
  const gameName = useGameName();

  const addPoints = async (points: number) => {
    if (!gameName || !user) return;

    try {
      const collectionPath = `games/${gameName}/users` as any;
      const document = await getDocument(collectionPath, user.id);
      if (!document.exists()) {
        await setDocument(collectionPath, user.id, { ...user, score: 0, startTime: Date.now() });
      } else {
        await updateDocument(collectionPath, user.id, { ...user, score: increment(points) });
      }
    } catch (error) {
      console.log('🚀 ~ file: addPoints.ts ~ line 15 ~ addPoints ~ error', error);
    }
  };

  return { addPoints };
};
