import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = {
  score: number;
  count: number;
  scoreMargin?: number;
  fontSize?: number;
  scoreSize?: number;
  starSize?: number;
  vertical?: boolean;
};

interface ProductStarIconProps extends SvgProps {
  active?: boolean;
  size?: number;
}

const ProductStarIcon = ({
  active,
  size = 8,
  ...props
}: ProductStarIconProps) => (
  <Svg width={size} height={size} fill='none' viewBox='0 0 15 14' {...props}>
    <Path
      fill={active ? '#212529' : '#ADB4C2'}
      d='m7.5 0 1.684 5.182h5.449l-4.408 3.203 1.683 5.183L7.5 10.365l-4.408 3.203 1.683-5.183L.367 5.182h5.45L7.5 0Z'
    />
  </Svg>
);

export default function ProductReviews({
  score,
  count,
  scoreMargin = 0,
  fontSize = 10,
  scoreSize,
  starSize = 8,
  vertical = false,
}: Props) {
  const textStyle = {
    fontSize,
    lineHeight: fontSize + 2,
  };

  const scoreTextStyle = scoreSize
    ? { ...textStyle, fontSize: scoreSize, lineHeight: scoreSize + 2 }
    : textStyle;

  return (
    <View
      style={[
        styles.wrapper,
        {
          flexDirection: vertical ? 'column' : 'row',
          alignContent: vertical ? 'flex-start' : 'center',
        },
      ]}
    >
      <Text style={[scoreTextStyle, { marginRight: scoreMargin }]}>
        {score}
      </Text>
      <View style={styles.stars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <ProductStarIcon
            size={starSize}
            key={i}
            active={i < Math.floor(score)}
          />
        ))}
      </View>
      <Text style={textStyle}>
        {!vertical && ' -'} {count} отзывов
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
  },
  stars: {
    marginLeft: 2,
    flexDirection: 'row',
    gap: 2,
  },
});
