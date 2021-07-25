import React from 'react';
import { View, Text } from 'react-native';
import Camera from '@/components/Camera';
import StackHeader from '@components/Header/StackHeader';

type TProps = {
  navigation: any;
};

export default function CameraStack({ navigation }: TProps) {
  return (
    <View>
      <Camera navigation={navigation} />
    </View>
  );
}
