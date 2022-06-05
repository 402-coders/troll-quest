import { Navigate } from 'react-router-dom';
import { useAuthState } from '../contexts/UserContext';
import { GoogleButton } from '../domain/auth/components/GoogleButton';
import { appRoutes, appRoutesHeaders } from '../router/appRoutes';
import { Head } from '../shared/components/Head/Head';
import { Loader } from '../shared/components/Loader';
import { ShareButton } from '../shared/components/ShareButton/ShareButton';
import { ReportButton } from '../shared/components/ReportButton';
import trollWalk from '~/assets/troll/troll-walk.gif';
import logo from '~/assets/Logo.png';

function Index() {
  const { state } = useAuthState();

  if (state.state === 'UNKNOWN') return <Loader />;
  if (state.state === 'SIGNED_IN') return <Navigate to={appRoutes.home} />;

  return (
    <>
      <Head title={appRoutesHeaders.signIn} />
      <div className="w-screen h-screen flex mobile:flex-col mobile: bg-secondary mobile:justify-center mobile:pl-12">
        <img className="object-cover self-center justify-self-center w-11/12" src={trollWalk} alt="walking troll" />
        <div className="flex flex-col space-y-10 justify-center items-center mr-16">
          <img src={logo} alt="logo" />
          <GoogleButton />
          <ShareButton />
          <ReportButton />

        </div>
      </div>
    </>
  );
}

export default Index;
