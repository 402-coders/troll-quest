import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from '~/components/contexts/UserContext';
import { appRoutes } from '~/components/router/appRoutes';
// import Page404 from '~/components/screens/404/404';

type RequireAuthProps = {
  children: ReactElement;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const { state } = useAuthState();

  if (state.state === 'SIGNED_OUT') return <Navigate to={appRoutes.signIn} />;
  if (state.state === 'UNKNOWN') return <div>Loading..</div>;
  return state.state === 'SIGNED_IN' ? children : <Navigate to={appRoutes.signIn} />;
};

export { RequireAuth };
