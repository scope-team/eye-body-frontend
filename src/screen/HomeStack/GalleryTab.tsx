/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: Gallery
 */

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import ScreenHeader from '@components/Header/ScreenHeader';

type TProps = {
  navigation: any;
};

const Gallery = ({ navigation }: TProps) => {
  const isCallStackNavigator = () => {
    navigation.navigate('WriteStack');
  };

  return (
    <View>
      <ScreenHeader />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            margin: 10,
            backgroundColor: '#c1c1c1',
          }}
          onPress={isCallStackNavigator}></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            margin: 10,
            backgroundColor: '#c1c1c1',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            margin: 10,
            backgroundColor: '#c1c1c1',
          }}></TouchableOpacity>
      </View>
    </View>
  );
};

export default Gallery;
