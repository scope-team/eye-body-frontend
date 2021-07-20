import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Layout from '@/constants/Layout';
import SVGIcon from '@/lib/svg/SVGIcon';

type Tprop = {
  src: string;
  id: number;
  isCallStackNavigator: () => void;
  isEffect: boolean;
  isSelect: boolean;
  selectedPhotoHandler: (id: number) => void;
};

export default React.memo(function PhotoItem({
  src,
  id,
  isCallStackNavigator,
  selectedPhotoHandler,
  isEffect,
  isSelect,
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
          <View
            style={{
              position: 'absolute',
              top: 5,
              right: 5,
            }}>
            <TouchableOpacity onPress={() => selectedPhotoHandler(id)}>
              <SVGIcon icon={isSelect ? 'check_complete' : 'empty_white_circle'} size="24" />
            </TouchableOpacity>
          </View>
        ) : null}
        {/* <TouchableOpacity onPress={isCallStackNavigator}>
          <ImageBackground
            source={{ uri: src }}
            style={{
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
            }}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
});
