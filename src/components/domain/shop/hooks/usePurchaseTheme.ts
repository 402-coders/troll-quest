import { arrayUnion, increment } from 'firebase/firestore';
import { useAuthState } from '~/components/contexts/UserContext';
import { updateDocument } from '~/lib/firebase';
import { AvailableThemes } from '../components/ThemePicker';

const themePrice = 20;
export const usePurchaseTheme = () => {
  const { user } = useAuthState();

  const purchaseTheme = async (theme: AvailableThemes) => {
    if (!user || themePrice > user.points) return;

    const html = document.querySelector('html');
    if (html) {
      html.dataset.theme = theme;
    }
    try {
      await updateDocument('users', user.id, {
        points: increment(-themePrice),
        currentTheme: theme,
        availableThemes: arrayUnion(theme),
      });
    } catch (error) {
      console.log('🚀 ~ file: addPoints.ts ~ line 15 ~ addPoints ~ error', error);
    }
  };

  return { purchaseTheme };
};
