import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Title from '@/components/Title';
import tw from '@/styles/tailwind';
import useCameraContext from '@/lib/context/useCameraContext';
import SettingSwitch from '@/components/Setting/Switch';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  navigation: any;
};

type TStack = 'GalleryStack' | 'FAQStack';

export default function SettingIndex({ navigation }: TProps) {
  const { mirrorImage, setMirrorImage, quality, setQuality, guideImage, setGuideImage } =
    useCameraContext();
  const { setGalleryStack } = useStackContext();

  const isCallStackScreen = useCallback((screen: TStack) => {
    if (screen === 'GalleryStack') {
      setGalleryStack('Select');
      navigation.navigate('GalleryStack');
    } else if (screen === 'FAQStack') {
      navigation.navigate('FAQStack');
    }
  }, []);

  return (
    <View>
      <Title title="Setting" navigation={navigation} />
      <View style={tw`flex-col px-10 bg-gray_20 h-full`}>
        <TouchableOpacity
          style={tw`flex flex-row justify-between items-center h-16 border-gray_39 border-b`}>
          <Text style={tw`text-base text-white`} onPress={() => isCallStackScreen('GalleryStack')}>
            가이드 사진 변경
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGuideImage(prev => ({ ...prev, isGuideImage: !prev.isGuideImage }))}
          style={tw`flex flex-row justify-between items-center h-16 border-gray_39 border-b`}>
          <Text style={tw`text-base text-white`}>가이드 사진 표시</Text>
          <SettingSwitch isOn={guideImage.isGuideImage} width="63" height="24" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setQuality(prev => !prev)}
          style={tw`flex flex-row justify-between items-center h-16 border-gray_39 border-b`}>
          <Text style={tw`text-base text-white`}>고해상도</Text>
          <SettingSwitch isOn={quality} width="63" height="24" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMirrorImage(prev => !prev)}
          style={tw`flex flex-row justify-between items-center h-16 border-gray_39 border-b`}>
          <Text style={tw`text-base text-white`}>거울모드</Text>
          <SettingSwitch isOn={mirrorImage} width="63" height="24" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between items-center h-16 border-gray_39 border-b`}>
          <Text style={tw`text-base text-white`} onPress={() => isCallStackScreen('FAQStack')}>
            FAQ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between items-center h-16 border-gray_39 border-b`}>
          <Text style={tw`text-base text-white`}>평가하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between items-center h-16 border-gray_39 border-b`}>
          <Text style={tw`text-base text-white`}>만든 사람들</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
