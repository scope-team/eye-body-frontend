import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Title from '@/components/Title';
import PhotoList from '@/components/Gallery/PhotoList';
import EditPhotoHeader from '@/components/Header/EditPhotoHeader';
import useStackContext from '@/lib/context/useStackContext';

export type TProps = {
  navigation: any;
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

export default function GalleryIndex({ navigation }: TProps) {
  const [selectedFileName, setSelectedFileName] = useState<TSelectedPhotos[]>([]);

  const { GalleryStackType } = useStackContext();

  useEffect(() => {});

  const selectedPhotoHandler = ({ filename, uri }: TSelectedPhotos) => {
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

  return (
    <View>
      {!selectedFileName.length ? (
        <Title title={GalleryStackType} navigation={navigation} />
      ) : (
        <EditPhotoHeader selectedFileName={selectedFileName} />
      )}

      <PhotoList
        navigation={navigation}
        selectedPhotoHandler={selectedPhotoHandler}
        selectedFileName={selectedFileName}
      />
    </View>
  );
}
