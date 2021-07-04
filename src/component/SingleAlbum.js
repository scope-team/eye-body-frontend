import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

function SingleAlbum({navigation}) {
  const onPressEdit = () => {
    navigation.navigate('SingleAlbumEdit');
  };
  return (
    <SafeAreaView>
      <Text>싱글 앨범</Text>
      <TouchableOpacity onPress={onPressEdit}>
        <Text>보정</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SingleAlbum;
