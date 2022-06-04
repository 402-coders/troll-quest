import { createStateContext } from 'react-use';
import { mockData } from '../api/mockData';

export type DailyQuestContextValue = typeof mockData;

const [useDailyQuestContext, DailyQuestContextProvider] = createStateContext<DailyQuestContextValue>(mockData);

export { useDailyQuestContext, DailyQuestContextProvider };
