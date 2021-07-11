import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  route: any;
  navigation?: any;
  goBack?: any;
};

export default function HeaderIndex({ goBack, route, navigation }: TProps) {
  const { currentStack, setCurrentStack } = useStackContext();

  const handleChangeStack = () => {
    if (currentStack === 'Gallery') {
      setCurrentStack('Camera');
      goBack();
    } else if (currentStack === 'Popup') {
      setCurrentStack('Gallery');
      goBack();
    }
  };

  const renderHeader = () => {
    if (currentStack === 'Camera' || currentStack === 'Gallery' || currentStack === 'Setting') {
      return (
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 5,
            right: 11,
            width: 46,
            height: 46,
          }}
          onPress={() => {
            handleChangeStack();
          }}>
          <Image
            source={require('assets/images/header/arrow_close.png')}
            style={{
              width: 46,
              height: 46,
            }}
          />
        </TouchableOpacity>
      );
    } else if (currentStack === 'Popup') {
      return (
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 5,
            left: 11,
            width: 46,
            height: 46,
          }}
          onPress={handleChangeStack}>
          <Image
            source={require('assets/images/header/arrow_back.png')}
            style={{
              width: 46,
              height: 46,
            }}
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={{ width: '100%', height: 100, backgroundColor: '#202020' }}>{renderHeader()}</View>
  );
}
