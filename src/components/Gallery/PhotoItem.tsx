import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import SVGIcon from '@/lib/svg/SVGIcon';
import { TSelectedPhotos } from '@/components/Gallery/types';

type Tprop = {
  uri: string;
  filename: string;
  isCallStackNavigator: () => void;
  isEffect: boolean;
  isSelect?: boolean;
  selectedPhotoHandler?: ({ filename, uri }: TSelectedPhotos) => void;
};

export default React.memo(function PhotoItem({
  uri,
  filename,
  isCallStackNavigator,
  selectedPhotoHandler,
  isEffect,
  isSelect,
}: Tprop) {
  return (
    <View style={{ margin: 5 }}>
      <View
        style={{
          width: 100,
          height: 150,
          backgroundColor: '#c1c1c1',
        }}>
        {isEffect ? (
          <View
            style={{
              position: 'absolute',
              top: 5,
              right: 5,
              zIndex: 10,
            }}>
            <TouchableOpacity
              onPress={() => selectedPhotoHandler && selectedPhotoHandler({ filename, uri })}>
              <SVGIcon icon={isSelect ? 'check_complete' : 'empty_white_circle'} size="24" />
            </TouchableOpacity>
          </View>
        ) : null}
        <TouchableOpacity onPress={isCallStackNavigator}>
          <ImageBackground
            source={{ uri }}
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
});
