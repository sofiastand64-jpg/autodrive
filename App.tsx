import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import CarDetailScreen from './src/screens/CarDetailScreen';
import OrderScreen from './src/screens/OrderScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import type { RootStackParamList } from './src/types';
import FavoritesScreen from './src/screens/FavoritesScreen';
import TestDriveScreen from './src/screens/TestDriveScreen';
// ... 
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CarDetail" component={CarDetailScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Contacts" component={ContactsScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="TestDrive" component={TestDriveScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}