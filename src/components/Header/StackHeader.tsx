import React from 'react';
import { View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import SVGIcon from '@/lib/svg/SVGIcon';
import useStackContext from '@/lib/context/useStackContext';

const arrowBack = require('assets/images/header/arrow_back.png');

type TProps = {
  navigation: any;
  name?: string;
  isAfterEffectPage?: boolean;
  finishEffectHandler?: () => void;
};

export default function StackHeader({
  navigation,
  name,
  finishEffectHandler,
  isAfterEffectPage,
}: TProps) {
  const handleChangeStack = () => {
    navigation.goBack();
  };

  const { GalleryStackType, WriteStackType } = useStackContext();

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
        {name === 'EffectPage' && !isAfterEffectPage ? (
          <TouchableOpacity onPress={finishEffectHandler}>
            <SVGIcon icon="check_neon" size="46" />
          </TouchableOpacity>
        ) : isAfterEffectPage ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SVGIcon icon="cancel" size="46" />
          </TouchableOpacity>
        ) : WriteStackType === 'SavePhoto' && name !== 'GalleryStack' ? (
          <TouchableOpacity onPress={() => navigation.navigate('GalleryPage')}>
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
