import styled from 'styled-components';

export const ImageWrapper = styled.div<{
  isImageChosen: boolean;
  isGoToSearchLink: boolean;
}>`
  position: relative;
  width: 50%;
  display: flex;
  width: 9.375rem;
  height: 6.1875rem;
  justify-self: center;
  border: 0.125rem
    ${({ isGoToSearchLink }) => (isGoToSearchLink ? 'dashed' : 'solid')} black;
  opacity: ${({ isImageChosen }) => isImageChosen && '0.1'};
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
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  > div,
  span {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  > span {
    top: 10%;
    left: 50%;
  }
`;
