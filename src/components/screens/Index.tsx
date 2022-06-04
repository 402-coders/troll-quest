import { Navigate } from 'react-router-dom';
import { useAuthState } from '../contexts/UserContext';
import { GoogleButton } from '../domain/auth/components/GoogleButton';
import { SignOutButton } from '../domain/auth/components/SignOutButton';
import { appRoutes } from '../router/appRoutes';
import { Loader } from '../shared/components/Loader';
import Logo from '../shared/components/Logo/Logo';
import { ShareButton } from '../shared/components/ShareButton/ShareButton';

function Index() {
  const { state } = useAuthState();

  if (state.state === 'UNKNOWN') return <Loader />;
  if (state.state === 'SIGNED_IN') return <Navigate to={appRoutes.home} />;

  return (
    <>
      {/* <Head title="TOP PAGE" /> */}
      <div className="w-screen h-screen grid grid-cols-2 grid-rows-1 min-h-screen bg-secondary m-0">
        <img className="object-cover h-full w-full" src="../../../assets/main-page-troll.gif" alt="" />
        <div className="flex flex-col space-y-10 justify-center items-center">
          <Logo />
          <GoogleButton />
          <ShareButton />
          <SignOutButton />
        </div>
      </div>
    </>
  );
}

export default Index;
