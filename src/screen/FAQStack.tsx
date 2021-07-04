/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: FAQStack
 */

import React from 'react';
import { View, Text } from 'react-native';
import StackHeader from '@components/Header/StackHeader';

type TProps = {
  navigation: any;
};

const FAQStack = ({ navigation }: TProps) => {
  const goBack = navigation.goBack;
  return (
    <View>
      <StackHeader goBack={goBack} />
      <Text>뭐든 물어봐</Text>
    </View>
  );
};

export default FAQStack;
