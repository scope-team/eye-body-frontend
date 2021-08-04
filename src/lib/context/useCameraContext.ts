import { TGuideImage } from '@/../App';
import React, { Dispatch, createContext, useContext } from 'react';

type TCameraContext = {
  mirrorImage: boolean;
  setMirrorImage: React.Dispatch<React.SetStateAction<boolean>>;
  guideImage: TGuideImage;
  setGuideImage: React.Dispatch<React.SetStateAction<TGuideImage>>;
  quality: boolean;
  setQuality: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState = {
  mirrorImage: false,
  setMirrorImage: () => {},
  guideImage: { isGuideImage: false, guideImage: null },
  setGuideImage: () => {},
  quality: true,
  setQuality: () => {},
};

export const cameraContext = createContext<TCameraContext>(initialState);

export default function useCameraContext() {
  const result = useContext(cameraContext);
  if (!result) {
    throw new Error();
  }
  return result;
}
