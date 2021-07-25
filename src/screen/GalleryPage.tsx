import React from 'react';
import { View } from 'react-native';
import Gallery from '../components/GalleryPage';
import PageHeader from '../components/Header/PageHeader';

type TProps = {
  navigation: any;
  route: any;
};

export default function GalleryPage({ navigation, route }: TProps) {
  return (
    <View>
      <PageHeader navigation={navigation} />
      <Gallery navigation={navigation} name={route.name} />
    </View>
  );
}
