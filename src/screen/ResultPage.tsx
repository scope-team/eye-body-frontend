import React, { useRef } from 'react';
import { View, Alert, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import StackHeader from '../components/Header/StackHeader';
import Effect from '@/components/Effect';
import SVGIcon from '@/lib/svg/SVGIcon';
import Share from 'react-native-share';
import { Social } from 'react-native-share/lib/typescript/types';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import tw from 'styles/tailwind';

type TProps = {
  navigation: any;
  route: any;
};

export default function ResultPage({ navigation, route }: TProps) {
  const captureRef = useRef<any>(null);

  const getPhotoUri = async (): Promise<string> => {
    const uri = await captureRef.current.capture();
    console.log('ππ Image saved to', uri);
    return uri;
  };

  // const onCapture = async (social: any) => {
  //   try {
  //     const uri = await getPhotoUri();

  //     const options: any = {
  //       title: 'Share Title',
  //       message: 'Share Message',
  //       url: uri,
  //       type: 'image/jpeg',
  //     };
  //     console.log(Share.shareSingle);
  //     if (social === null) {
  //       const result = await Share.open(options);
  //       console.log('π»π» result with no social', result);
  //     } else {
  //       const result = await Share.shareSingle({
  //         ...options,
  //         social,
  //       });
  //       console.log(`π»π» result with social ${social}`, result);
  //     }
  //   } catch (e) {
  //     console.log('π»π»π» snapshot failed', e);
  //   }
  // };

  const onSaveHandler = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      Alert.alert('κ°€λ¬λ¦¬ μ κ·Ό κΆνμ΄ μμ΄μ');
      return;
    }
    const uri = await getPhotoUri();
    const result = await CameraRoll.save(uri);
    if (result) {
      Alert.alert('μ¬μ§μ΄ μ μ₯λμμ΅λλ€~!');
    }
  };

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  return (
    <View style={tw`background-color h-full`}>
      <StackHeader navigation={navigation} isAfterEffectPage />
      <ViewShot ref={captureRef} options={{ format: 'jpg', quality: 0.9 }}>
        <View>
          <Effect
            selectedFileName={route.params.selectedFileName}
            effectName={route.params.effectName}
            isAfterEffectPage
          />
          <SVGIcon icon="team_logo" size="90" style={tw`absolute left-40dh bottom-0`} />
        </View>
      </ViewShot>
      <View style={tw`flex-row items-center justify-center`}>
        <TouchableOpacity onPress={onSaveHandler}>
          <SVGIcon icon="save" size="120" />
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => {
        //   onCapture('facebook');
        // }}
        >
          <SVGIcon icon="share" size="120" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
