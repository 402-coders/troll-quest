import { increment } from 'firebase/firestore';
import { useAuthState } from '~/components/contexts/UserContext';
import { updateDocument } from '~/lib/firebase';

export const useAddPoints = () => {
  const { user } = useAuthState();

  const addPoints = async (points: number) => {
    if (!user) return;

    try {
      await updateDocument('users', user.id, { points: increment(points) });
    } catch (error) {
      console.log('🚀 ~ file: addPoints.ts ~ line 15 ~ addPoints ~ error', error);
    }
    return user.points + points;
  };

  return { addPoints };
};
