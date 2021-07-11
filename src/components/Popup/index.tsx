import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';

type TProps = {
  route: any;
  navigation: any;
};

export default function PopupIndex({ route, navigation }: TProps) {
  return (
    <>
      <Header route={route} navigation={navigation} />
      <View style={{ height: '100%', backgroundColor: '#202020' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>어떻게 편집할까요?</Text>
        <TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 20 }}>Compare</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 20 }}>Befor & After</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 20 }}>Animation</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
