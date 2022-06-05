import { PartyQuestContextProvider, usePartyQuestContext } from '../contexts/PartyQuestContext';

import { useEffect, useState } from 'react';
import { getFakeNews, getRealNews } from '../api/news';
import { mockData } from '../api/mockData';
import { Loader } from '~/components/shared/components/Loader';
import { Game } from './Game';
import { useGame } from '../hooks/useGame';

export type PartyQuestProps = {};

export const PartyQuest = ({}: PartyQuestProps) => {
  const { game, isLoading } = useGame();

  if (isLoading) return <Loader />;
  if (!game?.questions) return <Loader />;

  return <Game questions={game.questions} />;
};

export const PartyQuestPage = () => {
  return (
    <PartyQuestContextProvider>
      <PartyQuest />
    </PartyQuestContextProvider>
  );
};
