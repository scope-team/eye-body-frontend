import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AlbumScreen from '../screen/AlbumScreen';
import SingleAlbum from '../component/SingleAlbum';
import SingleAlbumEdit from '../component/SingleAlbumEdit';
import EffectNavigator from './EffectNavigator';

const AlbumStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

function AlbumNavigator() {
  return (
    <AlbumStack.Navigator screenOptions={screenOptions}>
      <AlbumStack.Screen name="AlbumScreen" component={AlbumScreen} />
      <AlbumStack.Screen name="SingleAlbum" component={SingleAlbum} />
      <AlbumStack.Screen name="SingleAlbumEdit" component={SingleAlbumEdit} />
      <AlbumStack.Screen name="EffectNavigator" component={EffectNavigator} />
    </AlbumStack.Navigator>
  );
}

export default AlbumNavigator;
