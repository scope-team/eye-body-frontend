/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: Home
 */

import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import ScreenHeader from '@components/Header/ScreenHeader';

type TProps = { navigation: any };

type TStack = 'GalleryStack' | 'FAQStack';

const Settings = ({ navigation }: TProps) => {
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
      <ScreenHeader />
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
  );
};

export default Settings;
