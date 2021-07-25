import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import SVGIcon from '../../lib/svg/SVGIcon';
import useStackContext from '../../lib/context/useStackContext';
import EditPhotoHeader from '@/components/Header/EditPhotoHeader';

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
        <Text style={{ color: 'white', fontSize: 34, fontWeight: '800' }}>{title}</Text>
        {title === 'Gallery' ? (
          <TouchableOpacity onPress={handleChangeStack}>
            <SVGIcon icon="popup" size="46" />
          </TouchableOpacity>
        ) : (
          <EditPhotoHeader selectedFileName={selectedFileName} />
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
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#202020',
      }}>
      {renderTitle()}
    </View>
  );
}
