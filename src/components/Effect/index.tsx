import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Layout from '@/constants/Layout';
import AnimationImage from '@/components/Effect/AnimationImage';


type Tprops = {
  selectedFileName: any;
  effectName: string;
  isButtonOn: boolean;
  isWhite: boolean;
  speedOfAnimation: number;
};

export default function Effect({
  selectedFileName,
  effectName,
  isButtonOn,
  isWhite,
  speedOfAnimation,
}: Tprops) {
  {
    const twoOfPhotoComponent = () => {
      return selectedFileName.map((p: any, index: number) => {
        const uri = p.uri;
        return (
          <>
            <Text
              key={p.url}
              style={{
                display: isButtonOn ? 'flex' : 'none',
                position: 'absolute',
                top: 0,
                left: Layout.screen.width / 2 - 70,
                color: isWhite ? 'white' : 'black',
                zIndex: 1,
                fontSize: 20,
              }}>
              {effectName}
            </Text>
            <View style={{ width: 200, height: 200 }} key={p.uri}>
              <ImageBackground source={{ uri }} style={{ width: '100%', height: '100%' }} />
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
            />
          );
        }

        default:
          return null;
      }
    };

    return (
      <View style={{ flexDirection: 'row', width: Layout.screen.width }}>
        {renderEffectComponent()}
      </View>
    );
  }
}
