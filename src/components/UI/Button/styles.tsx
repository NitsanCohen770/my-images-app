import styled from 'styled-components';
import { StyledButtonProps } from '../../../shared/interfaces';

export const StyledButton = styled.div<StyledButtonProps>`
  height: 1.75rem;
  width: 6rem;
  display: flex;
  background: rebeccapurple;
  justify-content: center;
  align-items: center;
  margin-left: ${({ isBackButton }) => isBackButton && '4.6vw'};
  cursor: pointer;
  font-size: 0.875rem;
  color: white;
  box-shadow: 0px 0px 0.25rem 0.0625rem rgba(0, 0, 0, 0.104931);
  border-radius: 0.125rem;
  font-weight: 300;
  font-size: 1rem;
  pointer-events: ${({ isImageChosen }) => (isImageChosen ? 'none' : 'auto')};
`;
