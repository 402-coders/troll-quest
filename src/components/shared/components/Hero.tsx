import defaultHeroPath from 'assets/heroes/Knight.gif';
import { useAuthState } from '~/components/contexts/UserContext';
import { heroImage } from '~/components/domain/select-mode/utils/heroTypes';

export type HeroProps = {};

export const Hero = ({}: HeroProps) => {
  const { user } = useAuthState();

  const heroPath = user?.currentHero ? heroImage[user.currentHero] : defaultHeroPath;

  return <img className="w-28 lg:w-72 object-contain" style={{ transform: 'scaleX(-1)' }} src={heroPath} alt="hero" />;
};
