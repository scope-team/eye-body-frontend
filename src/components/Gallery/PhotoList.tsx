import React, { useState, useEffect } from 'react';
import PhotoItem from '../../components/Gallery/PhotoItem';
import { View, TouchableOpacity, FlatList } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  navigation: any;
  selectedPhotoHandler?: (id: string) => void;
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

export default React.memo(function PhotoList({ navigation, selectedPhotoHandler }: TProps) {
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
          console.log(item);
          return (
            <PhotoItem
              src={item.node.image.uri}
              id={item.node.image.uri}
              isCallStackNavigator={isCallStackNavigator}
              isEffect={isEffect}
              isSelect={item.isSelect}
              selectedPhotoHandler={selectedPhotoHandler}
            />
          );
        }}
      />
    </View>
  );
});
