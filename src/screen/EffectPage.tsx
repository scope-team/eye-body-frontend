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
  const [isButtonOn, setIsButtonOn] = useState<boolean>(false);
  const [isWhite, setIsWhite] = useState<boolean>(false);
  const [speedOfAnimation, setSpeedOfAnimation] = useState<number>(0);

  useEffect(() => {
    const { selectedFileName } = route.params;
  }, []);

  const finishEffectHandler = () => {
    console.log('D');
  };

  const switchingButtonHandler = () => {
    setIsButtonOn(!isButtonOn);
  };

  const switchingColorHandler = (ele: boolean) => {
    setIsWhite(ele);
  };

  const changeAnimationValueHandler = (value: number) => {
    setSpeedOfAnimation(value);
  };

  return (
    <View style={{ backgroundColor: Colors.backgroundColor, height: Layout.screen.height }}>
      <StackHeader
        navigation={navigation}
        name={route.name}
        finishEffectHandler={finishEffectHandler}
      />
      <SwitchEffect effectName={route.params.effectName} />
      <Effect
        selectedFileName={route.params.selectedFileName}
        effectName={route.params.effectName}
        isButtonOn={isButtonOn}
        isWhite={isWhite}
        speedOfAnimation={speedOfAnimation}
      />
      <EffectBottomMenu
        effectName={route.params.effectName}
        isButtonOn={isButtonOn}
        isWhite={isWhite}
        switchingButtonHandler={switchingButtonHandler}
        switchingColorHandler={switchingColorHandler}
        changeAnimationValueHandler={changeAnimationValueHandler}
      />
    </View>
  );
}
