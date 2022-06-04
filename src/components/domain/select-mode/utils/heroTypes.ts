import elf from '~/assets/heroes/elf.gif';
import knight from '~/assets/heroes/Knight.gif';
import warrior from '~/assets/heroes/warrior.gif';

export type HeroTypes = 'elf' | 'knight' | 'warrior';

type HeroImage = {
  [key in HeroTypes]: string;
};
export const heroImage: HeroImage = {
  elf,
  knight,
  warrior,
};
