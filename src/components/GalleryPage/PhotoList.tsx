import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import tw from '@/styles/tailwind';
import CameraRoll, { PhotoIdentifier } from '@react-native-community/cameraroll';
import PhotoItem from '@/components/GalleryPage/PhotoItem';
import { TSelectedPhotos } from '@/components/Gallery';

type TProps = {
  navigation: any;
  route: any;
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

export default React.memo(function PhotoPageList({
  navigation,
  route,
  name,
  selectedFileName,
  selectedPhotoHandler,
}: TProps) {
  const [photoList, setPhotoList] = useState<PhotoIdentifier[]>([]);
  console.log(photoList[0].node.timestamp);

  const isCallStackNavigator = () => {
    navigation.navigate('WriteStack');
  };

  const getPhotos = async () => {
    try {
      const { edges, page_info } = await CameraRoll.getPhotos({
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
    <View style={tw`h-full bg-gray_20 justify-center items-center `}>
      <FlatList
        numColumns={3}
        data={photoList}
        scrollEnabled={false}
        horizontal={false}
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
