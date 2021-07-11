import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  navigation: any;
};

export default function PhotoList({ navigation }: TProps) {
  const { setCurrentStack } = useStackContext();

  const isCallStackNavigator = () => {
    setCurrentStack('Write');
    navigation.navigate('WriteStack');
  };

  return (
    <View style={{ flexDirection: 'row', height: '100%', backgroundColor: '#202020' }}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          margin: 10,
          backgroundColor: '#c1c1c1',
        }}
        onPress={isCallStackNavigator}></TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          margin: 10,
          backgroundColor: '#c1c1c1',
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          margin: 10,
          backgroundColor: '#c1c1c1',
        }}></TouchableOpacity>
    </View>
  );
}
