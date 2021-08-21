import React, { useState, useRef } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Layout from '@/constants/Layout';
import SVGIcon from '@/lib/svg/SVGIcon';
import tw from 'styles/tailwind';

type Tprops = {
  selectedFileName: any;
  speedOfAnimation?: number;
  isAfterEffectPage?: boolean;
};

type TItem = {
  item: any;
  index: number;
};

function AnimationImage({ selectedFileName, speedOfAnimation = 0, isAfterEffectPage }: Tprops) {
  const slideRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playAnimationHandler = () => {
    setIsPlaying(() => !isPlaying);
    if (isPlaying) {
      slideRef.current.stopAutoplay();
    } else {
      slideRef.current.startAutoplay();
    }
  };

  const renderItem = ({ item, index }: TItem) => {
    return (
      <View
        style={{
          width: Layout.screen.width,
          height: Layout.screen.height / 2,
          position: 'relative',
        }}>
        <ImageBackground source={{ uri: item.uri }} style={tw`w-full h-full`} />
      </View>
    );
  };

  return (
    <View style={tw`w-full`}>
      <Carousel
        ref={slideRef}
        autoplay={false}
        autoplayDelay={1500 - Math.floor(speedOfAnimation) * 100}
        autoplayInterval={1500 - Math.floor(speedOfAnimation) * 100}
        data={selectedFileName}
        renderItem={renderItem}
        sliderWidth={Layout.screen.width}
        itemWidth={Layout.screen.width}
        enableMomentum={true}
        lockScrollWhileSnapping={false}
      />
      {!isAfterEffectPage ? (
        <TouchableOpacity onPress={playAnimationHandler}>
          <SVGIcon
            icon={isPlaying ? 'play_btn' : 'stop_btn'}
            size="50"
            style={tw`absolute bottom-7 left-45`}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

export default AnimationImage;
