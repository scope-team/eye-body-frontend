import React from 'react';
import { View, Text } from 'react-native';

type TProps = {
  navigation: any;
};

type TRootStack = 'GalleryPage' | 'SettingPage';

const CameraStack = ({ navigation }: TProps) => {
  const isCallStackNavigator = (stack: TRootStack) => {
    if (stack === 'GalleryPage') {
      navigation.navigate('GalleryPage');
    } else if (stack === 'SettingPage') {
      navigation.navigate('SettingPage');
    }
  };

  return (
    <View
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#303030',
      }}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: 100,
          padding: 30,
          backgroundColor: '#202020',
        }}>
        <Text style={{ color: 'white' }} onPress={() => isCallStackNavigator('GalleryPage')}>
          앨범
        </Text>
        <Text style={{ color: 'white' }}>촬영버튼</Text>
        <Text style={{ color: 'white' }} onPress={() => isCallStackNavigator('SettingPage')}>
          세팅
        </Text>
      </View>
    </View>
  );
};

export default CameraStack;
