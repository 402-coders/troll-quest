import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignOutButton } from '~/components/domain/auth/components/SignOutButton';
import { useDefaultTheme } from '~/components/domain/shop/hooks/useDefaultTheme';
import { appRoutes } from '~/components/router/appRoutes';
import GoldGlass from '../GoldGlass';

const NavBarMobile = () => {
  const { user } = useAuthState();
  useDefaultTheme();

  return (
    <>
      <nav className="navbar justify-between bg-primary">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link to={appRoutes.home} className="btn btn-ghost normal-case text-xl">
              Start
            </Link>
            <Link to={appRoutes.shop} className="btn btn-ghost normal-case text-xl">
              Sklep
            </Link>
            <Link to={appRoutes.leaderboard} className="btn btn-ghost normal-case text-xl">
              Leaderboard
            </Link>
          </ul>
        </div>
        {user ? (
          <>
            <div>
              <GoldGlass />
              <h3 className="text-3xl font-bold ml-2">{user.points}</h3>

              <div className="w-10 h-10 rounded-full ring ring-accent mx-4">
                <img src={user.avatar} alt="user avatar" className="rounded-full" />
              </div>
              <h3 className="self-center text-2xl m-0">{user.displayName}</h3>
              <SignOutButton />
            </div>
          </>
        ) : null}
      </nav>
      <Outlet />
    </>
  );
};

export { NavBarMobile };
