import React, { useEffect } from 'react';
import { View, Alert, ToastAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import BottomTab from '@components/Camera/BottomTab';

type TProps = {
  navigation: any;
};

export default function CameraIndex({ navigation }: TProps) {
  const cameraRef = React.useRef<any>();

  useEffect(() => {
    askPermission();
  }, []);

  const askPermission = async () => {
    try {
      const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (result === RESULTS.GRANTED) {
      }
    } catch (error) {
      console.log('askPermission', error);
    }
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      if (data) {
        console.log(data);
        // const result = await CameraRoll.save(data.uri);
        // console.log(result);
        Alert.alert('Picture Taken!', data.uri);
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
        ref={cameraRef}
        style={{ width: '100%', height: '100%' }}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <BottomTab navigation={navigation} takePhoto={takePhoto} />
    </View>
  );
}
