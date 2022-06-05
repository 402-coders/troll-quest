import { Header } from '~/components/shared/components/Header';

export type PartyQuestSummaryProps = {};

export const PartyQuestSummary = ({}: PartyQuestSummaryProps) => {
  const joinGamePath = window.location.href.replace('party-summary', 'party');

  return (
    <div className="justify-content flex-col flex w-100 ">
      <Header>Dołącz do imprezy: {}</Header>
      <span className="text-2xl font-bold text-center w-full">
        Link do gry
        <a target="_blank" href={joinGamePath}>
          {joinGamePath}
        </a>
      </span>
    </div>
  );
};
