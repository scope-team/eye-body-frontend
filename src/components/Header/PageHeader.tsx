import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import tw from '@/styles/tailwind';
const arrowClose = require('assets/images/header/arrow_close.png');

type TProps = {
  navigation: any;
};

export default function PageHeader({ navigation }: TProps) {
  const handleCloseStack = () => {
    navigation.goBack();
  };

  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={tw`absolute top-12 right-6 w-12 h-12`}
        onPress={() => {
          handleCloseStack();
        }}>
        <Image source={arrowClose} style={tw`w-12 h-12 `} />
      </TouchableOpacity>
    );
  };

  return <View style={tw`w-full h-28 bg-gray_20`}>{renderHeader()}</View>;
}
