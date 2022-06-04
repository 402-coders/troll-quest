import { PartyQuestContextProvider, usePartyQuestContext } from '../contexts/DailyQuestContext';

export type PartyQuestProps = {};

import { useEffect, useState } from 'react';
import { getFakeNews, getRealNews } from '../api/news';
import { mockData } from '../api/mockData';
import { Loader } from '~/components/shared/components/Loader';
import { Game } from './Game';

export const PartyQuest = ({}: PartyQuestProps) => {
  const [data, setData] = usePartyQuestContext();
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

export const PartyQuestPage = () => {
  return (
    <PartyQuestContextProvider>
      <PartyQuest />
    </PartyQuestContextProvider>
  );
};
