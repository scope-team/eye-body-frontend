import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { TSelectedPhotos } from '@/components/Gallery';
import Layout from '@/constants/Layout';

type Tprops = {
  selectedFileName: TSelectedPhotos;
  effectName: string;
};

export default function Effect({ selectedFileName, effectName }: Tprops) {
  {
    return (
      <View style={{ flexDirection: 'row', width: Layout.screen.width }}>
        {selectedFileName.map(p => {
          const uri = p.uri;
          return (
            <>
              {effectName === 'Before & After' ? (
                <Text
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: Layout.screen.width / 2 - 70,
                    color: 'white',
                    zIndex: 1,
                    fontSize: 20,
                  }}>
                  {effectName}
                </Text>
              ) : null}
              <View style={{ width: 200, height: 200 }}>
                <ImageBackground source={{ uri }} style={{ width: '100%', height: '100%' }} />
              </View>
            </>
          );
        })}
      </View>
    );
  }
}
