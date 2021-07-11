import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import useStackContext from '@/lib/context/useStackContext';
import Header from '@/components/Header';
import Title from '@/components/Title';

type TProps = {
  route: any;
  navigation: any;
};

type TStack = 'GalleryStack' | 'FAQStack';

export default function SettingIndex({ route, navigation }: TProps) {
  const { setCurrentStack } = useStackContext();

  const goBack = navigation.goBack;

  const isCallStackScreen = useCallback((screen: TStack) => {
    if (screen === 'GalleryStack') {
      setCurrentStack('Select');
      navigation.navigate('GalleryStack');
    } else if (screen === 'FAQStack') {
      setCurrentStack('FAQ');
      navigation.navigate('FAQStack');
    }
  }, []);

  return (
    <View>
      <Header route={route} navigation={navigation} />
      <Title navigation={navigation} />
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 20 }} onPress={() => isCallStackScreen('GalleryStack')}>
          가이드 사진 변경
        </Text>
        <Text style={{ fontSize: 20 }}>가이드 사진 표시</Text>
        <Text style={{ fontSize: 20 }}>고해상도</Text>
        <Text style={{ fontSize: 20 }}>거울모드</Text>
        <Text style={{ fontSize: 20 }} onPress={() => isCallStackScreen('FAQStack')}>
          FAQ
        </Text>
        <Text style={{ fontSize: 20 }}>평가하기</Text>
        <Text style={{ fontSize: 20 }}>만든 사람들</Text>
      </View>
    </View>
  );
}
