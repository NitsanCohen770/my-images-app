import React from 'react';
import { useRecoilValue } from 'recoil';
import { myImageState } from '../atoms/myImages';
import { ImageList } from '../components/';

const HomePage: React.FC = () => {
  const myImages = useRecoilValue(myImageState);
  return (
    <>
      <ImageList images={myImages} isMyImagesList />
    </>
  );
};

export default HomePage;
