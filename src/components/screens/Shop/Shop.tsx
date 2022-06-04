import { appRoutesHeaders } from '~/components/router/appRoutes';
import { Head } from '~/components/shared/components/Head/Head';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Shop = () => {

  const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "dracula", "cmyk"]

  return (
    <>
      <Head title={appRoutesHeaders.shop} />
      <div className="w-4/5 mx-auto my-5 border-8 border-primary">
      <Tabs>
    <TabList className="flex flex-row justify-around bg-secondary p-3">
       <Tab className="border border-primary rounded-full p-5 font-black uppercase text-lg text-primary cursor-pointer focus:bg-primary focus:text-secondary">Themes</Tab>
       <Tab className="border border-primary rounded-full p-5 font-black uppercase text-lg text-primary cursor-pointer focus:bg-primary focus:text-secondary">skórki</Tab>
       <Tab className="border border-primary rounded-full	 p-5 font-black uppercase text-lg text-primary cursor-pointer focus:bg-primary focus:text-secondary">coś jeszcze</Tab>
    </TabList>

    <TabPanel className="h-4/5 flex flex-row justify-around flex-wrap">
      {themes.map(theme => (
        <div data-theme={theme} key={theme} className="m-5 card w-56 bg-primary text-primary-content">
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
          <button className="btn">Kup teraz</button>
        </div>
      </div>
    </div>
      )
   
      )}

    </TabPanel>
    <TabPanel>
      skórki
    </TabPanel>
    <TabPanel>
    coś jeszcze
    </TabPanel>
    
    
  </Tabs>
  </div>
    </>
  );
};

export default Shop;
