/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: Gallery
 */

import React from 'react';
import { View } from 'react-native';
import StackHeader from '@/components/Header/StackHeader';
import PageHeader from '@/components/Header/PageHeader';
import PhotoList from '@/components/Gallery/PhotoList';
import Title from '@/components/Title';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  navigation: any;
};

export default function GalleryIndex({ navigation }: TProps) {
  const { currentStack } = useStackContext();
  const goBack = navigation.goBack;

  return (
    <View>
      {currentStack === 'GalleryPage' ? (
        <PageHeader goBack={goBack} />
      ) : (
        <StackHeader goBack={goBack} />
      )}

      <Title />
      <PhotoList navigation={navigation} />
    </View>
  );
}
