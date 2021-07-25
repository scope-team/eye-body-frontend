import React from 'react';
import { View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import SVGIcon from '@/lib/svg/SVGIcon';

type Tprops = {
  selectedFileName: any[];
};

export default React.memo(function EditPhotoHeader({ selectedFileName }: Tprops) {
  return (
    <View style={{ width: '100%', height: 100, backgroundColor: '#202020' }}>
      <View style={{ width: '100%', height: '100%' }}>
        <FlatList
          scrollEnabled={true}
          data={selectedFileName}
          horizontal={true}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            const uri = item.uri;
            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  zIndex: 10,
                  backgroundColor: 'red',
                  marginHorizontal: 5,
                }}>
                <ImageBackground
                  source={{ uri }}
                  style={{
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
});
