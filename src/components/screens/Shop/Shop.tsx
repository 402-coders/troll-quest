import { appRoutesHeaders } from '~/components/router/appRoutes';
import { Head } from '~/components/shared/components/Head/Head';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import elf from '~/assets/heroes/elf.gif'
import knight from '~/assets/heroes/knight.gif'
import warrior from '~/assets/heroes/warrior.gif'
import redKnight from '~/assets/heroes/red-knight.gif'
import bronzeKnight from '~/assets/heroes/bronze-knight.gif'
import warriorGrey from '~/assets/heroes/warrior-1.gif'
import warriorGold from '~/assets/heroes/warrior-2.gif'
import violetElf from '~/assets/heroes/elf-violet.gif'
import { SearchCircleIcon } from '@heroicons/react/outline';
import { ThemePicker } from '~/components/domain/shop/components/ThemePicker';

const Shop = () => {
  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'dracula',
    'cmyk',
  ] as const;

  return (
    <>
      <Head title={appRoutesHeaders.shop} />
      <div className="w-4/5 mx-auto my-5 border-8 border-primary">
        <Tabs>
          <TabList className="flex flex-row justify-around bg-secondary p-3">
            <Tab className="border border-primary rounded-full p-5 font-black uppercase text-lg text-primary cursor-pointer focus:bg-primary focus:text-secondary">
              Motywy
            </Tab>
            <Tab className="border border-primary rounded-full p-5 font-black uppercase text-lg text-primary cursor-pointer focus:bg-primary focus:text-secondary">
              skórki
            </Tab>
            <Tab className="border border-primary rounded-full	 p-5 font-black uppercase text-lg text-primary cursor-pointer focus:bg-primary focus:text-secondary">
              tryby
            </Tab>
          </TabList>

          <TabPanel className="h-4/5 flex flex-row justify-around flex-wrap">
            {themes.map((theme) => (
              <ThemePicker key={theme} theme={theme} />
            ))}
          </TabPanel>
          <TabPanel className="flex flex-wrap justify-around">
      <div className="m-5 border-2 border-primary w-52 flex flex-col items-center">
        <img className="h-32 m-2" src={elf} />
        <p>Elf</p>
        <SearchCircleIcon className="w-7" />
        <p>5000</p>
      </div>
      <div className="m-5 border-2 border-primary w-52 flex flex-col items-center">
        <img className="h-32 m-2" src={warrior} />
        <p>Warrior</p>
        <SearchCircleIcon className="w-7" />
        <p>5000</p>
      </div>
      <div className="m-5 border-2 border-primary w-52 flex flex-col items-center">
        <img className="h-32 m-2" src={knight} />
        <p>Gold Knight</p>
        <SearchCircleIcon className="w-7" />
        <p>5000</p>
      </div>
      <div className="m-5 border-2 border-primary w-52 flex flex-col items-center">
        <img className="h-32 m-2" src={redKnight} />
        <p>Silver Knight</p>
        <SearchCircleIcon className="w-7" />
        <p>5000</p>
      </div>
      <div className="m-5 border-2 border-primary w-52  flex flex-col items-center">
        <img className="h-32 m-2" src={bronzeKnight} />
        <p>Bronze Knight</p>
        <SearchCircleIcon className="w-7" />
        <p>5000</p>
      </div>
      <div className="m-5 border-2 border-primary w-52  flex flex-col items-center">
        <img className="h-32 m-2" src={warriorGrey} />
        <p>Bronze Warrior Women</p>
        <SearchCircleIcon className="w-7" />
        <p>5000</p>
      </div>
      <div className="m-5 border-2 border-primary w-52  flex flex-col items-center">
        <img className="h-32 m-2" src={warriorGold} />
        <p>Warrior Women</p>
        <SearchCircleIcon className="w-7" />
        <p>5000</p>
      </div>
      <div className="m-5 border-2 border-primary w-52 flex flex-col items-center">
        <img className="h-32 m-2" src={violetElf} />
        <p>Elf</p>
        <SearchCircleIcon className="w-7" />
        <p>5000</p>
      </div>
    </TabPanel>
          <TabPanel>Tryby</TabPanel>
        </Tabs>
      </div>
      </>
  );
};

export default Shop;
