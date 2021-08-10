import React from 'react';
import { StyledButton } from './styles';
import * as FaIcon from 'react-icons/fa';

export interface ButtonProps {
  icon: 'FaPlus' | 'FaMinus' | 'FaArrowLeft';
  onClick?: React.MouseEventHandler;
  isBackButton?: boolean;
  isImageChosen?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  isBackButton,
  isImageChosen,
  ...props
}) => {
  let Icon = FaIcon[icon];
  if (isImageChosen) {
    Icon = FaIcon.FaCheck;
  }

  return (
    <StyledButton
      onClick={onClick}
      isBackButton={isBackButton}
      isImageChosen={isImageChosen}
      {...props}>
      <Icon />
      {children}
    </StyledButton>
  );
};
