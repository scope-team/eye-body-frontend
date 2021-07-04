import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

function EffectSrcreen({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('AlbumScreen', {name: '효과'});
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPressHandler}>
        <Text>효과1</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>효과2</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>효과3</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default EffectSrcreen;
