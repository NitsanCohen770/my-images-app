import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSearch } from '../hooks/useSearch';
import { Button as BackButton, SearchBox, ImageList } from '../components';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner';

const SearchPage: React.FC = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState<string>('');
  const {
    loading,
    setCurrentPage,
    setSearchResults,
    searchResults,
    pagesNumber,
    pagesRef,
  } = useSearch(searchValue);

  const paginationHandler = (e, page) => {
    if (pagesRef.current[page]) return setSearchResults(pagesRef.current[page]);

    setCurrentPage(page);
  };

  let pageResults: React.ReactNode = <ImageList images={searchResults} />;
  if (loading)
    pageResults = (
      <Grid container justifyContent='center'>
        <Loader
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000}
        />
      </Grid>
    );

  return (
    <>
      <BackButton
        data-cy='back-button'
        isBackButton
        onClick={(): void => history.push('/')}
        icon='FaArrowLeft'>
        Back
      </BackButton>
      <SearchBox setSearchValue={setSearchValue} pagesRef={pagesRef} />
      <main>{pageResults}</main>
      <Grid style={{ marginTop: '20px' }} container justifyContent='center'>
        <Pagination
          count={pagesNumber}
          onChange={(event: object, page: number) =>
            paginationHandler(event, page)
          }
          siblingCount={0}
        />
      </Grid>
    </>
  );
};

export default SearchPage;
