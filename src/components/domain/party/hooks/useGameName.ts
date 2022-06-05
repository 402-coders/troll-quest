import { useLocation, useParams } from 'react-router-dom';

export const useGameName = () => {
  const params = useParams();

  return params.gameName;
};
