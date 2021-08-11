import React, { useRef } from 'react';
import { SearchBoxWrapper } from './styles';
import { FaSearch } from 'react-icons/fa';

interface SearchBoxProps {
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
  pagesRef?: React.MutableRefObject<{}>;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  setSearchValue,
  pagesRef,
}) => {
  const input = useRef<HTMLInputElement>();

  const newSearchValueHandler = () => {
    setSearchValue(input.current.value);
    pagesRef.current = {};
  };

  return (
    <SearchBoxWrapper>
      <input
        type='text'
        name='search'
        placeholder='Search for a image...'
        ref={input}
      />
      <FaSearch
        data-cy='search-button'
        onClick={newSearchValueHandler}
        className='icon'
      />
    </SearchBoxWrapper>
  );
};
