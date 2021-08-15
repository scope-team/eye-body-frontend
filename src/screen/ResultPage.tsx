import React from 'react';
import { View, Text } from 'react-native';
import StackHeader from '../components/Header/StackHeader';

type TProps = {
  navigation: any;
};

export default function ResultPage({ navigation }: TProps) {
  return (
    <View>
      <StackHeader navigation={navigation} />
      <Text>sda</Text>
    </View>
  );
}
