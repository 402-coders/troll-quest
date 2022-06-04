import { Link } from 'react-router-dom';
import { Head } from '~/components/shared/components/Head/Head';
import { appRoutes, appRoutesHeaders } from '../../router/appRoutes';

function Page404() {
  return (
    <>
      <Head title={appRoutesHeaders.error} />
      <div className="hero min-h-screen">
        <div className="text-center hero-content text-2xl font-bold">
          <div>
            <h1 className="text-6xl mb-4">404</h1>
            <h2 className="text-3xl mb-8">Oops! Coś nie zagrało</h2>
            <Link to={appRoutes.home} className="link-primary">
              Strona główna
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page404;
