import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EffectSrcreen from '../screen/EffectScreen';
import AlbumScreen from '../screen/AlbumScreen';
import Effect from '../component/Effect';

const EffectStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

function EffectNavigator() {
  return (
    <EffectStack.Navigator screenOptions={screenOptions}>
      <EffectStack.Screen name="EffectSrcreen" component={EffectSrcreen} />
      <EffectStack.Screen name="AlbumScreen" component={AlbumScreen} />
      <EffectStack.Screen name="Effect" component={Effect} />
    </EffectStack.Navigator>
  );
}

export default EffectNavigator;
