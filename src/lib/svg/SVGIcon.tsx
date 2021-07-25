import React from 'react';

interface Iprops {
  icon: string;
  size: string | number;
  width?: string | number;
  height?: string | number;
  style?: object;
  stroke?: string;
}

type ObjType = {
  [key: string]: any;
};

import CheckBlack from '@/assets/icons/gallery/check_black.svg';
import CheckNeon from '@/assets/icons/gallery/check_neon.svg';
import CheckComplete from '@/assets/icons/gallery/check_complete.svg';
import CanclePhoto from '@/assets/icons/header/cancle_photo.svg';
import EmptyWhiteCircle from '@/assets/icons/gallery/empty_white_circle.svg';
import Popup from '@/assets/icons/title/popup.svg';
import NeonCircle from '@/assets/icons/effect/neon_circle.svg';
import BlackCircle from '@/assets/icons/effect/black_circle.svg';
import PlayButton from '@/assets/icons/effect/play_btn.svg';
import StopButton from '@/assets/icons/effect/stop_btn.svg';

const icons: ObjType = {
  check_black: CheckBlack,
  check_neon: CheckNeon,
  check_complete: CheckComplete,
  popup: Popup,
  empty_white_circle: EmptyWhiteCircle,
  cancle_photo: CanclePhoto,
  neon_circle: NeonCircle,
  black_circle: BlackCircle,
  play_btn: PlayButton,
  stop_btn: StopButton,
};

const SVGIcon = ({ icon, size, width, height, style, stroke }: Iprops) => {
  const Icon = icons[icon];
  if (Icon) {
    return <Icon width={width || size} height={height || size} style={style} stroke={stroke} />;
  }
  return null;
};

export default SVGIcon;
