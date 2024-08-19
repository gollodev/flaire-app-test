import { useState, useEffect } from 'react';
import { City } from '../types';
import { fetchCities } from '../services';

export default function useCities() {
  const [allCities, setAllCities] = useState<City[]>([]);
  const [cities, setCities] = useState<City[] | null>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const pageSize = 10;

  const loadMoreCities = () => {
    const nextPageCities = allCities.slice(
      page * pageSize,
      (page + 1) * pageSize
    );
    setCities((prevCities) => [...(prevCities as City[]), ...nextPageCities]);
    setPage((prevPage) => prevPage + 1);
    if (nextPageCities.length < pageSize) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const citiesData = await fetchCities();
        setAllCities(citiesData as City[]);
        setCities((citiesData as City[]).slice(0, pageSize));
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error as Error);
        setCities(null);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { cities, error, loading, loadMoreCities, hasMore };
}
