import { createStateContext } from 'react-use';
import { mockData } from '../api/mockData';

export type PartyQuestContextValue = typeof mockData;

const [usePartyQuestContext, PartyQuestContextProvider] = createStateContext<PartyQuestContextValue>(mockData);

export { usePartyQuestContext, PartyQuestContextProvider };
