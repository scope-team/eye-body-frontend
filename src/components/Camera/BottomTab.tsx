import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  navigation: any;
};

type TRootStack = 'GalleryPage' | 'SettingPage';

export default function BottomTab({ navigation }: TProps) {
  const handleChangeStack = useCallback((stack: TRootStack) => {
    if (stack === 'GalleryPage') {
      navigation.navigate('GalleryPage');
    } else if (stack === 'SettingPage') {
      navigation.navigate('SettingPage');
    }
  }, []);

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
        padding: 30,
        backgroundColor: '#202020',
      }}>
      <Text style={{ color: 'white' }} onPress={() => handleChangeStack('GalleryPage')}>
        앨범
      </Text>
      <Text style={{ color: 'white' }}>촬영버튼</Text>
      <Text style={{ color: 'white' }} onPress={() => handleChangeStack('SettingPage')}>
        세팅
      </Text>
    </View>
  );
}
