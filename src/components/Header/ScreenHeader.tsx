/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: ScreenHeader
 */

import React from 'react';
import { View, Image } from 'react-native';

type TProps = {};

const ScreenHeader = ({}: TProps) => {
  return (
    <View style={{ width: '100%', height: 100, backgroundColor: '#202020' }}>
      <Image
        source={require('assets/images/header/arrow_close.png')}
        style={{
          position: 'absolute',
          bottom: 11,
          right: 11,
          width: 46,
          height: 46,
          zIndex: 12,
        }}
      />
    </View>
  );
};

export default ScreenHeader;
