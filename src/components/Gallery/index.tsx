import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import Title from '@/components/Title';
import PhotoList from '@/components/Gallery/PhotoList';
import EditPhotoHeader from '@/components/Header/EditPhotoHeader';
import useStackContext from '@/lib/context/useStackContext';
import Colors from '@/constants/Colors';

export type TProps = {
  navigation: any;
  route: any;
};

export type TImages = {
  fileSize: number;
  filename: string;
  height: number;
  playableDuration: any;
  uri: string;
  width: number;
};

export type TPhotos = {
  group_name: string;
  image: TImages;
  location: string | null;
  timestamp: number;
  type: string;
};

export type TSelectedPhotos = {
  filename: string;
  uri: string;
};

export default function GalleryIndex({ navigation, route }: TProps) {
  const [selectedFileName, setSelectedFileName] = useState<TSelectedPhotos[]>([]);

  const { GalleryStackType } = useStackContext();

  useEffect(() => {}, []);

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

  return (
    <View style={{}}>
      {!selectedFileName.length ? (
        <Title title={GalleryStackType} navigation={navigation} />
      ) : (
        <EditPhotoHeader
          selectedFileName={selectedFileName}
          canclePhotoHandler={canclePhotoHandler}
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
