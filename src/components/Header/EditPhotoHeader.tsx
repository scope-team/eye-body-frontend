import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import SVGIcon from '@/lib/svg/SVGIcon';

type Tprops = {
  selectedPhotos: any[];
};

export default React.memo(function EditPhotoHeader({ selectedPhotos }: Tprops) {
  return <View style={{ width: '100%', height: 100, backgroundColor: '#202020' }}></View>;
});
