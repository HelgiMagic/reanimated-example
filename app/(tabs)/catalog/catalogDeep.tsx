import { ScrollView, View, StyleSheet, Dimensions, Text } from 'react-native';
import Product from '@/components//Product';
import { FlashList } from '@shopify/flash-list';

const fakeProducts = [
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
    ],
    id: 1,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
    ],
    id: 2,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
    ],
    id: 3,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
    ],
    id: 4,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
    ],
    id: 5,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
    ],
    id: 6,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
    ],
    id: 7,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
    ],
    id: 8,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
    ],
    id: 9,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
    ],
    id: 10,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
    ],
    id: 11,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
    ],
    id: 12,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
    ],
    id: 13,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
    ],
    id: 14,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
    ],
    id: 15,
  },
  {
    href: '/catalog/product/531264',
    images: [
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png',
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png',
    ],
    id: 16,
  },
];

const windowWidth = Dimensions.get('window').width;
const ProductCarouselWidth = (windowWidth - 32) / 2 - 8;

export default function CategoryDeepPage() {
  const name = 'Products for man';
  const count = '154';

  return (
    <ScrollView
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={styles.pageContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.centerText}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.count}>{count} products</Text>
      </View>

      <FlashList
        data={fakeProducts}
        numColumns={2}
        contentContainerStyle={{ paddingTop: 16 }}
        estimatedItemSize={265}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Product
            carouselWidth={ProductCarouselWidth}
            style={{
              paddingLeft: index % 2 ? 8 : 0,
              paddingRight: index % 2 ? 0 : 8,
            }}
            images={item.images}
            href={item.href}
          />
        )}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    minHeight: '100%',
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  centerText: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: '#212529',
    marginTop: 8,
  },
  count: {
    fontSize: 14,
    color: '#212529',
    marginTop: 4,
  },
});
