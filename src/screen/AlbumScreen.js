import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Albums from '../component/Albums';

function AlbumScreen({navigation, route}) {
  const onPressAlbumHandler = () => {
    navigation.navigate('SingleAlbum');
  };
  const onPressEffectHandler = () => {
    navigation.navigate('EffectNavigator');
  };

  const {name: routeName} = route?.params || '';

  const switcher = () => {
    switch (routeName) {
      case '효과':
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Effect');
            }}>
            <Text>효과 선택 후 앨범</Text>
          </TouchableOpacity>
        );
      case '세팅':
        return (
          <TouchableOpacity>
            <Text>세팅 선택 후 앨범</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView>
      <Text>앨범 스크린</Text>
      {switcher()}
      <Albums />
      <TouchableOpacity onPress={onPressAlbumHandler}>
        <Text> 사진 클릭</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressEffectHandler}>
        <Text> 아이바디 아이콘 클릭</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default AlbumScreen;
