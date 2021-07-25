import useStackContext from '../../lib/context/useStackContext';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Title from '@/components/Title';

type TProps = {
  navigation: any;
};

export default function PopupIndex({ navigation }: TProps) {
  let { PopupStackType, setCurrentStack } = useStackContext();

  const goToEditPhotoPage = (title: string) => {
    navigation.navigate('GalleryStack', { title });
    setCurrentStack(title);
  };

  const render = () => {
    if (PopupStackType === 'EditPhoto') {
      return (
        <View style={{ height: '100%', backgroundColor: '#202020' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>어떻게 편집할까요?</Text>
          {['Compare', 'Before & After', 'Animation'].map(title => {
            return (
              <TouchableOpacity
                onPress={() => {
                  goToEditPhotoPage(title);
                }}>
                <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    } else if (PopupStackType === 'SelectGuide') {
      return (
        <View style={{ height: '100%', backgroundColor: '#202020' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>가이드 사진을 어디서 가져올까요?</Text>
          {['Eye Body', 'My Phone'].map(title => {
            return (
              <TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
  };

  return (
    <>
      <Title title={PopupStackType} navigation={navigation} />
      <View
        style={{
          width: '100%',
          height: '100%',
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: '#202020',
        }}>
        {render()}
      </View>
    </>
  );
}
