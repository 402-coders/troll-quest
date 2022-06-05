import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from '~/components/contexts/UserContext';
import { useDefaultTheme } from '~/components/domain/shop/hooks/useDefaultTheme';
import { appRoutes } from '../../../router/appRoutes';
import { UserInfo } from './UserInfo';
import trollHead from '~/assets/troll/head.png';
import logo from '~/assets/Logo-horizontal.png';

function NavBarDesktop() {
  const { user } = useAuthState();
  useDefaultTheme();

  return (
    <>
      <nav className="navbar h-20 bg-primary justify-between px-6">
        <div className="gap-4">
          <img src={trollHead} alt="troll head" className="w-16" />
          <img src={logo} alt="troll head" className="w-24 mr-4" />
          <Link to={appRoutes.home} className="btn btn-ghost normal-case text-xl">
            Start
          </Link>
          <Link to={appRoutes.shop} className="btn btn-ghost normal-case text-xl">
            Sklep
          </Link>
          <Link to={appRoutes.leaderboard} className="btn btn-ghost normal-case text-xl">
            Leaderboard
          </Link>
        </div>
        <div className="flex">{user ? <UserInfo user={user} /> : null}</div>
      </nav>
      <Outlet />
    </>
  );
}

export { NavBarDesktop };
