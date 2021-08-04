import React from 'react';

interface Iprops {
  icon: string;
  size: string | number;
  width?: string | number;
  height?: string | number;
  style?: object;
  stroke?: string;
  fill?: string;
}

type ObjType = {
  [key: string]: any;
};

import CheckBlack from '@/assets/icons/gallery/check_black.svg';
import CheckNeon from '@/assets/icons/gallery/check_neon.svg';
import CheckComplete from '@/assets/icons/gallery/check_complete.svg';
import CanclePhoto from '@/assets/icons/header/cancle_photo.svg';
import EmptyWhiteCircle from '@/assets/icons/gallery/empty_white_circle.svg';
import NeonCircle from '@/assets/icons/effect/neon_circle.svg';
import BlackCircle from '@/assets/icons/effect/black_circle.svg';
import PlayButton from '@/assets/icons/effect/play_btn.svg';
import StopButton from '@/assets/icons/effect/stop_btn.svg';
import ButtonToTakePic from '@/assets/icons/camera/buttonToTakePictures.svg';
import Controller from '@/assets/icons/camera/controller.svg';
import Switch from '@/assets/icons/global/switch.svg';
import { theme } from '@/../tailwind.config';
import Svg, { Path } from 'react-native-svg';

const icons: ObjType = {
  check_black: CheckBlack,
  check_neon: CheckNeon,
  check_complete: CheckComplete,
  popup: ({ fill, size }: Iprops) => (
    <Svg width={size ? size : '46'} height={size ? size : '46'} viewBox="0 0 190 190" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.1964 110.309V51.2208H111.285V68.7612H74.4739C70.7247 68.7612 67.6854 71.8005 67.6854 75.5496V110.309H52.1964ZM67.6854 121.496H47.7982C44.0491 121.496 41.0098 118.456 41.0098 114.707V46.8226C41.0098 43.0735 44.0491 40.0342 47.7982 40.0342H115.683C119.432 40.0342 122.471 43.0735 122.471 46.8226V68.7612H142.358C146.108 68.7612 149.147 71.8005 149.147 75.5497V143.434C149.147 147.183 146.108 150.223 142.358 150.223H74.4739C70.7247 150.223 67.6854 147.183 67.6854 143.434V121.496ZM122.471 79.9478H137.96V139.036H78.872V121.496H115.683C119.432 121.496 122.471 118.456 122.471 114.707V79.9478ZM111.285 79.9478V110.309H78.872V79.9478H111.285Z"
        fill={fill ? fill : theme.colors.themeColor}
      />
    </Svg>
  ),
  empty_white_circle: EmptyWhiteCircle,
  cancle_photo: CanclePhoto,
  neon_circle: NeonCircle,
  black_circle: BlackCircle,
  play_btn: PlayButton,
  stop_btn: StopButton,
  buttonToTakePic: ButtonToTakePic,
  controller: Controller,
  switch: Switch,
};

const SVGIcon = ({ icon, size, width, height, style, stroke, fill }: Iprops) => {
  const Icon = icons[icon];
  if (Icon) {
    return (
      <Icon
        width={width ?? size}
        height={height ?? size}
        style={style}
        stroke={stroke}
        fill={fill}
      />
    );
  }
  return null;
};

export default SVGIcon;
