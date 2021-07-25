import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import SVGIcon from '@/lib/svg/SVGIcon';
import Layout from '@/constants/Layout';
import Colors from '@/constants/Colors';
import Slider from '@react-native-community/slider';

type Tprops = {
  effectName: string;
  isButtonOn: boolean;
  switchingButtonHandler: () => void;
  switchingColorHandler: (ele: boolean) => void;
  changeAnimationValueHandler: (value: number) => void;
  isWhite: boolean;
};

export default function EffectBottomMenu({
  effectName,
  isButtonOn,
  switchingButtonHandler,
  switchingColorHandler,
  changeAnimationValueHandler,
  isWhite,
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
          <View
            style={{
              alignItems: 'center',
              width: Layout.screen.width,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <ToggleSwitch
                isOn={isButtonOn}
                onColor={Colors.mainColor}
                offColor="black"
                label="텍스트 표시"
                labelStyle={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 20,
                  paddingRight: 90,
                }}
                size="medium"
                onToggle={(isOn: any) => switchingButtonHandler()}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: Layout.screen.width,
                paddingRight: 70,
                paddingTop: 20,
              }}>
              <TouchableOpacity onPress={() => switchingColorHandler(true)}>
                <View
                  style={{
                    position: 'relative',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingRight: 20,
                  }}>
                  <SVGIcon icon="black_circle" size="20" style={{ marginRight: 5 }} />
                  <SVGIcon
                    icon="neon_circle"
                    size="13"
                    style={{
                      display: isWhite ? 'flex' : 'none',
                      position: 'absolute',
                      top: 3,
                      left: 4,
                    }}
                  />
                  <Text style={{ color: 'white', flexDirection: 'row' }}>화이트</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => switchingColorHandler(false)}>
                <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
                  <SVGIcon icon="black_circle" size="20" style={{ marginRight: 5 }} />
                  <SVGIcon
                    icon="neon_circle"
                    size="13"
                    style={{
                      display: isWhite ? 'none' : 'flex',
                      position: 'absolute',
                      top: 3,
                      left: 4,
                    }}
                  />
                  <Text style={{ color: 'white' }}>블랙</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 'Animation':
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: Layout.screen.width,
            }}>
            <Text style={{ fontSize: 50, color: 'white', marginBottom: 5, marginRight: 5 }}>-</Text>
            <Slider
              style={{
                width: Layout.window.width / 1.3,
                height: 40,
                transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
              }}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor={Colors.mainColor}
              maximumTrackTintColor="#000000"
              onValueChange={changeAnimationValueHandler}
            />
            <Text style={{ fontSize: 40, color: 'white', marginBottom: 5, marginLeft: 5 }}>+</Text>
          </View>
        );
      default:
        return null;
    }
  };
  return <View style={{ marginTop: 40 }}>{renderBottomMenu()}</View>;
}
