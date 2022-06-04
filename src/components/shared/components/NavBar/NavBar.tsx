import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignOutButton } from '~/components/domain/auth/components/SignOutButton';
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
        <nav className="navbar h-20 bg-secondary justify-between px-3 mb-8">
          {user ? <UserInfo user={user} /> : null}
          <Link to={appRoutes.home} className="btn btn-ghost normal-case text-xl">
            Start
          </Link>
          <Link to={appRoutes.shop} className="btn btn-ghost normal-case text-xl">
            Sklep
          </Link>
          <SignOutButton />
        </nav>
        <Outlet />
      </>
    </RequireAuth>
  );
}

export default NavBar;
