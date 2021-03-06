import { useEffect } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { AvailableThemes } from '../components/ThemePicker';

export const usePreviewTheme = () => {
  const { user } = useAuthState();
  const setPreviewTheme = (theme: AvailableThemes) => {
    const html = document.querySelector('html');
    if (html) {
      html.dataset.theme = theme;
    }
  };

  return { setPreviewTheme };
};
