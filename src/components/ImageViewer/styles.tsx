import styled from 'styled-components';
import { ImageWrapperProps } from '../../shared/interfaces';

export const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  width: 50%;
  display: flex;
  width: 9.375rem;
  height: 6.1875rem;
  justify-self: center;
  border: 0.125rem
    ${({ isGoToSearchLink }) => (isGoToSearchLink ? 'dashed' : 'solid')} black;
  border-radius: 0.125rem;
  &:hover img {
    opacity: 0.3;
  }
  &:hover div {
    opacity: 1;
  }
  &:hover span {
    opacity: 1;
  }

  > img {
    opacity: ${({ isImageChosen }) => (isImageChosen ? '0.1' : '1')};
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  > div,
  span {
    transition: 0.5s ease;

    opacity: ${({ isImageChosen }) => (isImageChosen ? '1' : '0')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  > span {
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
    top: 10%;
    left: 50%;
  }
`;
