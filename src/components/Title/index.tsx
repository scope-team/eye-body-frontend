import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SVGIcon from '@/lib/svg/SVGIcon';
import useStackContext from '@/lib/context/useStackContext';


type TProps = {
  title: string;
  navigation: any;
  selectedFileName: any[];
};

export default function Titleindex({ title, navigation, selectedFileName }: TProps) {
  const { setPopupStackType } = useStackContext();

  const handleChangeStack = () => {
    navigation.navigate('PopupStack');
    setPopupStackType('EditPhoto');
  };

  const renderTitle = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{ color: 'white', fontSize: 34, fontWeight: '800' }}>{title}</Text>
        </View>

        {title === 'Gallery' ? (
          <TouchableOpacity onPress={handleChangeStack}>
            <SVGIcon icon="popup" size="46" />
          </TouchableOpacity>
        ) : (
          <SVGIcon icon={'check_black'} size="46" />
        )}
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
        paddingHorizontal: 30,
        backgroundColor: '#202020',
      }}>
      {renderTitle()}
    </View>
  );
}
