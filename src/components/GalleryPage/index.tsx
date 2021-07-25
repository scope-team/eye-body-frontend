import React from 'react';
import { View } from 'react-native';
import Title from '../../components/Title';
import PhotoList from '../../components/Gallery/PhotoList';
import useStackContext from '../../lib/context/useStackContext';

type TProps = {
  navigation: any;
  name: string;
};

export default function GalleryPageIndex({ navigation, name }: TProps) {
  return (
    <View>
      <Title title="Gallery" navigation={navigation} />
      <PhotoList navigation={navigation} name={name} />
    </View>
  );
}
