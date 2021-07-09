import React, { useCallback } from 'react';
import { View, Text  } from 'react-native';
import StackHeader from '@components/Header/StackHeader';

type TProps = {
  navigation: any;
};

type TStack = 'GalleryStack' | 'FAQStack';

const SettingStack = ({ navigation }: TProps) => {
  const goBack = navigation.goBack;

  const isCallStackScreen = useCallback((screen: TStack) => {
    if (screen === 'GalleryStack') {
      navigation.navigate('GalleryStack');
    }
    if (screen === 'FAQStack') {
      navigation.navigate('FAQStack');
    }
  }, []);

  return (
    <View>
      <StackHeader goBack={goBack} />
      <View style={{ flexDirection: 'row' }}>
      <Text style={{ fontSize: 40 }}>setting</Text>
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
};

export default SettingStack;