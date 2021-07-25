import React, { Dispatch, createContext, useContext } from 'react';

export type TGalleryStack = 'Select' | 'Compare' | 'Before & After' | 'Animation';

export type TPopupStack = 'EditPhoto' | 'SelectGuide';

export type TWriteStack = 'EditPhoto' | 'SelectGuidePhoto' | 'SavePhoto';

type TStackContext = {
  GalleryStackType: TGalleryStack;
  setGalleryStack: Dispatch<React.SetStateAction<TGalleryStack>>;
  PopupStackType: TPopupStack;
  setPopupStackType: Dispatch<React.SetStateAction<TPopupStack>>;
  WriteStackType: TWriteStack;
  setWriteStackType: Dispatch<React.SetStateAction<TWriteStack>>;
};

export const stackContext = createContext<TStackContext | null>(null);

export default function useStackContext() {
  let result = useContext(stackContext);
  if (!result) {
    throw new Error();
  }
  return result;
}
