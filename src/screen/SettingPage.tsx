import React from 'react';
import { View } from 'react-native';
import Setting from '@/components/Setting';

type TProps = {
  route: any;
  navigation: any;
};

export default function SettingPage({ route, navigation }: TProps) {
  return (
    <View>
      <Setting route={route} navigation={navigation} />
    </View>
  );
}
