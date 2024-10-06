import { StyleSheet, View, Text, Pressable } from 'react-native';
import ProductCarousel from './ProductCarousel';
import { Link } from 'expo-router';
import { useCallback, useState, memo } from 'react';
import { ViewStyle } from 'react-native';
import { Href } from 'expo-router';
import ProductReviews from './ProductReviews';

type Props = {
  images: string[];
  style: ViewStyle;
  href: Href<string>;
  carouselWidth: number;
};

const Product = ({ images, style, href, carouselWidth }: Props) => {
  const [buttonActive, setButtonActive] = useState(false);

  const handleButtonClick = useCallback(() => {
    setButtonActive(!buttonActive);
  }, [buttonActive]);

  return (
    <View style={[styles.productWrapper, style]}>
      <ProductCarousel images={images} width={carouselWidth}></ProductCarousel>
      <Link href={href} style={styles.name}>
        Product name
      </Link>

      <View style={styles.prices}>
        <Text style={styles.price}>3 999 $</Text>
        <Text style={styles.oldPrice}>4 999 $</Text>
      </View>

      <ProductReviews score={4.8} count={46}></ProductReviews>

      <Pressable
        style={[styles.button, buttonActive && styles.activeButton]}
        onPress={handleButtonClick}
      >
        <Text style={styles.buttonText}>
          {buttonActive ? 'In basket' : 'Add to basket'}
        </Text>
      </Pressable>
    </View>
  );
};

export default memo(Product);

const styles = StyleSheet.create({
  productWrapper: {
    flex: 1,
  },
  name: {
    marginTop: 8,
    color: '#495057',
    fontSize: 12,
    lineHeight: 14,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  prices: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-end',
  },
  price: {
    color: '#212529',
    fontSize: 14,
  },
  oldPrice: {
    color: '#ADB4C2',
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
  button: {
    elevation: 0,
    backgroundColor: '#495057',
    borderRadius: 50,
    width: 'auto',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  activeButton: {
    backgroundColor: '#F86F42',
  },
  buttonText: {
    color: '#FAFBFD',
    fontSize: 14,
  },
});
