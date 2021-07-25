import React, { useState, useEffect } from 'react';
import PhotoItem from '../../components/Gallery/PhotoItem';
import { View, FlatList, Text } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import tw from 'styles/tailwind';
import { TSelectedPhotos } from '@/components/Gallery';
import { dateFormatter } from '@/lib/date';
import { TEdge, TGetPhotoRes, TInnerEdge } from '@/lib/models/photo';

type TProps = {
  navigation: any;
  name?: string;
  selectedFileName?: any[];
  selectedPhotoHandler?: ({ filename, uri }: TSelectedPhotos) => void;
};

export default React.memo(function PhotoList({
  navigation,
  name,
  selectedFileName,
  selectedPhotoHandler,
}: TProps) {
  const [photoList, setPhotoList] = useState<TEdge>([]);
  const [monthsList, setMonthList] = useState<string[]>(['2021. 05']);

  const isCallStackNavigator = () => {
    navigation.navigate('WriteStack');
  };

  const getPhotos = async () => {
    try {
      const { edges } = await CameraRoll.getPhotos({
        first: 40,
      });
      const formatArrayForDate = edges.map((item, index) => {
        let createdAt: string = dateFormatter(item.node.timestamp);
        const exist = monthsList.includes(createdAt);

        if (!exist) {
          setMonthList([...monthsList, createdAt]);
        }
        if (index === 4) {
          createdAt = '2021. 05';
        }
        return { ...item, createdAt };
      });

      setPhotoList(formatArrayForDate);
    } catch (error) {
      console.log('getPhoto', error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <View
      style={tw`h-full gray_20`}
      // style={{
      //   height: '100%',
      //   backgroundColor: '#202020',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   paddingBottom: 200,
      // }}
    >
      <FlatList
        scrollEnabled={true}
        data={monthsList}
        horizontal={false}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: month }) => {
          return (
            <View style={{ marginBottom: 20 }}>
              <Text style={{ color: 'white', paddingLeft: 5, marginBottom: 5 }}>{month}</Text>
              <FlatList
                scrollEnabled={true}
                data={photoList}
                horizontal={false}
                numColumns={3}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{
                        display: item.createdAt === month ? 'flex' : 'none',
                      }}>
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
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />

      {/* {monthsList.map((month, index) => {
        return (
          <View style={{ height: '100%' }}>
            <Text>{month}</Text>
            <FlatList
              scrollEnabled={true}
              data={photoList}
              horizontal={false}
              numColumns={3}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => {
                console.log(item);
                return (
                  <View
                    style={{
                      display: item.createdAt === month ? 'flex' : 'none',
                    }}>
                    <PhotoItem
                      uri={item.node.image.uri}
                      filename={item.node.image.filename ?? ''}
                      timestamp={item.node.timestamp}
                      isCallStackNavigator={isCallStackNavigator}
                      isEffect={name !== 'GalleryPage' ? true : false}
                      isSelect={
                        selectedFileName &&
                        selectedFileName.find(p => p.filename === item.node.image.filename)
                      }
                      selectedPhotoHandler={selectedPhotoHandler}
                    />
                  </View>
                );
              }}
            />
          </View>
        );
      })} */}
    </View>
  );
});
