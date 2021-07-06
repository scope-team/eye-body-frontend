/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: Popup
 */

import React from 'react';
import { View } from 'react-native';
import StackHeader from '@components/Header/StackHeader';
import Guides from '@components/Popup/Guides';

type TProps = {
  navigation: any;
};

const Popup = ({ navigation }: TProps) => {
  const goBack = navigation.goBack;
  return (
    <View>
      <StackHeader goBack={goBack} />
      <Guides />
    </View>
  );
};

export default Popup;
