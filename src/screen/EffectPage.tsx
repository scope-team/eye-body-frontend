import React from 'react';
import { View, Text } from 'react-native';
import Colors from '@/constants/Colors';
import Gallery from '@/components/GalleryPage';
import StackHeader from '@/components/Header/StackHeader';
import Layout from '@/constants/Layout';

type TProps = {
  navigation: any;
  route: any;
};

export default function EffectPage({ navigation, route }: TProps) {
  const finishEffectHandler = () => {};

  return (
    <View style={{ backgroundColor: Colors.backgroundColor, height: Layout.screen.height }}>
      <StackHeader
        navigation={navigation}
        name={route.name}
        finishEffectHandler={finishEffectHandler}
      />
      <Text>이펙트 페이지</Text>
    </View>
  );
}
