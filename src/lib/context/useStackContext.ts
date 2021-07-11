import React, { Dispatch, createContext, useContext } from 'react';

export type TCurrentStack =
  | 'Camera'
  | 'Gallery'
  | 'Select'
  | 'Write'
  | 'Compare'
  | 'Befor & After'
  | 'Animation'
  | 'Popup'
  | 'Setting'
  | 'FAQ';

type TStackContext = {
  currentStack: TCurrentStack;
  setCurrentStack: Dispatch<React.SetStateAction<TCurrentStack>>;
};

export const stackContext = createContext<TStackContext | null>(null);

export default function useStackContext() {
  const result = useContext(stackContext);
  if (!result) {
    throw new Error();
  }
  return result;
}
