import React from 'react';

const icons = {};

const SVGIcon = ({ icon, size, width, height, style, stroke }) => {
  const Icon = icons[icon];
  if (Icon) {
    return <Icon width={width || size} height={height || size} style={style} stroke={stroke} />;
  }
  return null;
};

export default SVGIcon;
