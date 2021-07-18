import React from 'react';
import { View } from 'react-native';
import Title from '@/components/Title';
import PhotoList from '@/components/Gallery/PhotoList';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  navigation: any;
};

export default function GalleryIndex({ navigation }: TProps) {
  const { GalleryStackType } = useStackContext();
  console.log(GalleryStackType);
  return (
    <View>
      <Title title={GalleryStackType} navigation={navigation} />
      <PhotoList navigation={navigation} />
    </View>
  );
}
