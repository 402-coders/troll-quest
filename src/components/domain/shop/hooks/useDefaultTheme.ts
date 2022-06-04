import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthState } from '~/components/contexts/UserContext';

export const useDefaultTheme = () => {
  const { user } = useAuthState();
  const location = useLocation();
  const setTheme = () => {
    if (!user?.currentTheme) return;
    const html = document.querySelector('html');
    if (html) {
      html.dataset.theme = user.currentTheme;
    }
  };

  useEffect(() => {
    setTheme();
  }, [user?.currentTheme, location.pathname]);

  return { setTheme };
};
