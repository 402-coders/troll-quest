import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from '~/components/contexts/UserContext';
import { appRoutes } from '~/components/router/appRoutes';
import Index from '~/components/screens/Index';
import { Loader } from '~/components/shared/components/Loader';
// import Page404 from '~/components/screens/404/404';

type RequireAuthProps = {
  children: ReactElement;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const { state } = useAuthState();

  if (state.state === 'SIGNED_OUT') return <Index />;
  if (state.state === 'UNKNOWN') return <Loader />;
  return state.state === 'SIGNED_IN' ? children : <Navigate to={appRoutes.home} />;
};

export { RequireAuth };
