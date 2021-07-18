import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';

type Tprop = {
  src: string;
  isCallStackNavigator: () => void;
};

export default function PhotoItem({ src, isCallStackNavigator }: Tprop) {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          margin: 10,
          backgroundColor: '#c1c1c1',
        }}
        onPress={isCallStackNavigator}></TouchableOpacity>
      <Text>{src}</Text>
    </View>
  );
}
