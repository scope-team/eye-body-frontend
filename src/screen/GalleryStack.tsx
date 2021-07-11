import React from 'react';
import { View } from 'react-native';
import Gallery from '@/components/Gallery';

type TProps = {
  route: any;
  navigation: any;
};

export default function GalleryStack({ route, navigation }: TProps) {
  return (
    <View>
      <Gallery route={route} navigation={navigation} />
    </View>
  );
}
