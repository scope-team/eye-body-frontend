import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import { RNCamera, TakePictureResponse } from 'react-native-camera';
import tw from 'styles/tailwind';
import CameraRoll from '@react-native-community/cameraroll';
import BottomTab from '@components/Camera/BottomTab';

type TProps = {
  navigation: any;
};

const PendingView = () => (
  <View style={tw`flex-1 justify-center items-center`}>
    <Text>Waiting</Text>
  </View>
);

export default function CameraIndex({ navigation }: TProps) {
  const cameraRef = useRef<RNCamera>();

  const takePhoto = async () => {
    if (cameraRef && cameraRef.current) {
      const data: TakePictureResponse = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
        base64: true,
      });

      if (data.uri) {
        const [result, error] = await CameraRoll.save(data.uri);
        if (error) console.log(error);
        result && navigation.push('WriteStack', { picture: data });
      }
    }
  };

  return (
    <View style={tw`relative w-full h-full bg-white`}>
      <RNCamera
        style={tw`w-full h-full`}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({ camera, status }) => {
          if (status !== 'READY') return <PendingView />;
          cameraRef.current = camera;
        }}
      </RNCamera>
      <BottomTab navigation={navigation} takePhoto={takePhoto} />
    </View>
  );
}
