import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingSrcreen from '../screen/SettingScreen';
import AlbumScreen from '../screen/AlbumScreen';
import SelectGuideAlbum from '../component/SelectGuideAlbum';

const SettingStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

function SettingNavigator() {
  return (
    <SettingStack.Navigator screenOptions={screenOptions}>
      <SettingStack.Screen name="SettingSrcreen" component={SettingSrcreen} />
      <SettingStack.Screen name="AlbumScreen" component={AlbumScreen} />
      <SettingStack.Screen
        name="SelectGuideAlbum"
        component={SelectGuideAlbum}
      />
    </SettingStack.Navigator>
  );
}

export default SettingNavigator;
