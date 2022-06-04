import { useAuthState } from '~/components/contexts/UserContext';
import { usePreviewTheme } from '../hooks/usePreviewTheme';
import { usePurchaseTheme } from '../hooks/usePurchaseTheme';

export type AvailableThemes =
  | 'light'
  | 'dark'
  | 'cupcake'
  | 'bumblebee'
  | 'emerald'
  | 'corporate'
  | 'synthwave'
  | 'retro'
  | 'cyberpunk'
  | 'valentine'
  | 'halloween'
  | 'garden'
  | 'forest'
  | 'aqua'
  | 'lofi'
  | 'pastel'
  | 'fantasy'
  | 'wireframe'
  | 'dracula'
  | 'cmyk';

export type ThemePickerProps = { theme: AvailableThemes };

export const ThemePicker = ({ theme }: ThemePickerProps) => {
  const { user } = useAuthState();
  const { setPreviewTheme } = usePreviewTheme();
  const { purchaseTheme, setTheme } = usePurchaseTheme();

  const hasTheme = user?.availableThemes.includes(theme);

  const handlePreviewClick = () => {
    setPreviewTheme(theme);
  };

  const handleBuyClick = () => {
    hasTheme ? purchaseTheme(theme) : setTheme(theme);
  };

  return (
    <div data-theme={theme} className="m-5 card w-80 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{theme}</h2>
        <div className="card-actions justify-end">
          <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <p className="text-primary-content">A</p>
          </div>
          <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <p className="text-secondary-content">A</p>
          </div>
          <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <p className="text-accent-content">A</p>
          </div>
          <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <p className="text-neutral-content">A</p>
          </div>
          <div className="flex justify-between w-full">
            <button className="btn btn-secondary" onClick={handlePreviewClick}>
              Podejrzyj
            </button>
            <button onClick={handleBuyClick} className="btn">
              {hasTheme ? 'Użyj' : 'Kup'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
