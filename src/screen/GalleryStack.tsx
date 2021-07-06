/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: Gallery
 */

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import StackHeader from '@components/Header/StackHeader';

type TProps = {
  navigation: any;
};

const GalleryStack = ({ navigation }: TProps) => {
  const goBack = navigation.goBack;

  const isCallStackNavigator = () => {
    navigation.navigate('Write');
  };

  return (
    <View>
      <StackHeader goBack={goBack} />
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

export default GalleryStack;
