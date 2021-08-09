import React from 'react';
import { useLocation } from 'react-router';
import { StyledHeader } from './styles';

export const Header: React.FC = () => {
  const pathName: string = useLocation().pathname;

  return (
    <StyledHeader>
      <span>
        {pathName === '/' ? 'Your Favorite Images' : 'Search For Images'}
      </span>
    </StyledHeader>
  );
};
