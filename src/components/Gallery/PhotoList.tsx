import React, { useState, useEffect } from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import { View, FlatList } from 'react-native';
import { MOCK_IMAGE_ARRAY } from '@/constants/gallery/mock';
import PhotoItem from '@/components/Gallery/PhotoItem';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  navigation: any;
};
const isEffect = true;

export default function PhotoList({ navigation }: TProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number[]>([]);

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

  const handleCheckPhoto = (index: number) => {
    setSelectedPhoto([...selectedPhoto, index]);
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
        data={MOCK_IMAGE_ARRAY}
        horizontal={false}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <PhotoItem
              src={item}
              index={index}
              isCallStackNavigator={isCallStackNavigator}
              isEffect={isEffect}
              isChecked={selectedPhoto.includes(index) ? true : false}
              handleCheckPhoto={handleCheckPhoto}
            />
          );
        }}
      />
    </View>
  );
}
