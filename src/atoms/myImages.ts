import { atom } from 'recoil';

export interface myImage {
  id: string;
  tags: string;
  previewURL: string;
  ownersName: string;
  isGoToSearchLink?: boolean;
}

export const myImageState = atom({
  key: 'myImages',
  default: [] as myImage[],
});
