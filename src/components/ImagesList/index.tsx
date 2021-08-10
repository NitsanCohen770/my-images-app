import { ImageViewer } from '../ImageViewer';
import { ImageListWrapper } from './styles';

interface ImageListProps {
  images?: {}[];
  isMyImagesList?: boolean;
}

export const ImageList: React.FC<ImageListProps> = ({
  images,
  isMyImagesList,
}) => {
  return (
    <ImageListWrapper>
      {images.map((image: { [any: string]: any }) => (
        <ImageViewer
          key={image.id}
          id={image.id}
          tags={image.tags}
          previewURL={image.previewURL}
          ownersName={image.user || image.ownersName}
          isGoToSearchLink={image.isGoToSearchLink}
        />
      ))}
      {isMyImagesList && (
        <ImageViewer ownersName='Search a new image' isGoToSearchLink />
      )}
    </ImageListWrapper>
  );
};
