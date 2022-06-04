import { arrayUnion, increment } from 'firebase/firestore';
import { useAuthState } from '~/components/contexts/UserContext';
import { updateDocument } from '~/lib/firebase';
import { AvailableThemes } from '../components/ThemePicker';

const themePrice = 20;
export const usePurchaseTheme = () => {
  const { user } = useAuthState();

  const purchaseTheme = async (theme: AvailableThemes) => {
    if (!user || themePrice > user.points) return;

    try {
      await updateDocument('users', user.id, {
        points: increment(-themePrice),
        currentTheme: theme,
        availableThemes: arrayUnion(theme),
      });
    } catch (error) {
      console.log('🚀 ~ file: usePurchaseTheme.ts ~ line 20 ~ purchaseTheme ~ error', error);
    }
  };

  return { purchaseTheme };
};
