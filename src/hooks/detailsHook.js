import { useEffect, useState } from 'react';
import { fetchSingleCharacter } from '../services/apiUtils';

export const useDetails = (match) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchSingleCharacter(match.params.id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);

  return { loading, character };
};
