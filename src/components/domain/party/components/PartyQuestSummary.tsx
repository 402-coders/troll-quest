import { Header } from '~/components/shared/components/Header';
import { Leaderboard } from './Leaderboard';
import { QRCodeSVG } from 'qrcode.react';
import { appRoutesHeaders } from '~/components/router/appRoutes';
import { Head } from '~/components/shared/components/Head/Head';

export type PartyQuestSummaryProps = {};

export const PartyQuestSummary = ({}: PartyQuestSummaryProps) => {
  const joinGamePath = window.location.href.replace('party-summary', 'party');

  return (
    <div className="justify-content flex-col flex w-100 ">
      <Head title={appRoutesHeaders.partySummary} />
      <Header>Dołącz do imprezy: </Header>
      <span className="text-2xl font-bold text-center w-full">
        <a target="_blank" href={joinGamePath} rel="noreferrer">
          {joinGamePath}
        </a>
      </span>
      <span className="flex justify-center mt-8">
        <QRCodeSVG value={joinGamePath} />
      </span>
      <Leaderboard />
    </div>
  );
};
