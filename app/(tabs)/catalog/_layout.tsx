import { Stack } from 'expo-router';

export default function CatalogLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='catalogDeep' />
    </Stack>
  );
}
