import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import SVGIcon from '@/lib/svg/SVGIcon';

type Tprops = {
  effectName: string;
  isButtonOn: boolean;
  switchingButtonHandler: () => void;
  switchingColorHandler: (ele: boolean) => void;
};

export default function EffectBottomMenu({
  effectName,
  isButtonOn,
  switchingButtonHandler,
  switchingColorHandler,
}: Tprops) {
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
                isOn={isButtonOn}
                onColor="green"
                offColor="red"
                label="텍스트 표시"
                labelStyle={{ color: 'black', fontWeight: '900' }}
                size="medium"
                onToggle={(isOn: any) => switchingButtonHandler()}
              />
            </View>
            <View>
              {/* <TouchableOpacity onPress={() => switchingColorHandler(true)}>
                <Image src={require(BlackCircle)} />
                <Image src={require(NeonCircle)} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => switchingColorHandler(false)}>
                <Image src={require(BlackCircle)} />
                <Image src={require(NeonCircle)} />
              </TouchableOpacity> */}

              <SVGIcon icon="neon_circle" size="20" />
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
