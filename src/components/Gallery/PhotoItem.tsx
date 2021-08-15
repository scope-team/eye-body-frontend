import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import SVGIcon from '@/lib/svg/SVGIcon';
import { TSelectedPhotos } from '@/components/Gallery/types';
import tw from 'styles/tailwind';

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
    <View style={tw`m-1`}>
      <View style={tw`w-28 h-48`}>
        {isEffect ? (
          <View style={tw`absolute top-1 right-1 z-10`}>
            <TouchableOpacity
              onPress={() => selectedPhotoHandler && selectedPhotoHandler({ filename, uri })}>
              <SVGIcon icon={isSelect ? 'check_complete' : 'empty_white_circle'} size="24" />
            </TouchableOpacity>
          </View>
        ) : null}
        <TouchableOpacity
          onPress={() => {
            if (!isEffect) {
              isCallStackNavigator();
            }
            return;
          }}>
          <ImageBackground source={{ uri }} style={tw`justify-between w-full h-full`} />
        </TouchableOpacity>
      </View>
    </View>
  );
});
