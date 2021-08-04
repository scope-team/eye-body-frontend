import { theme } from '@/../tailwind.config';
import SVGIcon from '@/lib/svg/SVGIcon';
import React, { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'styles/tailwind';

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
      <TouchableOpacity style={tw`text-white`} onPress={() => handleChangeStack('GalleryPage')}>
        <SVGIcon icon="popup" size="46" fill={theme.colors.white} />
      </TouchableOpacity>
      <TouchableOpacity onPress={takePhoto}>
        <SVGIcon icon="buttonToTakePic" size="70" />
      </TouchableOpacity>
      <TouchableOpacity style={tw`text-white`} onPress={() => handleChangeStack('SettingPage')}>
        <SVGIcon icon="controller" size="46" />
      </TouchableOpacity>
    </View>
  );
}
