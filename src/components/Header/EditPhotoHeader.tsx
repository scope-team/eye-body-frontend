import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import SVGIcon from '@/lib/svg/SVGIcon';

export default function PageHeader() {
  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 5,
          right: 11,
          width: 46,
          height: 46,
        }}></TouchableOpacity>
    );
  };

  return (
    <View style={{ width: '100%', height: 100, backgroundColor: '#202020' }}>{renderHeader()}</View>
  );
}
