import { lazy, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { appRoutes } from './appRoutes';
import NavBar from '../shared/components/NavBar/NavBar';
import SelectModePage from '../screens/SelectModePage';
import { Loader } from '../shared/components/Loader';
import { Leaderboard } from '../screens/Leaderboard';

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Shop = lazy(() => import('~/components/screens/Shop/Shop'));
const Page404Screen = lazy(() => import('~/components/screens/404/404'));
const DailyQuestScreen = lazy(() => import('~/components/screens/DailyQuestPage'));
const DailyQuestScreenSummary = lazy(() => import('~/components/screens/DailyQuestPageSummary'));
const PartyQuestScreen = lazy(() => import('~/components/screens/PartyQuestPage'));
const PartyQuestSummaryScreen = lazy(() => import('~/components/screens/PartyQuestPageSummary'));

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: appRoutes.home,
      element: <NavBar />,
      children: [{ element: <SelectModePage />, index: true }],
    },
    {
      path: appRoutes.signIn,
      element: <IndexScreen />,
    },
    {
      path: appRoutes.party,
      element: <NavBar />,
      children: [{ element: <PartyQuestScreen />, index: true }],
    },
    {
      path: appRoutes.partySummary,
      element: <NavBar />,
      children: [{ element: <PartyQuestSummaryScreen />, index: true }],
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
      path: appRoutes.leaderboard,
      element: <NavBar />,
      children: [{ element: <Leaderboard />, index: true }],
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
