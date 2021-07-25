import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import useStackContext from '@/lib/context/useStackContext';
import Title from '@/components/Title';

type TProps = {
  navigation: any;
};

type TStack = 'GalleryStack' | 'FAQStack';

export default function SettingIndex({ navigation }: TProps) {
  const isCallStackScreen = useCallback((screen: TStack) => {
    if (screen === 'GalleryStack') {
      navigation.navigate('GalleryStack');
    } else if (screen === 'FAQStack') {
      navigation.navigate('FAQStack');
    }
  }, []);

  return (
    <View>
      <Title title="Setting" navigation={navigation} />
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
