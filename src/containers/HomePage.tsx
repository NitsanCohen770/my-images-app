import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { myImageState } from '../atoms/myImages';
import { ImageList } from '../components/';

const HomePage: React.FC = () => {
  const [myImages, setMyImages] = useRecoilState(myImageState);

  useEffect(() => {
    const cachedImageList = JSON.parse(localStorage.getItem('myImagesList'));
    if (cachedImageList) {
      setMyImages(cachedImageList);
    }
  }, [setMyImages]);

  return (
    <>
      <ImageList images={myImages} isMyImagesList />
    </>
  );
};

export default HomePage;
