import React from 'react';
import { View } from 'react-native';
import Popup from '@/components/Popup';

type TProps = {
  route: any;
  navigation: any;
};

export default function PopupStack({ route, navigation }: TProps) {
  return (
    <View>
      <Popup route={route} navigation={navigation} />
    </View>
  );
}
