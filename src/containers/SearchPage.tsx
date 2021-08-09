import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from '../axios-orders/axios';
import { Button as BackButton, SearchBox } from '../components';
import ImageList from '../components/ImagesList';
interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = () => {
  const history = useHistory();
  const [searchResults, setSearchResults] = useState<{}[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    axios('', { params: { q: searchValue } }).then(res =>
      setSearchResults(res.data.hits)
    );
  }, [setSearchResults, searchValue]);

  return (
    <>
      <BackButton
        data-cy='back-button'
        isBackButton
        onClick={() => history.push('/')}
        icon='FaArrowLeft'>
        Back
      </BackButton>
      <SearchBox setSearchValue={setSearchValue} />
      <ImageList images={searchResults} />
    </>
  );
};

export default SearchPage;
