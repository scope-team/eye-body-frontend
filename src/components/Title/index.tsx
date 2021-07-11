import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  navigation: any;
};

export default function Titleindex({ navigation }: TProps) {
  const { currentStack, setCurrentStack } = useStackContext();

  const handleChangeStack = () => {
    setCurrentStack('Popup');
    navigation.navigate('PopupStack');
  };

  const renderTitle = () => {
    if (
      currentStack === 'Camera' ||
      currentStack === 'Setting' ||
      currentStack === 'Select' ||
      currentStack === 'Compare' ||
      currentStack === 'Befor & After' ||
      currentStack === 'Animation'
    ) {
      return (
        <Text style={{ color: 'white', fontSize: 34, fontWeight: '800' }}>{currentStack}</Text>
      );
    } else if (currentStack === 'Gallery') {
      return (
        <>
          <Text style={{ color: 'white', fontSize: 34, fontWeight: '800' }}>{currentStack}</Text>
          <TouchableOpacity onPress={handleChangeStack}>
            <Image
              source={require('assets/images/title/popup.png')}
              style={{
                width: 46,
                height: 46,
              }}
            />
          </TouchableOpacity>
        </>
      );
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 60,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#202020',
      }}>
      {renderTitle()}
    </View>
  );
}
