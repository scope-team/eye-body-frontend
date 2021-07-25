import React from 'react';
import { View } from 'react-native';
import Write from '@/components/Write';
import StackHeader from '@/components/Header/StackHeader';

type TProps = {
  navigation: any;
};

export default function WriteStack({ navigation }: TProps) {
  return (
    <View>
      <StackHeader navigation={navigation} />
      <Write navigation={navigation} />
    </View>
  );
}
