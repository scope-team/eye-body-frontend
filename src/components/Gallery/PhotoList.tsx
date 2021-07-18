import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
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
    <View style={{ flexDirection: 'row', height: '100%', backgroundColor: '#202020' }}>
      {MOCK_IMAGE_ARRAY.map(src => (
        <PhotoItem src={src} isCallStackNavigator={isCallStackNavigator} key={src} />
      ))}
    </View>
  );
}
