import { lazy, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { appRoutes } from './appRoutes';
import NavBar from '../shared/components/NavBar/NavBar';
import { Loader } from '../shared/components/Loader';

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Shop = lazy(() => import('~/components/screens/Shop/Shop'));
const Page404Screen = lazy(() => import('~/components/screens/404/404'));
const DailyQuestScreen = lazy(() => import('~/components/screens/DailyQuestPage'));
const DailyQuestScreenSummary = lazy(() => import('~/components/screens/DailyQuestPageSummary'));

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: appRoutes.signIn,
      element: <IndexScreen />,
    },
    {
      path: appRoutes.dailyQuest,
      element: <NavBar />,
      children: [{ element: <DailyQuestScreen />, index: true }],
    },
    {
      path: appRoutes.dailyQuestSummary,
      element: <NavBar />,
      children: [{ element: <DailyQuestScreenSummary />, index: true }],
    },
    {
      path: appRoutes.shop,
      element: <NavBar />,
      children: [{ element: <Shop />, index: true }],
    },
    { path: '*', element: <Page404Screen /> },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loader />}>{element}</Suspense>
    </div>
  );
};
export { Router };
