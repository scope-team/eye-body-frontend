import React, { useState, useEffect } from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import { View, FlatList } from 'react-native';
import PhotoItem from '@/components/Gallery/PhotoItem';
import useStackContext from '@/lib/context/useStackContext';
import { MOCK_IMAGE_ARRAY } from '@/constants/gallery/mock';

type TPhotos = {
  src: string;
  id: number;
  isSelect: boolean;
};

type TProps = {
  navigation: any;
};

const isEffect = true;

export default function PhotoList({ navigation }: TProps) {
  const [photoList, setPhotoList] = useState<TPhotos[]>([]);

  useEffect(() => {
    setPhotoList(MOCK_IMAGE_ARRAY);
  }, []);

  const isCallStackNavigator = () => {
    navigation.navigate('WriteStack');
  };

  const getPhotos = async () => {
    try {
      const { edges } = await CameraRoll.getPhotos({
        first: 10,
      });
      console.log(edges);
    } catch (error) {
      console.log('getPhoto', error);
    }
  };

  useEffect(() => {
    // getPhotos();
  }, []);

  const handleCheckPhoto = (id: number) => {
    const newArray = photoList.map(el => {
      return el.id === id ? { ...el, isSelect: !el.isSelect } : el;
    });
    setPhotoList(newArray);
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
          return (
            <PhotoItem
              src={item.src}
              id={item.id}
              isCallStackNavigator={isCallStackNavigator}
              isEffect={isEffect}
              isSelect={item.isSelect}
              handleCheckPhoto={handleCheckPhoto}
            />
          );
        }}
      />
    </View>
  );
}
