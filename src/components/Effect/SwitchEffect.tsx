import React from 'react';
import { Text, View } from 'react-native';
import Layout from '@/constants/Layout';
import Colors from '@/constants/Colors';

type Tprops = {
  effectName: string;
};

const MENU = [
  { name: 'Compare', value: 'Compare' },
  { name: 'B&A', value: 'Before & After' },
  { name: 'Animation', value: 'Animation' },
];

function SwitchEffect({ effectName }: Tprops) {
  return (
    <View style={{ width: Layout.screen.width, height: 100, paddingHorizontal: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          backgroundColor: 'black',
          borderRadius: 50,
          width: '100%',
          height: '50%',
        }}>
        {MENU.map((ele, index) => {
          return (
            <View
              style={{
                backgroundColor: effectName === ele.value ? Colors.mainColor : '',
                height: '80%',
                width: 100,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              key={index}>
              <Text
                style={{
                  color: effectName === ele.value ? 'black' : 'gray',
                  fontSize: 16,
                  fontWeight: '800',
                }}>
                {ele.name}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default SwitchEffect;
