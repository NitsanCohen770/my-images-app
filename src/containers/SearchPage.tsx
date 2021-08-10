import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from '../axios-orders/axios';
import { Button as BackButton, SearchBox, ImageList } from '../components';

const SearchPage: React.FC = () => {
  const history = useHistory();
  const [searchResults, setSearchResults] = useState<{}[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect((): void => {
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
        onClick={(): void => history.push('/')}
        icon='FaArrowLeft'>
        Back
      </BackButton>
      <SearchBox setSearchValue={setSearchValue} />
      <ImageList images={searchResults} />
    </>
  );
};

export default SearchPage;
