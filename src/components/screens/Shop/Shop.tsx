import { appRoutesHeaders } from '~/components/router/appRoutes';
import { Head } from '~/components/shared/components/Head/Head';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Shop = () => {

  const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]

  return (
    <>
      <Head title={appRoutesHeaders.shop} />
      <Tabs>
    <TabList className="flex flex-row justify-around bg-secondary">
       <Tab className="border border-primary p-5 font-black uppercase text-lg text-primary cursor-pointer">Themes</Tab>
       <Tab className="border border-primary p-5 font-black uppercase text-lg text-primary cursor-pointer">skórki</Tab>
       <Tab className="border border-primary p-5 font-black uppercase text-lg text-primary cursor-pointer">coś jeszcze</Tab>
    </TabList>

    <TabPanel className="flex flex-row justify-around flex-wrap">
      {themes.map(theme => (
        <div data-theme="aqua" key={theme} className="m-5 card w-56 bg-primary text-primary-content">
        <div data-theme="aqua" className="card-body">
          <h2 className="card-title">{theme}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
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
    </>
  );
};

export default Shop;
