import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

type Tprops = {
  effectName: string;
};

export default function EffectBottomMenu({ effectName }: Tprops) {
  const renderBottomMenu = () => {
    switch (effectName) {
      case 'Compare':
        return (
          <View>
            <View style={{ flexDirection: 'row' }}></View>
          </View>
        );
      case 'Before & After':
        return (
          <View>
            <View style={{ flexDirection: 'row' }}>
              <ToggleSwitch
                isOn={false}
                onColor="green"
                offColor="red"
                label="텍스트 표시"
                labelStyle={{ color: 'black', fontWeight: '900' }}
                size="medium"
                onToggle={(isOn: any) => console.log('changed to : ', isOn)}
              />
            </View>
          </View>
        );
      case 'Animation':
        return (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text>+</Text>
            </TouchableOpacity>
            <View></View>
            <TouchableOpacity>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };
  return <View style={{ marginTop: 40 }}>{renderBottomMenu()}</View>;
}
