import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from '~/components/contexts/UserContext';
import { RequireAuth } from '~/components/domain/auth/RequireAuth';
import { useDefaultTheme } from '~/components/domain/shop/hooks/useDefaultTheme';
import { appRoutes } from '../../../router/appRoutes';
import UserInfo from './UserInfo';

function NavBar() {
  const { user } = useAuthState();
  useDefaultTheme();

  return (
    <RequireAuth>
      <>
        <nav className="navbar h-20 bg-primary justify-between px-6 mb-8">
          <div className="gap-4">
            <Link to={appRoutes.home} className="btn btn-ghost normal-case text-xl">
              Start
            </Link>
            <Link to={appRoutes.shop} className="btn btn-ghost normal-case text-xl">
              Sklep
            </Link>
          </div>
          <div className="flex">{user ? <UserInfo user={user} /> : null}</div>
        </nav>
        <Outlet />
      </>
    </RequireAuth>
  );
}

export default NavBar;
