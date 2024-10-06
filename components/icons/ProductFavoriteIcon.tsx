import Svg, { SvgProps, Path } from 'react-native-svg';

interface Props extends SvgProps {
    active?: boolean;
    size?: number;
}

const ProductFavoriteIcon = ({ active, size = 16, ...props }: Props) => (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 19" {...props}>
        <Path
            fill={active ? '#F86F42' : '#fff'}
            stroke={active ? '#F86F42' : '#fff'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 4.694C8 0 1 .5 1 6.5s9 11 9 11 9-5 9-11-7-6.5-9-1.806Z"
        />
    </Svg>
);
export default ProductFavoriteIcon;
