import React, { useState, useEffect, Dispatch } from 'react';
import PhotoItem from '../../components/Gallery/PhotoItem';
import { View, TouchableOpacity, FlatList } from 'react-native';
import CameraRoll, { PhotoIdentifier } from '@react-native-community/cameraroll';
import useStackContext from '@/lib/context/useStackContext';
import { TSelectedPhotos } from '@/components/Gallery';

type TProps = {
  navigation: any;
  name?: string;
  selectedFileName?: any[];
  selectedPhotoHandler?: ({ filename, uri }: TSelectedPhotos) => void;
};

type TImages = {
  fileSize: number;
  filename: string;
  height: number;
  playableDuration: number | null;
  uri: string;
  width: number;
};

type TPhotos = {
  node: {
    group_name: string;
    image: TImages;
    location: string | null;
    timestamp: number;
    type: string;
  };
};

const isEffect = true;

export default React.memo(function PhotoList({
  navigation,
  name,
  selectedFileName,
  selectedPhotoHandler,
}: TProps) {
  const [photoList, setPhotoList] = useState<PhotoIdentifier[]>([]);

  const isCallStackNavigator = () => {
    navigation.navigate('WriteStack');
  };

  const getPhotos = async () => {
    try {
      const { edges } = await CameraRoll.getPhotos({
        first: 10,
      });
      setPhotoList(edges);
    } catch (error) {
      console.log('getPhoto', error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        scrollEnabled={false}
        data={photoList}
        horizontal={false}
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <PhotoItem
              uri={item.node.image.uri}
              filename={item.node.image.filename ?? ''}
              isCallStackNavigator={isCallStackNavigator}
              isEffect={name !== 'GalleryPage' ? true : false}
              isSelect={
                selectedFileName &&
                selectedFileName.find(p => p.filename === item.node.image.filename)
              }
              selectedPhotoHandler={selectedPhotoHandler}
            />
          );
        }}
      />
    </View>
  );
});
