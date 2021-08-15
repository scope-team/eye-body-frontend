import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import SVGIcon from '@/lib/svg/SVGIcon';
import Layout from '@/constants/Layout';
import Colors from '@/constants/Colors';
import Slider from '@react-native-community/slider';
import tw from 'styles/tailwind';

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
            <View style={tw`flex-row`}></View>
          </View>
        );
      case 'Before & After':
        return (
          <View style={tw`items-center w-full`}>
            <View style={tw`flex-row`}>
              <ToggleSwitch
                isOn={isButtonOn}
                onColor={Colors.mainColor}
                offColor="black"
                label="텍스트 표시"
                labelStyle={tw`text-white text-xl pr-24`}
                size="medium"
                onToggle={(isOn: any) => switchingButtonHandler()}
              />
            </View>
            <View style={tw`flex-row justify-end pr-16 pt-5 w-full`}>
              <TouchableOpacity onPress={() => switchingColorHandler(true)}>
                <View style={tw`flex-row relative items-center pr-5`}>
                  <SVGIcon icon="black_circle" size="20" style={{ marginRight: 5 }} />
                  <SVGIcon
                    icon="neon_circle"
                    size="13"
                    style={tw`${isWhite ? 'flex' : 'hidden'} absolute top-1 left-1`}
                  />
                  <Text style={tw`flex-row text-white`}>화이트</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => switchingColorHandler(false)}>
                <View style={tw`relative flex-row items-center`}>
                  <SVGIcon icon="black_circle" size="20" style={{ marginRight: 5 }} />
                  <SVGIcon
                    icon="neon_circle"
                    size="13"
                    style={tw`${isWhite ? 'hidden' : 'flex'} absolute top-1 left-1`}
                  />
                  <Text style={tw`text-white`}>블랙</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 'Animation':
        return (
          <View style={tw`flex-row items-center justify-center w-full`}>
            <Text style={tw`text-4xl text-white mb-1 mr-1`}>-</Text>
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
            <Text style={tw`text-3xl text-white mb-1 ml-1`}>+</Text>
          </View>
        );
      default:
        return null;
    }
  };
  return <View style={{ marginTop: 40 }}>{renderBottomMenu()}</View>;
}
