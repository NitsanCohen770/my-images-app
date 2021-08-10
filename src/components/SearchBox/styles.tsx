import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 2.24875rem;
  min-width: 21.4375rem;
  max-width: 90vw;
  margin-bottom: 3rem;
  margin-top: 3.5rem;
  .icon {
    padding: 0.625rem;
    cursor: pointer;
    background: #087df3;
    color: white;
    min-width: 3.125rem;
    text-align: center;
    &:hover {
      opacity: 0.5;
    }
  }
  > input {
    width: 100%;
    padding: 0.625rem;
    outline: none;
    &:focus {
      border: 0.125rem solid #087df3;
    }
  }
`;
