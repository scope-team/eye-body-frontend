import SVGIcon from '@/lib/svg/SVGIcon';
import tw from '@/styles/tailwind';
import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

type TDetailModal = {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DetailModal({ setModalOn }: TDetailModal) {
  return (
    <View style={tw`w-full h-3/4 justify-center`}>
      <TouchableOpacity
        style={tw`absolute -right-6 -top-10 items-center`}
        onPress={() => setModalOn(false)}>
        <SVGIcon icon="x" size="43" />
      </TouchableOpacity>
      <View style={tw`h-full pt-8`}>
        <View style={tw`items-center mb-16`}>
          <Text style={tw`text-white text-2xl mb-2 font-bold`}>Compare</Text>
          <Text style={tw`text-white text-base mb-2`}>바를 움직여서 사진을 비교해요.</Text>
          <SVGIcon icon="compare" size="100 right-0" />
        </View>
        <View style={tw`items-center mb-16`}>
          <Text style={tw`text-white text-2xl mb-2 font-bold`}>Before & After</Text>
          <Text style={tw`text-white text-base mb-2`}>사진을 좌우로 배치해요.</Text>
          <SVGIcon icon="beforeAndAfter" size="100 right-0" />
        </View>
        <View style={tw`items-center mb-16`}>
          <Text style={tw`text-white text-2xl mb-2 font-bold`}>Animation</Text>
          <Text style={tw`text-white text-base mb-2`}>사진을 움직이는 이미지로 만들어요.</Text>
          <SVGIcon icon="animation" size="100 right-0" />
        </View>
      </View>
    </View>
  );
}
