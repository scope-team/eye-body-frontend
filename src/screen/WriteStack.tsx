import React from 'react';
import { View } from 'react-native';
import Write from '@/components/Write';
import StackHeader from '@/components/Header/StackHeader';

type TProps = {
  route: any;
  navigation: any;
};

export default function WriteStack({ route, navigation }: TProps) {
  return (
    <View>
      <StackHeader navigation={navigation} />
      <Write navigation={navigation} picture={route.params.picture} />
    </View>
  );
}
