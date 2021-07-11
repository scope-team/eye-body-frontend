import React from 'react';
import { View } from 'react-native';
import BottomTab from '@components/Camera/BottomTab';

type TProps = {
  navigation: any;
};

export default function CameraIndex({ navigation }: TProps) {
  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#303030',
      }}>
      <BottomTab navigation={navigation} />
    </View>
  );
}
