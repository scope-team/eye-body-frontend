import React from 'react';
import { View } from 'react-native';
import Title from '@/components/Title';
import PhotoList from '@/components/GalleryPage/PhotoList';

type TProps = {
  navigation: any;
  route: any;
  name: string;
};

export default function GalleryPageIndex({ navigation, route, name }: TProps) {
  return (
    <View>
      <Title title="Gallery" navigation={navigation} />
      <PhotoList navigation={navigation} route={route} name={name} />
    </View>
  );
}
