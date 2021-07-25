import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

type TProps = {
  navigation: any;
};

export default function PageHeader({ navigation }: TProps) {
  const handleCloseStack = () => {
    navigation.goBack();
  };

  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 5,
          right: 11,
          width: 46,
          height: 46,
        }}
        onPress={() => {
          handleCloseStack();
        }}>
        <Image
          source={require('assets/images/header/arrow_close.png')}
          style={{
            width: 46,
            height: 46,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ width: '100%', height: 100, backgroundColor: '#202020' }}>{renderHeader()}</View>
  );
}
