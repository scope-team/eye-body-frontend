import React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import BottomTab from '@components/Camera/BottomTab';

type TProps = {
  navigation: any;
};

export default function CameraIndex({ navigation }: TProps) {
  const cameraRef = React.useRef<any>();

  const takePhoto = async () => {
    console.log(cameraRef);
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log(data);
      if (data) {
        const result = await CameraRoll.saveToCameraRoll(data.uri);
        console.log(result);
      }
    }
  };

  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#303030',
      }}>
      <RNCamera
        style={{ width: '100%', height: '100%' }}
        type={RNCamera.Constants.Type.front}
        captureAudio={false}
      />
      <BottomTab navigation={navigation} takePhoto={takePhoto} />
    </View>
  );
}
