import { Tabs, useSegments } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 8,
          paddingBottom: 14,
          borderTopColor: '#EBEEF4',
          borderTopWidth: 1,
          backgroundColor: 'white',
        },
        tabBarItemStyle: {
          padding: 0,
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.textFocused : styles.textDefault}>
              Home
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name='catalog'
        options={{
          title: 'Catalog',
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.textFocused : styles.textDefault}>
              Catalog
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  textDefault: {
    color: '#212529',
    fontSize: 12,
    lineHeight: 12,
  },
  textFocused: {
    color: '#F86F42',
    fontSize: 12,
    lineHeight: 12,
  },
});
