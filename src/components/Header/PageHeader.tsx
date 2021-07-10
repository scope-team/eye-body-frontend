import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

type TProps = {
  goBack: any;
};

const PageHeader = ({ goBack }: TProps) => {
  return (
    <View style={{ width: '100%', height: 100, backgroundColor: '#202020' }}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 5,
          right: 11,
          width: 46,
          height: 46,
        }}
        onPress={goBack}>
        <Image
          source={require('assets/images/header/arrow_close.png')}
          style={{
            width: 46,
            height: 46,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PageHeader;
