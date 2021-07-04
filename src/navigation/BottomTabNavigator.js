import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AlbumNavigator from '../navigation/AlbumNavigator';
import CameraScreen from '../screen/CameraScreen';
import SettingNavigator from '../navigation/SettingNavigator';

const Tab = createBottomTabNavigator();

const tabOptions = {
  style: {
    height: '9.5%',
  },
  labelStyle: {
    fontSize: 12,
    margin: 0,
    padding: 0,
  },
  activeTintColor: 'black',
  inactiveTintColor: 'gray',
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={tabOptions}>
      <Tab.Screen name="아이바디" component={AlbumNavigator} />
      <Tab.Screen name="촬영" component={CameraScreen} />
      <Tab.Screen name="세팅" component={SettingNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
