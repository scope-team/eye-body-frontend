import React from 'react';
import { View } from 'react-native';
import Setting from '@/components/Setting';
import PageHeader from '@/components/Header/PageHeader';

type TProps = {
  navigation: any;
};

export default function SettingPage({ navigation }: TProps) {
  return (
    <View>
      <PageHeader navigation={navigation} />
      <Setting navigation={navigation} />
    </View>
  );
}
