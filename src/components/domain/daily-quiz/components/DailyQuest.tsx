import { DailyQuestContextProvider, useDailyQuestContext } from '../contexts/DailyQuestContext';

export type DailyQuestProps = {};

import { useEffect, useState } from 'react';
import { getFakeNews, getRealNews } from '../api/news';
import { mockData } from '../api/mockData';
import { Loader } from '~/components/shared/components/Loader';
import { Game } from './Game';
import { appRoutesHeaders } from '~/components/router/appRoutes';
import { Head } from '~/components/shared/components/Head/Head';

export const DailyQuest = ({}: DailyQuestProps) => {
  const [data, setData] = useDailyQuestContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const realNews = getRealNews();
        const fakeNews = getFakeNews();
        const [real, fake] = await Promise.all([realNews, fakeNews]);
        setData({ real, fake });
        setIsError(false);
        setIsLoading(false);
      } catch (ex) {
        setData(mockData);
        setIsLoading(false);
        setIsError(true);
      }
    })();
  }, []);

  if (isLoading) return <Loader />;

  return <Game />;
};

export const DailyQuestPage = () => {
  return (
    <DailyQuestContextProvider>
      <Head title={appRoutesHeaders.dailyQuest} />
      <DailyQuest />
    </DailyQuestContextProvider>
  );
};
