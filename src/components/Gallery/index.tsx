/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: Gallery
 */

import React from 'react';
import { View } from 'react-native';
import StackHeader from '../Header/StackHeader';
import PhotoList from './PhotoList';
import Title from '../Title';

type TProps = {
  navigation: any;
};

export default function GalleryIndex({ navigation }: TProps) {
  const goBack = navigation.goBack;

  return (
    <View>
      <StackHeader goBack={goBack} />
      <Title />
      <PhotoList navigation={navigation} />
    </View>
  );
}
