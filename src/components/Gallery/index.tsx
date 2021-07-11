import React from 'react';
import { View } from 'react-native';
import Header from '@/components/Header';
import Title from '@/components/Title';
import PhotoList from '@/components/Gallery/PhotoList';

type TProps = {
  route: any;
  navigation: any;
};

export default function GalleryIndex({ route, navigation }: TProps) {
  const goBack = navigation.goBack;

  return (
    <View>
      <Header route={route} navigation={navigation} goBack={goBack} />
      <Title navigation={navigation} />
      <PhotoList navigation={navigation} />
    </View>
  );
}
