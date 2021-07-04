import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

function SelectGuideAlbum({navigation}) {
  const goToAlbum = () => {
    navigation.navigate('AlbumScreen', {name: '세팅'});
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={goToAlbum}>
        <Text>아이바디에서 가져오기</Text>
      </TouchableOpacity>

      <Text>핸드폰에서 가져오기</Text>
    </SafeAreaView>
  );
}

export default SelectGuideAlbum;
