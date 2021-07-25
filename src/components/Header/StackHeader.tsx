import React from 'react';
import { View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import SVGIcon from '@/lib/svg/SVGIcon';

const arrowBack = require('assets/images/header/arrow_back.png');

type TProps = {
  navigation: any;
  name?: string;
  finishEffectHandler?: () => void;
};

export default function StackHeader({ navigation, name, finishEffectHandler }: TProps) {
  const handleChangeStack = () => {
    navigation.goBack();
  };

  const renderHeader = () => {
    return (
      <SafeAreaView
        style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
        <TouchableOpacity
          style={{
            width: 46,
            height: 46,
          }}
          onPress={handleChangeStack}>
          <Image
            source={arrowBack}
            style={{
              width: 46,
              height: 46,
            }}
          />
        </TouchableOpacity>
        {name === 'EffectPage' ? (
          <TouchableOpacity onPress={finishEffectHandler}>
            <SVGIcon icon="check_neon" size="46" />
          </TouchableOpacity>
        ) : null}
      </SafeAreaView>
    );
  };

  return (
    <View style={{ width: '100%', height: 100, backgroundColor: '#202020' }}>{renderHeader()}</View>
  );
}
