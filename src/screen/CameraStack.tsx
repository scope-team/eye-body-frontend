import React from 'react';
import { View } from 'react-native';
import Camera from '@/components/Camera';

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
