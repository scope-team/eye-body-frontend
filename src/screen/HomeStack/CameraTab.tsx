/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: Home
 */

import React from 'react';
import { View, Text } from 'react-native';
import ScreenHeader from '@components/Header/ScreenHeader';

type TProps = {};

const Settings = ({}: TProps) => {
  return (
    <View>
      <ScreenHeader />
      <Text style={{ fontSize: 30 }}>camera</Text>
    </View>
  );
};

export default Settings;
