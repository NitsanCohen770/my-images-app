import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { myImageState } from '../../atoms/myImages';
import { Button } from '../UI/Button';
import { ImageWrapper } from './styles';
import AddImage from '../../assets/images/add.png';
import { useHistory, useLocation } from 'react-router';
import { ImageWrapperProps } from '../../shared/interfaces';

interface ImageViewerProps extends ImageWrapperProps {
  previewURL?: string | null;
  tags?: string;
  ownersName?: string;
  id?: string;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({
  previewURL,
  tags,
  id,
  ownersName,
  isGoToSearchLink,
}) => {
  const setMyImagesListState = useSetRecoilState(myImageState);
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
      setMyImagesListState(prevList => {
        const updatedImageList = [
          ...prevList,
          { previewURL, tags, ownersName, id },
        ];
        localStorage.setItem('myImagesList', JSON.stringify(updatedImageList));
        return updatedImageList;
      });
      setIsImageChosen(true);
    } else {
      setMyImagesListState(prevList => {
        const updatedImageList = prevList.filter(image => image.id !== id);
        localStorage.setItem('myImagesList', JSON.stringify(updatedImageList));
        return updatedImageList;
      });
    }
  };

  const buttonLabelHandler = () => {
    if (isHomePage) {
      return 'Remove';
    }
    if (isImageChosen) {
      return 'Added';
    }
    return 'Add';
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
          isImageChosen={isImageChosen}
          onClick={clickedImageHandler}
          icon={isHomePage ? 'FaMinus' : 'FaPlus'}>
          {buttonLabelHandler()}
        </Button>
      )}
      {isHomePage && <span>{ownersName}</span>}
    </ImageWrapper>
  );
};
