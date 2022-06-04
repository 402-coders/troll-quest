import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignOutButton } from '~/components/domain/auth/components/SignOutButton';
import { RequireAuth } from '~/components/domain/auth/RequireAuth';
import { appRoutes } from '../../../router/appRoutes';
import UserInfo from './UserInfo';

function NavBar() {
  const { user } = useAuthState();
  console.log('🚀 ~ file: NavBar.tsx ~ line 10 ~ NavBar ~ user', user);

  return (
    <RequireAuth>
      <>
        <nav className="navbar bg-secondary justify-between px-3 ">
          {user ? <UserInfo user={user} /> : null}
          <Link to={appRoutes.home} className="btn btn-ghost normal-case text-xl">
            Start
          </Link>
          <Link to={appRoutes.shop} className="btn btn-ghost normal-case text-xl">
            Sklep
          </Link>
          <Link to={appRoutes.dailyQuest} className="btn btn-ghost normal-case text-xl">
            Quiz
          </Link>
          <SignOutButton />
        </nav>
        <Outlet />
      </>
    </RequireAuth>
  );
}

export default NavBar;
