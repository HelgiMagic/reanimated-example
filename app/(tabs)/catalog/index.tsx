import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function CatalogScreen() {
  return (
    <View>
      <Text>Catalog</Text>
      <Link href='(tabs)/catalogDeep'>tap here</Link>
    </View>
  );
}
