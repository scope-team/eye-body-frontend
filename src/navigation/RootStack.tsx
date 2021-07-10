import React, { useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import GalleryStack from '@screen/GalleryStack';
import GalleryPage from '@screen/GalleryPage';
import SettingPage from '@screen/SettingPage';
import WriteStack from '@screen/WriteStack';
import PopupStack from '@screen/PopupStack';
import FAQStack from '@screen/FAQStack';
import CameraStack from '@screen/CameraStack';

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

const RootStack = ({}: TProps) => {
  const [toggle, setToggle] = useState(false);
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
        name="GalleryPage"
        component={GalleryPage}
        options={({ navigation }) => ({
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
