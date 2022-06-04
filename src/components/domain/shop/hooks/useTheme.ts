import { AvailableThemes } from '../components/ThemePicker';

export const useTheme = () => {
  const setPreviewTheme = (theme: AvailableThemes) => {
    const html = document.querySelector('html');
    console.log('🚀 ~ file: useTheme.ts ~ line 6 ~ setPreviewTheme ~ html', html);
    if (html) {
      html.dataset.theme = theme;
    }
  };

  return { setPreviewTheme };
};
