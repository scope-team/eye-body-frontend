import React, { useState } from 'react';
import { View, TextInput, ImageBackground } from 'react-native';
import { Image } from 'react-native-svg';
import tailwind from 'tailwind-rn';

type TProps = {
  navigation: any;
  picture: string;
};

export default function Writeindex({ navigation, picture }: TProps) {
  const [text, onChangeText] = useState('');
  const image = { uri: picture };

  console.log(image);
  return (
    <View style={tailwind('relative h-full w-full')}>
      {/* <ImageBackground source={image} resizeMode="cover" /> */}
      <View style={tailwind('absolute bottom-0 left-0 right-0 top-96 bg-white')}>
        <TextInput placeholder="메모를 입력하세요👀"></TextInput>
      </View>
    </View>
  );
}
