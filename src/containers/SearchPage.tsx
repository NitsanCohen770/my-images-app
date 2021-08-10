import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSearch } from '../hooks/useSearch';
import { Button as BackButton, SearchBox, ImageList } from '../components';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';

const SearchPage: React.FC = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState<string>('');
  const {
    loading,
    setSearchResults,
    searchResults,
    pagesNumber,
    pagesRef,
  } = useSearch(searchValue);
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
      <Grid style={{ marginTop: '20px' }} container justify='center'>
        <Pagination
          count={pagesNumber}
          onChange={(event: object, page: number) =>
            setSearchResults(pagesRef.current[page])
          }
          siblingCount={0}
        />
      </Grid>
    </>
  );
};

export default SearchPage;
