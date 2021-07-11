import React from 'react';
import { View, Text } from 'react-native';

type TProps = {
  navigation: any;
};

export default function WriteStack({ navigation }: TProps) {
  return (
    <View>
      <Text>{'testString'}</Text>
    </View>
  );
}
