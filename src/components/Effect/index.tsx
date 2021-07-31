import React from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import Layout from '@/constants/Layout';

type Tprops = {
  selectedFileName: any;
  effectName: string;
  isButtonOn: boolean;
  isWhite: boolean;
};

export default function Effect({ selectedFileName, effectName, isButtonOn, isWhite }: Tprops) {
  {
    return (
      <View style={{ flexDirection: 'row', width: Layout.screen.width }}>
        {selectedFileName.map((p: any) => {
          const uri = p.uri;
          return (
            <>
              {effectName === 'Before & After' ? (
                <Text
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
              ) : null}
              <View style={{ width: 200, height: 200 }} key={p.uri}>
                <ImageBackground source={{ uri }} style={{ width: '100%', height: '100%' }} />
              </View>
            </>
          );
        })}
      </View>
    );
  }
}
