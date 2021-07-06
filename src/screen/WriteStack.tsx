/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: Write
 */

import React from 'react';
import { View, Text } from 'react-native';
import StackHeader from '@components/Header/StackHeader';

type TProps = {
  navigation: any;
};

const Write = ({ navigation }: TProps) => {
  const goBack = navigation.goBack;
  return (
    <View>
      <StackHeader goBack={goBack} />
      <Text>글을 쓰라</Text>
    </View>
  );
};

export default Write;
