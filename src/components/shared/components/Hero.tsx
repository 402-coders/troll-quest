import heroPath from 'assets/heroes/Knight.gif';

export type HeroProps = {};

export const Hero = ({}: HeroProps) => {
  return <img className="w-72 object-contain" style={{ transform: 'scaleX(-1)' }} src={heroPath} alt="hero" />;
};
