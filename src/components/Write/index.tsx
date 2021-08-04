import React, { useState } from 'react';
import { View, TextInput, ImageBackground } from 'react-native';
import tw from 'styles/tailwind';

type TProps = {
  navigation: any;
  picture: { uri: string; height: number; width: number; base64: string };
};

export default function Writeindex({ navigation, picture }: TProps) {
  const [text, onChangeText] = useState('');

  return (
    <View style={tw`relative h-full w-full`}>
      <ImageBackground style={tw`w-full h-full`} source={{ uri: picture.uri }} resizeMode="cover" />
      <View style={tw`absolute bottom-0 left-0 right-0 top-96`}>
        <TextInput
          autoFocus
          onChangeText={onChangeText}
          style={tw`w-full h-full leading-10 bg-gray_20 px-10 py-4 text-white`}
          multiline
          placeholderTextColor="white"
          placeholder="메모를 입력하세요👀"></TextInput>
      </View>
    </View>
  );
}
