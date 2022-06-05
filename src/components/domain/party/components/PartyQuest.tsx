import { PartyQuestContextProvider, usePartyQuestContext } from '../contexts/PartyQuestContext';

import { Loader } from '~/components/shared/components/Loader';
import { Game } from './Game';
import { useGame } from '../hooks/useGame';
import { Head } from '~/components/shared/components/Head/Head';
import { appRoutesHeaders } from '~/components/router/appRoutes';

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
      <Head title={appRoutesHeaders.party} />
      <PartyQuest />
    </PartyQuestContextProvider>
  );
};
