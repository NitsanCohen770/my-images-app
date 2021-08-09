import React, { useRef } from 'react';
import { SearchBoxWrapper } from './styles';
import { FaSearch } from 'react-icons/fa';

interface SearchBoxProps {
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ setSearchValue }) => {
  const input = useRef<HTMLInputElement>();
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
        onClick={() => setSearchValue(input.current.value)}
        className='icon'
      />
    </SearchBoxWrapper>
  );
};
