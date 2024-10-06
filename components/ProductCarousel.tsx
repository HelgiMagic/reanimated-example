import { StyleSheet, View, Image, Text } from 'react-native';
import { useState, useCallback, memo } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import ProductFavoriteIcon from '@/components/icons/ProductFavoriteIcon';
import { Pressable } from 'react-native';

const carouselHeight = 174;

type Props = {
  images: string[];
  width: number;
};

const ProductCarousel = ({ images, width = 100 }: Props) => {
  const [favorite, setFavorite] = useState(false);

  const progress = useSharedValue<number>(0);

  const handleFavoritePress = useCallback(() => {
    setFavorite(!favorite);
  }, [favorite]);

  return (
    <View style={styles.carouselWrapper}>
      <Carousel
        loop={false}
        width={width}
        height={carouselHeight}
        data={images}
        windowSize={2}
        onProgressChange={progress}
        onConfigurePanGesture={(panGesture) => {
          panGesture.activeOffsetX([-10, 10]);
        }}
        renderItem={({ item, index }) => (
          <Image style={styles.image} key={index} source={{ uri: item }} />
        )}
      />

      <Pressable style={styles.favoriteIcon} onPress={handleFavoritePress}>
        <ProductFavoriteIcon active={favorite}></ProductFavoriteIcon>
      </Pressable>
    </View>
  );
};

export default memo(ProductCarousel);

const styles = StyleSheet.create({
  carouselWrapper: {
    height: carouselHeight + 10,
    position: 'relative',
    zIndex: 101,
    width: '100%',
  },
  pagination: {
    gap: 5,
  },
  image: {
    height: 174,
    width: '100%',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  offers: {
    position: 'absolute',
    bottom: 18,
    left: 0,

    gap: 4,
    alignItems: 'flex-start',
  },
  offer: {
    width: 'auto',
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 8,
    gap: 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  offerText: {
    fontSize: 8,
    lineHeight: 16,
  },
});
