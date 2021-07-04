/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: Guides
 */

import React from 'react';
import { View, TouchableOpacity } from 'react-native';

type TProps = {};

const Guides = ({}: TProps) => {
  return (
    <View>
      <TouchableOpacity>Eye Body</TouchableOpacity>
      <TouchableOpacity>My Phone</TouchableOpacity>
    </View>
  );
};

export default Guides;
