import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';

type RootStackParamList = {
  BottomTabNavigator: {name: string};
};

const RootStack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

function StackNavigator() {
  return (
    <RootStack.Navigator screenOptions={screenOptions}>
      <RootStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </RootStack.Navigator>
  );
}

export default StackNavigator;
