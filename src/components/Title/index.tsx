/**
 * Author: Ryan
 * Date: 2021-07-11
 * title: index
 */

import React from 'react';
import { View, Text } from 'react-native';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {};

export default function Titleindex({}: TProps) {
  const { currentStack } = useStackContext();
  return (
    <View style={{ width: '100%', height: 60, paddingLeft: 30, backgroundColor: '#202020' }}>
      {currentStack === 'GalleryPage' ? (
        <Text style={{ color: 'white', fontSize: 34, fontWeight: '800' }}>Gallery</Text>
      ) : (
        <Text style={{ color: 'white', fontSize: 34, fontWeight: '800' }}>{currentStack}</Text>
      )}
    </View>
  );
}
