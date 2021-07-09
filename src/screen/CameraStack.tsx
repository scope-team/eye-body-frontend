import React from 'react';
import { View, Text  } from 'react-native';
import StackHeader from '@components/Header/StackHeader';

type TProps = {
  navigation: any;
};

const CameraStack = ({ navigation }: TProps) => {
  const goBack = navigation.goBack;

  const isCallStackNavigator = () => {
    navigation.navigate('Write');
  };

  return (
    <View>
      <StackHeader goBack={goBack} />
      <View style={{ flexDirection: 'row' }}>
      <Text style={{ fontSize: 30 }}>camera</Text>
      </View>
    </View>
  );
};

export default CameraStack;