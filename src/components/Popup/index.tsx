import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStackContext, { TGalleryStack } from '@/lib/context/useStackContext';
import SVGIcon from '@/lib/svg/SVGIcon';
import tw from '@/styles/tailwind';
import DetailModal from '@/components/Popup/DetailModal';

type TProps = {
  navigation: any;
};

const MENU: TGalleryStack[] = ['Compare', 'Before & After', 'Animation'];

export default function PopupIndex({ navigation }: TProps) {
  let { PopupStackType, setGalleryStack } = useStackContext();
  const [isModalOn, setModalOn] = useState(false);

  const goToEditPhotoPage = (title: TGalleryStack) => {
    navigation.navigate('GalleryStack');
    setGalleryStack(title);
  };

  const render = () => {
    if (PopupStackType === 'EditPhoto') {
      if (!isModalOn) {
        return (
          <View style={tw`h-2/3 content-center justify-center`}>
            <Text style={tw`text-white text-lg text-center mb-8 w-full`}>
              어떻게 편집할까요?
              <TouchableOpacity onPress={() => setModalOn(true)} style={tw``}>
                <SVGIcon icon="question" size="16" style={{ marginBottom: 2, marginLeft: 12 }} />
              </TouchableOpacity>
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
                    <Text style={tw`text-black text-center m-auto text-lg font-medium`}>
                      {title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }
      return (
        <View>
          <DetailModal setModalOn={setModalOn} />
        </View>
      );
    }
    if (PopupStackType === 'SelectGuide') {
      return (
        <View style={tw`h-full background-color`}>
          <Text style={tw`text-white text-lg text-center mb-8 relative w-full`}>
            가이드 사진을 어디서 가져올까요?
          </Text>
          {['Eye Body', 'My Phone'].map(title => {
            return (
              <TouchableOpacity>
                <Text style={tw`text-black text-center m-auto text-lg font-medium`}>{title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
  };

  return <View style={tw`w-full h-full px-12 background-color`}>{render()}</View>;
}
