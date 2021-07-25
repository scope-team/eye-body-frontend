import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type Tprops = {
  effectName: string;
};

export default function EffectBottomMenu({ effectName }: Tprops) {
  const renderBottomMenu = () => {
    switch (effectName) {
      case 'Compare':
        return (
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text>텍스트 표시</Text>
              <TouchableOpacity></TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text>화이트</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>블랙</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 'Before & After':
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
