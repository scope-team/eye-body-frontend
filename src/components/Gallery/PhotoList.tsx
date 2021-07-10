/**
 * Author: Ryan
 * Date: 2021-07-11
 * title: PhotoList
 */

import React from 'react';
import { View, TouchableOpacity } from 'react-native';

type TProps = {
  navigation: any;
};

export default function PhotoList({ navigation }: TProps) {
  const isCallStackNavigator = () => {
    navigation.navigate('WriteStack');
  };

  return (
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
  );
}
