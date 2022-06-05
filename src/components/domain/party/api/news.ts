import axios from 'axios';
import { random } from 'lodash-es';

const baseUrl = 'https://api.thenewsapi.com/v1/news/';
const api_token = import.meta.env.VITE_NEWS_API_KEY;
const language = 'pl';
const categories = 'general';

export const getRealNews = async () => {
  const page = random(10, false);
  const {
    data: { data },
  } = await axios.get(baseUrl + 'top', {
    params: {
      api_token,
      language,
      categories,
      page,
    },
  });

  return data;
};

export const getFakeNews = async () => {
  const page = random(10, false);

  const {
    data: { data },
  } = await axios.get(baseUrl + `all`, {
    params: {
      api_token,
      language,
      domains: 'aszdziennik.pl',
      page,
    },
  });

  return data;
};
