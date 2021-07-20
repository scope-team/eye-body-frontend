import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Title from '@/components/Title';
import PhotoList from '@/components/Gallery/PhotoList';
import EditPhotoHeader from '@/components/Header/EditPhotoHeader';
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

export default function GalleryIndex({ navigation }: TProps) {
  const [photoList, setPhotoList] = useState<TPhotos[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<TPhotos[]>([]);

  const { GalleryStackType } = useStackContext();
  console.log(GalleryStackType);

  useEffect(() => {
    setPhotoList(MOCK_IMAGE_ARRAY);
  }, []);

  const selectedPhotoHandler = (id: number) => {
    const newArray = photoList.map(el => {
      return el.id === id ? { ...el, isSelect: !el.isSelect } : el;
    });
    setPhotoList(newArray);
  };

  return (
    <View>
      {!selectedPhotos.length ? (
        <Title title={GalleryStackType} navigation={navigation} />
      ) : (
        <EditPhotoHeader selectedPhotos={selectedPhotos} />
      )}
      <PhotoList
        navigation={navigation}
        selectedPhotoHandler={selectedPhotoHandler}
        photoList={photoList}
      />
    </View>
  );
}
