import React from 'react';
import { View } from 'react-native';
import Gallery from '@/components/Gallery/Stack';
import StackHeader from '@/components/Header/StackHeader';

type TProps = {
  route: any;
  navigation: any;
};

export default function GalleryStack({ navigation }: TProps) {
  return (
    <View>
      <StackHeader navigation={navigation} />
      <Gallery navigation={navigation} />
    </View>
  );
}
