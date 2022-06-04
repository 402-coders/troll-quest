import { appRoutesHeaders } from '~/components/router/appRoutes';
import { Head } from '~/components/shared/components/Head/Head';

const Shop = () => {
  return (
    <>
      <Head title={appRoutesHeaders.shop} />
      <div>Shop</div>
    </>
  );
};

export default Shop;
