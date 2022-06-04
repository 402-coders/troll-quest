import { Link, Outlet } from 'react-router-dom';
import { appRoutes } from '../../../router/appRoutes';

function NavBar() {
  return (
    <>
      <nav className="navbar bg-base-300 justify-evenly gap-4">
        <Link to={appRoutes.home} className="btn btn-ghost normal-case text-xl">
          Start
        </Link>
        <Link to={appRoutes.dailyQuest} className="btn btn-ghost normal-case text-xl">
          Quiz
        </Link>
        <Link to={appRoutes.shop} className="btn btn-ghost normal-case text-xl">
          Sklep
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
