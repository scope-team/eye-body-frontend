import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import Title from '@/components/Title';
import PhotoList from '@/components/Gallery/PhotoList';
import EditPhotoHeader from '@/components/Header/EditPhotoHeader';
import useStackContext from '@/lib/context/useStackContext';
import Colors from '@/constants/Colors';
import Layout from '@/constants/Layout';
import { TSelectedPhotos } from '@/components/Gallery/types';

export type TProps = {
  navigation: any;
};

export default function GalleryIndex({ navigation }: TProps) {
  const [selectedFileName, setSelectedFileName] = useState<TSelectedPhotos[]>([]);

  const { GalleryStackType } = useStackContext();

  const selectedPhotoHandler = ({ filename, uri }: TSelectedPhotos) => {
    if (GalleryStackType !== 'Animation' && selectedFileName.length >= 2) {
      Alert.alert('2장을 초과했습니다.');
      return;
    }
    let copied = selectedFileName.slice();
    const exit = copied.find(p => p.filename === filename);
    if (exit) {
      copied = copied.filter(p => p.filename !== filename);
      setSelectedFileName(copied);
      return;
    } else {
      setSelectedFileName([
        ...copied,
        {
          ['filename']: filename,
          ['uri']: uri,
        },
      ]);
    }
  };

  const canclePhotoHandler = (filename: string) => {
    const copied = selectedFileName.slice();
    const filteredPhotoList = copied.filter(p => p.filename !== filename);
    setSelectedFileName(filteredPhotoList);
  };

  const goToEffectScreen = () => {
    if (GalleryStackType === 'Animation' && selectedFileName.length < 3) {
      Alert.alert('사진을 더 선택해주세요!');
      return;
    } else if (selectedFileName.length < 2) {
      Alert.alert('사진을 더 선택해주세요!');
      return;
    }

    navigation.navigate('EffectPage', {
      selectedFileName,
      effectName: GalleryStackType,
    });
  };

  return (
    <View style={{ height: Layout.screen.height }}>
      {!selectedFileName.length ? (
        <Title title={GalleryStackType} navigation={navigation} />
      ) : (
        <EditPhotoHeader
          selectedFileName={selectedFileName}
          canclePhotoHandler={canclePhotoHandler}
          goToEffectScreen={goToEffectScreen}
        />
      )}
      <View
        style={{
          width: '100%',
          paddingHorizontal: 30,
          backgroundColor: Colors.backgroundColor,
          paddingBottom: 30,
        }}>
        <Text style={{ color: Colors.mainColor }}>
          {GalleryStackType === 'Animation'
            ? '사진을 3장 이상 선택해주세요'
            : '사진을 2장 선택해주세요.'}
        </Text>
      </View>
      <PhotoList
        navigation={navigation}
        selectedPhotoHandler={selectedPhotoHandler}
        selectedFileName={selectedFileName}
      />
    </View>
  );
}
