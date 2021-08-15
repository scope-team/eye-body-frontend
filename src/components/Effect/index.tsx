import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import AnimationImage from '@/components/Effect/AnimationImage';
import tw from 'styles/tailwind';

type Tprops = {
  selectedFileName: any;
  effectName?: string;
  isButtonOn?: boolean;
  isWhite?: boolean;
  speedOfAnimation?: number;
  isAfterEffectPage?: boolean;
};

export default function Effect({
  selectedFileName,
  effectName,
  isButtonOn,
  isWhite,
  speedOfAnimation,
  isAfterEffectPage,
}: Tprops) {
  {
    const twoOfPhotoComponent = () => {
      return selectedFileName.map((p: any, index: number) => {
        const uri = p.uri;
        return (
          <>
            <Text
              key={index}
              style={tw`${isButtonOn ? 'flex' : 'hidden'} ${
                isWhite ? 'text-white' : 'text-black'
              } absolute z-10 text-lg top-0 left-1/3`}>
              {effectName}
            </Text>
            <View style={tw`h-48 w-48`} key={p.uri}>
              <ImageBackground source={{ uri }} style={tw`w-full h-full`} />
            </View>
          </>
        );
      });
    };

    const renderEffectComponent = () => {
      switch (effectName) {
        case 'Compare': {
          return twoOfPhotoComponent();
        }
        case 'Before & After': {
          return twoOfPhotoComponent();
        }

        case 'Animation': {
          return (
            <AnimationImage
              selectedFileName={selectedFileName}
              speedOfAnimation={speedOfAnimation}
              isAfterEffectPage={isAfterEffectPage}
            />
          );
        }

        default:
          return null;
      }
    };

    return <View style={tw`flex-row w-full`}>{renderEffectComponent()}</View>;
  }
}
