/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: createBottomTabNavigator
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraTab from '@screen/HomeStack/CameraTab';
import SettingTab from '@screen/HomeStack/SettingTab';
import GalleryTab from '@screen/HomeStack/GalleryTab';

type TProps = {};

export const HomeBottomTab = ({}: TProps) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={'CameraTab'}
      tabBarOptions={{
        style: {
          backgroundColor: '#202020',
          paddingBottom: 35,
          borderTopColor: '#202020',
        },
        labelStyle: {
          fontSize: 20,
          fontWeight: '400',
          color: 'gray',
        },
      }}>
      <Tab.Screen name="GalleryTab" component={GalleryTab} />
      <Tab.Screen name="CameraTab" component={CameraTab} />
      <Tab.Screen name="SettingTab" component={SettingTab} />
    </Tab.Navigator>
  );
};
