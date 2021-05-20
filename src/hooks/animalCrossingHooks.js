import { useEffect, useState } from 'react';
import { fetchAllCharacters } from '../services/apiUtils';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  return { loading, characters, page, setPage };
};
