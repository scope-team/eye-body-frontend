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

  const renderTitle = () => {
    return (
      <>
        <View style={tw`flex-row px-4`}>
          <Text style={tw`text-4xl font-extrabold text-white`}>{title}</Text>
        </View>

        {title === 'Gallery' ? (
          <TouchableOpacity onPress={handleChangeStack}>
            <SVGIcon icon="popup" size="46" />
          </TouchableOpacity>
        ) : (
          <SVGIcon icon={'check_black'} size="46" />
        )}
      </>
    );
  };

  return (
    <View style={tw`flex-row justify-between w-96 h-12 px-8 bg-gray_20`}>{renderTitle()}</View>
  );
}
