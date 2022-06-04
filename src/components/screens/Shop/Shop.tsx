import { appRoutesHeaders } from '~/components/router/appRoutes';
import { Head } from '~/components/shared/components/Head/Head';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import elf from '~/assets/heroes/elf.gif';
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
              Themes
            </Tab>
            <Tab className="border border-primary rounded-full p-5 font-black uppercase text-lg text-primary cursor-pointer focus:bg-primary focus:text-secondary">
              skórki
            </Tab>
            <Tab className="border border-primary rounded-full	 p-5 font-black uppercase text-lg text-primary cursor-pointer focus:bg-primary focus:text-secondary">
              coś jeszcze
            </Tab>
          </TabList>

          <TabPanel className="h-4/5 flex flex-row justify-around flex-wrap">
            {themes.map((theme) => (
              <ThemePicker key={theme} theme={theme}></ThemePicker>
            ))}
          </TabPanel>
          <TabPanel>
            <div className="border-5 border-black w-36 flex flex-col items-center">
              <img src={elf} />
              <p>Elf</p>
              <SearchCircleIcon className="w-7" />
            </div>
            <div className="border-5 border-black w-36 flex flex-col items-center">
              <img src={elf} />
              <p>Elf</p>
              <SearchCircleIcon className="w-7" />
            </div>
            <div className="border-5 border-black w-36 flex flex-col items-center">
              <img src={elf} />
              <p>Elf</p>
              <SearchCircleIcon className="w-7" />
            </div>
          </TabPanel>
          <TabPanel>coś jeszcze</TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Shop;
