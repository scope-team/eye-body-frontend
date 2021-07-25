import React from 'react';
import { View, Text } from 'react-native';

type Tprops = {
  effectName: string;
};

export default function EffectBottomMenu({ effectName }: Tprops) {
  return (
    <View style={{ marginTop: 40 }}>
      <Text>{effectName}</Text>
    </View>
  );
}
