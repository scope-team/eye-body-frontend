import React, { useState, useRef } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Layout from '@/constants/Layout';
import SVGIcon from '@/lib/svg/SVGIcon';

type Tprops = {
  selectedFileName: any;
  speedOfAnimation: number;
};

type TItem = {
  item: any;
  index: number;
};

function AnimationImage({ selectedFileName, speedOfAnimation }: Tprops) {
  const slideRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  console.log(speedOfAnimation);
  const playAnimationHandler = () => {
    setIsPlaying(() => !isPlaying);
    console.log(isPlaying);
    if (isPlaying) {
      slideRef.current.stopAutoplay();
      console.log('1');
    } else {
      slideRef.current.startAutoplay();
      console.log('2');
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
        <ImageBackground source={{ uri: item.uri }} style={{ width: '100%', height: '100%' }} />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        ref={slideRef}
        autoplay={false}
        autoplayDelay={1000}
        autoplayInterval={1000}
        data={selectedFileName}
        renderItem={renderItem}
        sliderWidth={Layout.screen.width}
        itemWidth={Layout.screen.width}
        enableMomentum={true}
        lockScrollWhileSnapping={false}
      />
      <TouchableOpacity onPress={playAnimationHandler}>
        <SVGIcon
          icon={isPlaying ? 'play_btn' : 'stop_btn'}
          size="50"
          style={{
            position: 'absolute',
            bottom: 30,
            left: Layout.screen.width / 2 - 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default AnimationImage;