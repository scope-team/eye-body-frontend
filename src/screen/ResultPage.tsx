import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import StackHeader from '../components/Header/StackHeader';
import Effect from '@/components/Effect';
import SVGIcon from '@/lib/svg/SVGIcon';
import tw from 'styles/tailwind';

type TProps = {
  navigation: any;
  route: any;
};

export default function ResultPage({ navigation, route }: TProps) {
  useEffect(() => {
    console.log(route.params.effectName);
  }, []);

  return (
    <View>
      <StackHeader navigation={navigation} isAfterEffectPage={true} />
      <View style={tw`background-color h-full`}>
        <Effect
          selectedFileName={route.params.selectedFileName}
          effectName={route.params.effectName}
        />
        <SVGIcon icon="team_logo" size="30" style={tw`absolute`} />
      </View>
      <View></View>
    </View>
  );
}
