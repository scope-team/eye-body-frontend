import React from 'react';

interface Iprops {
  icon: string;
  size: string;
  width?: string;
  height?: string;
  style?: object;
  stroke?: string;
}

type ObjType = {
  [key: string]: any;
};

import CheckBlack from '@/assets/icons/gallery/check_black.svg';
import Popup from '@/assets/icons/title/popup.svg';

const icons: ObjType = {
  check_black: CheckBlack,
  popup: Popup,
};

const SVGIcon = ({ icon, size, width, height, style, stroke }: Iprops) => {
  const Icon = icons[icon];
  if (Icon) {
    return <Icon width={width || size} height={height || size} style={style} stroke={stroke} />;
  }

  return null;
};

export default SVGIcon;
