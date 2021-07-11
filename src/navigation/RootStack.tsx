import React, { useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import GalleryStack from '@/screen/GalleryStack';
import GalleryPage from '@/screen/GalleryPage';
import SettingPage from '@/screen/SettingPage';
import WriteStack from '@/screen/WriteStack';
import PopupStack from '@/screen/PopupStack';
import FAQStack from '@/screen/FAQStack';
import CameraStack from '@/screen/CameraStack';
import { stackContext, TCurrentStack } from '@/lib/context/useStackContext';

type TProps = {};

type TRootStackParamList = {
  CameraStack: undefined;
  GalleryPage: undefined;
  SettingPage: undefined;
  GalleryStack: undefined;
  WriteStack: undefined;
  PopupStack: undefined;
  FAQStack: undefined;
};

export default function RootStack({}: TProps) {
  const [currentStack, setCurrentStack] = useState<TCurrentStack>('Camera');

  const Stack = createStackNavigator<TRootStackParamList>();

  return (
    <stackContext.Provider value={{ currentStack, setCurrentStack }}>
      <Stack.Navigator initialRouteName="CameraStack">
        <Stack.Screen
          name="CameraStack"
          component={CameraStack}
          options={({ route, navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="GalleryPage"
          component={GalleryPage}
          options={({ route, navigation }) => ({
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          })}
        />
        <Stack.Screen
          name="SettingPage"
          component={SettingPage}
          options={({ navigation }) => ({
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
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
          name="WriteStack"
          component={WriteStack}
          options={({ route, navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="PopupStack"
          component={PopupStack}
          options={({ route, navigation }) => ({
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
    </stackContext.Provider>
  );
}
