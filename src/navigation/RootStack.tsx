/**
 * Author: Ryan
 * Date: 2021-07-04
 * title: StackNavigator
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeBottomTab } from 'navigation/HomeBottomTab';
import WriteStack from '@screen/WriteStack';
import PopupStack from '@screen/PopupStack';
import GalleryStack from '@screen/GalleryStack';
import FAQStack from '@screen/FAQStack';

type TProps = {};

type TRootStackParamList = {
  HomeStack: undefined;
  WriteStack: undefined;
  PopupStack: undefined;
  GalleryStack: undefined;
  FAQStack: undefined;
};

const RootStack = ({}: TProps) => {
  const Stack = createStackNavigator<TRootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="HomeStack">
      <Stack.Screen
        name="HomeStack"
        component={HomeBottomTab}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="WriteStack"
        component={WriteStack}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="PopupStack"
        component={PopupStack}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="GalleryStack"
        component={GalleryStack}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="FAQStack"
        component={FAQStack}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
