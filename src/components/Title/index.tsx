import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

type TProps = {
  title: string;
  navigation: any;
};

export default function Titleindex({ title, navigation }: TProps) {
  const handleChangeStack = () => {
    navigation.navigate('PopupStack');
  };

  const renderTitle = () => {
    return (
      <>
        <Text style={{ color: 'white', fontSize: 34, fontWeight: '800' }}>{title}</Text>
        {title === 'Gallery' ? (
          <TouchableOpacity onPress={handleChangeStack}>
            <Image
              source={require('assets/images/title/popup.png')}
              style={{
                width: 46,
                height: 46,
              }}
            />
          </TouchableOpacity>
        ) : null}
      </>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 60,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#202020',
      }}>
      {renderTitle()}
    </View>
  );
}
