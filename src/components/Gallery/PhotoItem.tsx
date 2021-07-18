import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Layout from '@/constants/Layout';
import SVGIcon from '@/lib/svg/SVGIcon';

type Tprop = {
  src: string;
  isCallStackNavigator: () => void;
  IsEffect: boolean;
};

export default function PhotoItem({ src, isCallStackNavigator, IsEffect }: Tprop) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          margin: 10,
          backgroundColor: '#c1c1c1',
        }}
        onPress={isCallStackNavigator}>
        <SVGIcon icon={'CheckBlack'} size={24} />
        <ImageBackground
          source={{ uri: src }}
          style={{
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
