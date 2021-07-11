import React from 'react';
import { View } from 'react-native';
import Setting from '@/components/Setting';
import PageHeader from '@/components/Header/PageHeader';

type TProps = {
  route: any;
  navigation: any;
};

export default function SettingPage({ route, navigation }: TProps) {
  return (
    <View>
      <PageHeader navigation={navigation} />
      <Setting route={route} navigation={navigation} />
    </View>
  );
}
