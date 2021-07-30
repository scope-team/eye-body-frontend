import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Colors from '@/constants/Colors';
import StackHeader from '@/components/Header/StackHeader';
import Layout from '@/constants/Layout';
import Effect from '@/components/Effect';
import SwitchEffect from '@/components/Effect/SwitchEffect';
import EffectBottomMenu from '@/components/Effect/EffectBottomMenu';

type TProps = {
  navigation: any;
  route: any;
};

export default function EffectPage({ navigation, route }: TProps) {
  useEffect(() => {
    const { selectedFileName } = route.params;
  }, []);

  const finishEffectHandler = () => {};

  return (
    <View style={{ backgroundColor: Colors.backgroundColor, height: Layout.screen.height }}>
      <StackHeader
        navigation={navigation}
        name={route.name}
        finishEffectHandler={finishEffectHandler}
      />
      <SwitchEffect />
      <Effect
        selectedFileName={route.params.selectedFileName}
        effectName={route.params.effectName}
      />
      <EffectBottomMenu effectName={route.params.effectName} />
    </View>
  );
}
