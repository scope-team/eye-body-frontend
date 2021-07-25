import React, { useState, useEffect, Dispatch } from 'react';
import PhotoItem from '../../components/Gallery/PhotoItem';
import { View, TouchableOpacity, FlatList } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  navigation: any;
  selectedFileName?: any[];
  setSelectedFileName?: Dispatch<React.SetStateAction<string[]>>;
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
  selectedFileName,
  setSelectedFileName,
}: TProps) {
  const [photoList, setPhotoList] = useState<TPhotos[]>([]);

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
    // getPhotos();
  }, []);

  const selectedPhotoHandler = (filename: string) => {
    let copied = selectedFileName.slice();
    const exit = copied.find(p => p.filename === filename);
    if (exit) {
      copied.filter(p => p.filename !== filename);
    }
    setSelectedFileName([
      ...copied,
      {
        filename: 'filename',
      },
    ]);
  };

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
          console.log(item);
          return (
            <PhotoItem
              src={item.node.image.uri}
              filename={item.node.image.filename}
              isCallStackNavigator={isCallStackNavigator}
              isEffect={isEffect}
              isSelect={true}
              selectedPhotoHandler={selectedPhotoHandler}
            />
          );
        }}
      />
    </View>
  );
});
