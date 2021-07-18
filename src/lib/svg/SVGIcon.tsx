import React from 'react';

interface Iprops {
  icon: string;
  size: number;
  width?: number;
  height?: number;
  style?: object;
  stroke?: number;
}

type ObjType = {
  [key: string]: any;
};

import CheckBlack from '@/assets/icons/gallery/check_black.svg';

const icons: ObjType = {
  CheckBlack,
};

const SVGIcon = ({ icon, size, width, height, style, stroke }: Iprops) => {
  const Icon = icons[icon];
  if (Icon) {
    return <Icon width={width || size} height={height || size} style={style} stroke={stroke} />;
  }
  return null;
};

export default SVGIcon;
