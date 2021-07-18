import React, { useEffect } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import PhotoItem from '@/components/Gallery/PhotoItem';
import useStackContext from '@/lib/context/useStackContext';

type TProps = {
  navigation: any;
};

export default function PhotoList({ navigation }: TProps) {
  const MOCK_IMAGE_ARRAY = [
    'assets/images/mock/img1.jpeg',
    'assets/images/mock/img2.jpeg',
    'assets/images/mock/img3.jpeg',
    'assets/images/mock/img4.jpeg',
    'assets/images/mock/img5.jpeg',
  ];

  const IsEffect = true;

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
        renderItem={({ item }) => {
          return (
            <PhotoItem src={item} isCallStackNavigator={isCallStackNavigator} IsEffect={IsEffect} />
          );
        }}
      />
    </View>
  );
}
