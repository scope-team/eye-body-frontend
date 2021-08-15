import React from 'react';
import { View } from 'react-native';
import GalleryPageComopnent from '@/components/Gallery/Page';
import PageHeader from '@/components/Header/PageHeader';

type TProps = {
  navigation: any;
  route: any;
};

export default function GalleryPage({ navigation, route }: TProps) {
  return (
    <View>
      <PageHeader navigation={navigation} />
      <GalleryPageComopnent navigation={navigation} name={route.name} />
    </View>
  );
}
