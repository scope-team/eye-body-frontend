import React from 'react';
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';

function SettingScreen({navigation}) {
  const goToChangeGuideAblum = () => {
    navigation.navigate('SelectGuideAlbum');
  };
  return (
    <SafeAreaView>
      <Text>세팅</Text>
      <TouchableOpacity onPress={goToChangeGuideAblum}>
        <Text>가이드 사진 변경</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SettingScreen;
