import React, { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'styles/tailwind';

const buttonToTakePictures = require('assets/icons/camera/buttonToTakePictures.svg');

type TProps = {
  navigation: any;
  takePhoto: () => Promise<void>;
};

type TRootStack = 'GalleryPage' | 'SettingPage';

export default function BottomTab({ navigation, takePhoto }: TProps) {
  const handleChangeStack = useCallback((stack: TRootStack) => {
    if (stack === 'GalleryPage') {
      navigation.navigate('GalleryPage');
    } else if (stack === 'SettingPage') {
      navigation.navigate('SettingPage');
    }
  }, []);

  return (
    <View
      style={tw`absolute bottom-0 flex-row justify-between items-center w-full h-1/6 p-7 bg-black`}>
      <Text style={tw`text-white`} onPress={() => handleChangeStack('GalleryPage')}>
        앨범
      </Text>
      <TouchableOpacity onPress={takePhoto}>
        <Image source={buttonToTakePictures} style={tw`w-9 h-1/3 bg-white`} />
      </TouchableOpacity>
      <Text style={tw`text-white`} onPress={() => handleChangeStack('SettingPage')}>
        세팅
      </Text>
    </View>
  );
}
