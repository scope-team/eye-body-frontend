import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Layout from '@/constants/Layout';
import SVGIcon from '@/lib/svg/SVGIcon';

type Tprop = {
  src: string;
  index: number;
  isCallStackNavigator: () => void;
  isEffect: boolean;
  isChecked: boolean;
  handleCheckPhoto: (index: number) => void;
};

export default function PhotoItem({
  src,
  index,
  isCallStackNavigator,
  handleCheckPhoto,
  isEffect,
  isChecked,
}: Tprop) {
  return (
    <View>
      <View
        style={{
          width: 100,
          height: 150,
          margin: 10,
          backgroundColor: '#c1c1c1',
        }}>
        {isEffect ? (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 5,
              right: 5,
            }}
            onPress={() => handleCheckPhoto(index)}>
            <SVGIcon icon={isChecked ? 'check_complete' : 'empty_white_circle'} size="24" />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity onPress={isCallStackNavigator}>
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
    </View>
  );
}
