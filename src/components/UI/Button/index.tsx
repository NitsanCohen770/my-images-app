import React from 'react';
import { StyledButton } from './styles';
import * as FaIcon from 'react-icons/fa';

export interface ButtonProps {
  icon: 'FaPlus' | 'FaMinus' | 'FaArrowLeft';
  onClick?: React.MouseEventHandler;
  isBackButton?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  isBackButton,
  ...props
}) => {
  const Icon = FaIcon[icon];

  return (
    <StyledButton onClick={onClick} isBackButton={isBackButton} {...props}>
      <Icon />
      {children}
    </StyledButton>
  );
};
