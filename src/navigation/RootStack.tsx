import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WriteStack from '@screen/WriteStack';
import PopupStack from '@screen/PopupStack';
import GalleryStack from '@screen/GalleryStack';
import FAQStack from '@screen/FAQStack';
import CameraStack from '@screen/CameraStack';
import SettingStack from '@screen/SettingStack';

type TProps = {};

type TRootStackParamList = {
  HomeStack: undefined;
  CameraStack: undefined;
  GalleryStack: undefined;
  WriteStack: undefined;
  PopupStack: undefined;
  FAQStack: undefined;
  SettingStack: undefined;
};

const RootStack = ({}: TProps) => {
  const Stack = createStackNavigator<TRootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="CameraStack">
      <Stack.Screen
        name="CameraStack"
        component={CameraStack}
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
      <Stack.Screen
        name="SettingStack"
        component={SettingStack}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
