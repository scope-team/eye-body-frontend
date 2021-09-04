import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Title from '@/components/Title';
import useStackContext, { TGalleryStack } from '@/lib/context/useStackContext';
import SVGIcon from '@/lib/svg/SVGIcon';
import tw from '@/styles/tailwind';

type TProps = {
  navigation: any;
};

const MENU: TGalleryStack[] = ['Compare', 'Before & After', 'Animation'];

export default function PopupIndex({ navigation }: TProps) {
  let { PopupStackType, setGalleryStack, GalleryStackType } = useStackContext();

  const goToEditPhotoPage = (title: TGalleryStack) => {
    navigation.navigate('GalleryStack');
    setGalleryStack(title);
  };

  const render = () => {
    if (PopupStackType === 'EditPhoto') {
      return (
        <View style={tw`h-2/3 content-center justify-center`}>
          <Text style={tw`text-white text-lg text-center mb-8 relative w-full`}>
            어떻게 편집할까요? <SVGIcon icon="question" size="16" style={{ marginBottom: 4 }} />
          </Text>

          {MENU.map(title => {
            return (
              <TouchableOpacity
                style={tw`h-12 bg-themeColor border30 w-full my-2`}
                onPress={() => {
                  goToEditPhotoPage(title);
                }}
                key={title}>
                <View style={tw`h-full w-full`}>
                  <Text style={tw`text-black text-center m-auto text-lg font-medium`}>{title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
    if (PopupStackType === 'SelectGuide') {
      return (
        <View style={{ height: '100%', backgroundColor: '#202020' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>가이드 사진을 어디서 가져올까요?</Text>
          {['Eye Body', 'My Phone'].map(title => {
            return (
              <TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
  };

  return (
    <>
      <View
        style={{
          width: '100%',
          height: '100%',
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: '#202020',
        }}>
        {render()}
      </View>
    </>
  );
}
