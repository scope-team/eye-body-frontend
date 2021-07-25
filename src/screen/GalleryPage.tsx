import React from 'react';
import { View } from 'react-native';
import Gallery from '@/components/GalleryPage';
import PageHeader from '@/components/Header/PageHeader';

type TProps = {
  navigation: any;
};

export default function GalleryPage({ navigation }: TProps) {
  return (
    <View>
      <PageHeader navigation={navigation} />
      <Gallery navigation={navigation} />
    </View>
  );
}
