import React, { useEffect } from 'react';
import tw from '@/styles/tailwind';
import { View, Text, TouchableOpacity } from 'react-native';
import SVGIcon from '@/lib/svg/SVGIcon';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  title: string;
  navigation: any;
};

export default function Titleindex({ title, navigation }: TProps) {
  const { setPopupStackType } = useStackContext();

  const handleChangeStack = () => {
    navigation.navigate('PopupStack');
    setPopupStackType('EditPhoto');
  };

  const renderIcon = () => {
    switch (title) {
      case 'Gallery':
        return (
          <TouchableOpacity onPress={handleChangeStack}>
            <SVGIcon icon="popup" size="46" />
          </TouchableOpacity>
        );
      case 'Setting':
        return;
      case 'EditPhoto':
        return;
      case 'Select':
        return;
      default:
        return <SVGIcon icon={'check_black'} size="46" />;
    }
  };

  return (
    <>
      <View style={tw`flex-row w-full h-16 px-10 bg-gray_20`}>
        <Text style={tw`text-4xl font-bold text-white`}>{title}</Text>
        <View style={tw`absolute right-10`}>{renderIcon()}</View>
      </View>
    </>
  );
}
