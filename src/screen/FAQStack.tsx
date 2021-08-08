import React from 'react';
import { View, Text } from 'react-native';
import StackHeader from '@/components/Header/StackHeader';

type TProps = {
  navigation: any;
};

const FAQStack = ({ navigation }: TProps) => {
  return (
    <View>
      <StackHeader navigation={navigation} />
      <Text>뭐든 물어봐</Text>
    </View>
  );
};

export default FAQStack;
