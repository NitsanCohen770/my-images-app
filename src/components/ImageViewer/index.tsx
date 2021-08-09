import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { myImageState } from '../../atoms/myImages';
import { Button } from '../UI/Button';
import { ImageWrapper } from './styles';
import AddImage from './add.png';
import { useHistory, useLocation } from 'react-router';

interface ImageViewerProps {
  previewURL?: string | null;
  tags?: string;
  ownersName?: string;
  id?: string;
  isGoToSearchLink?: boolean;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({
  previewURL,
  tags,
  id,
  ownersName,
  isGoToSearchLink,
}) => {
  const [images, setMyImagesListState] = useRecoilState(myImageState);
  const [isImageChosen, setIsImageChosen] = useState<boolean>(false);
  const history = useHistory();
  const path: string = useLocation().pathname;
  const isHomePage: boolean = path === '/';

  const goToSearchPageHandler = (): void => {
    if (!isGoToSearchLink) {
      return;
    }
    history.push('/search');
  };

  const clickedImageHandler = (): void => {
    if (!isHomePage) {
      setMyImagesListState(prevList => [
        ...prevList,
        { previewURL, tags, ownersName, id },
      ]);
      setIsImageChosen(true);
    } else {
      setMyImagesListState(prevList => {
        const updatedImageList = prevList.filter(image => image.id !== id);
        return updatedImageList;
      });
    }
  };

  return (
    <ImageWrapper
      isImageChosen={isImageChosen}
      isGoToSearchLink={isGoToSearchLink}>
      <img
        src={previewURL || AddImage}
        alt={tags}
        onClick={goToSearchPageHandler}
      />
      {!isGoToSearchLink && (
        <Button
          onClick={clickedImageHandler}
          icon={isHomePage ? 'FaMinus' : 'FaPlus'}>
          {isHomePage ? 'Remove' : 'Add'}
        </Button>
      )}
      {isHomePage && <span>{ownersName}</span>}
    </ImageWrapper>
  );
};
