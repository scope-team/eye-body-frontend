import React from 'react';
import { View } from 'react-native';
import Popup from '@/components/Popup';
import StackHeader from '@/components/Header/StackHeader';

type TProps = {
  navigation: any;
};

export default function PopupStack({ navigation }: TProps) {
  return (
    <View>
      <StackHeader navigation={navigation} />
      <Popup navigation={navigation} />
    </View>
  );
}
