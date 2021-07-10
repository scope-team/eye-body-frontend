import React, { Dispatch, createContext, useContext } from 'react';

export type TCurrentStack =
  | 'CameraStack'
  | 'GalleryPage'
  | 'GalleryStack'
  | 'PopupStack'
  | 'SettingPage';

type TStackContext = {
  currentStack: TCurrentStack;
  setCurrentStack: Dispatch<React.SetStateAction<TCurrentStack>>;
  currentMode?: string;
  setCurrentMode?: Dispatch<React.SetStateAction<string>>;
};

export const stackContext = createContext<TStackContext | null>(null);

export default function useStackContext() {
  const result = useContext(stackContext);
  if (!result) {
    throw new Error();
  }
  return result;
}
