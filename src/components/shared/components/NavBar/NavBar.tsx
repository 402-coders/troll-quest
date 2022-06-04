import { Link, Outlet } from 'react-router-dom';
import { SignOutButton } from '~/components/domain/auth/components/SignOutButton';
import { RequireAuth } from '~/components/domain/auth/RequireAuth';
import { appRoutes } from '../../../router/appRoutes';

function NavBar() {
  return (
    <RequireAuth>
      <>
        <nav className="navbar bg-base-300 justify-evenly gap-4">
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
