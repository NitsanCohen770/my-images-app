import { useState, useEffect, useRef } from 'react';
import axios from '../axios-orders/axios';

export const useSearch = (query: string, pageNumber?: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pagesNumber, setPagesNumber] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchResults, setSearchResults] = useState<{}[]>([]);
  const pagesRef = useRef<{}>({});

  useEffect((): void => {
    if (!query || query.trim() === '') return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios('', {
          params: { q: query, page: pageNumber },
        });
        const {
          data: { totalHits: totalSearchResults },
        } = response;

        const {
          data: { hits: searchResults },
        } = response;
        pagesRef.current[currentPage] = searchResults;
        const totalPages = Math.round(totalSearchResults / 30);
        setSearchResults(searchResults);
        setPagesNumber(totalPages);
        setLoading(false);
      } catch (error) {
        setSearchResults(error);
      }
    };

    fetchData();
  }, [query, currentPage, pageNumber]);

  return {
    loading,
    setCurrentPage,
    setSearchResults,
    searchResults,
    pagesNumber,
    pagesRef,
  };
};
