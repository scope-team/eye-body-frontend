import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StackHeader from '../components/Header/StackHeader';
import Effect from '@/components/Effect';
import SVGIcon from '@/lib/svg/SVGIcon';
import Share from 'react-native-share';
import tw from 'styles/tailwind';

type TProps = {
  navigation: any;
  route: any;
};

export default function ResultPage({ navigation, route }: TProps) {
  const onSaveHandler = (e: any) => {
    console.log(e);
  };

  const onShareHandler = async () => {
    const shareResponse = await Share;
    console.log(shareResponse);
  };

  return (
    <View style={tw`background-color h-full`}>
      <StackHeader navigation={navigation} isAfterEffectPage />
      <View>
        <Effect
          selectedFileName={route.params.selectedFileName}
          effectName={route.params.effectName}
          isAfterEffectPage
        />
        <SVGIcon icon="team_logo" size="90" style={tw`absolute left-40 bottom-0`} />
      </View>
      <View style={tw`flex-row items-center justify-center`}>
        <TouchableOpacity onPress={onSaveHandler}>
          <SVGIcon icon="save" size="120" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onShareHandler}>
          <SVGIcon icon="share" size="120" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
