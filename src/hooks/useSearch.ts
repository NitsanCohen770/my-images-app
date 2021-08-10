import { useState, useEffect, useRef } from 'react';
import axios from '../axios-orders/axios';

export const useSearch = query => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pagesNumber, setPagesNumber] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<{}[]>([]);
  const pagesRef = useRef<{}>({});

  useEffect((): void => {
    if (!query || query.trim() === '') return;

    const fetchData = async () => {
      pagesRef.current = {};
      setLoading(true);
      const response = await axios('', { params: { q: query, page: 1 } });
      const {
        data: { hits: searchResults },
      } = response;
      setSearchResults(searchResults);
      setLoading(false);
    };
    const fetchPages = async () => {
      let isMorePages: boolean = true;
      for (let i: number = 1; isMorePages; i++) {
        const response = await axios('', {
          params: { q: query, page: i },
        });
        const {
          data: { hits: searchResults },
        } = response;

        if (searchResults.length === 0) {
          isMorePages = false;
        } else {
          pagesRef.current[i] = searchResults;
        }
        setPagesNumber(Object.keys(pagesRef.current).length);
      }
    };

    fetchData();
    fetchPages();
    console.log(pagesRef);
  }, [query]);

  return { loading, setSearchResults, searchResults, pagesNumber, pagesRef };
};
