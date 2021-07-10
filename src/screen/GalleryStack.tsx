import React from 'react';
import { View } from 'react-native';
import Gallery from '@/components/Gallery';

type TProps = {
  navigation: any;
};

export default function GalleryStack({ navigation }: TProps) {
  return (
    <View>
      <Gallery navigation={navigation} />
    </View>
  );
}
